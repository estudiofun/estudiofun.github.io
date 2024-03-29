<script setup lang="ts">
import { onUnmounted } from 'vue'
import { getWordOfTheDay, allWords } from './words'
import Keyboard from './Keyboard.vue'
import { LetterState } from './types'

// Get word of the day
const answerOrig = getWordOfTheDay()

function removeAccents(word) {
  return word.replace('\xf3', 'o').replace('\xe9', 'e').replace('\xe1', 'a').replace('\xfa', 'u').replace('\xed', 'i');
}
const answer = removeAccents(answerOrig);
console.log(answer);

const allWordsNoAccents = allWords.map((word) => {
  return removeAccents(word);
})
console.log(allWordsNoAccents);

// Board state. Each tile is represented as { letter, state }
const board = $ref(
  Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: '',
      state: LetterState.INITIAL
    }))
  )
)

// Current active row.
let currentRowIndex = $ref(0)
const currentRow = $computed(() => board[currentRowIndex])

// Feedback state: message and shake
let message = $ref('')
let grid = $ref('')
let shakeRowIndex = $ref(-1)
let success = $ref(false)
let gameover = $ref(false)
let link_url = $ref('')
let tries = $ref(0);
let hints = $ref(0);
let isHint = $ref(false);
let showHelp = $ref(false);

const hintMessage = $computed(() => {
  if (hints == 0 || hints > 1) return hints + " Pistas"
  else return hints + " Pista"
})

const linkURL = $computed(() => {
  return 'https://www.jw.org/es/biblioteca/libros/Perspicacia-para-comprender-las-Escrituras/' + answerOrig;
})

// Keep track of revealed letters for the virtual keyboard
const letterStates: Record<string, LetterState> = $ref({})

// Handle keyboard input.
let allowInput = true

const onKeyup = (e: KeyboardEvent) => onKey(e.key)

window.addEventListener('keyup', onKeyup)

onUnmounted(() => {
  window.removeEventListener('keyup', onKeyup)
})

function onKey(key: string) {
  if (!allowInput) return
  if (/^[a-zA-Z]$/.test(key)) {
    fillTile(key.toLowerCase())
  } else if (key === '\xf1') {
    fillTile(key.toLowerCase())
  } else if (key === 'Backspace') {
    clearTile()
  } else if (key === 'Enter') {
    completeRow()
  }
}

function isOS() {
  return navigator.userAgent.match(/ipad|iphone/i);
}

function fillTile(letter: string) {
  for (const tile of currentRow) {
    if (!tile.letter) {
      tile.letter = letter
      break
    }
  }
}

function clearTile() {
  for (const tile of [...currentRow].reverse()) {
    if (tile.letter) {
      tile.letter = ''
      break
    }
  }
}

function useHint(event) {
  // find first unfound position
  let foundpositions = [];
  for (const row of board) {
    let foundpos = 0;
    for (const tile of row) {
      if (tile.state === LetterState.CORRECT) {
        foundpositions.push(foundpos);
      }
      foundpos++;
    }
  }

  const answerLetters: (string | null)[] = answer.split('');
  let allFound = true;
  for (let i=0;i<5;i++) {
    if (foundpositions.indexOf(i) === -1) {
      isHint = true;
      currentRow[i].state = LetterState.CORRECT;
      currentRow[i].letter = answerLetters[i];
      allFound = false;
      setTimeout(() => {
        currentRow[i].letter = '';
        currentRow[i].state = LetterState.INITIAL;
        isHint = false;
      }, 1400);
      break;
    }
  }

  if (allFound) alert('You have all the letters!')
  else hints++;

  event.target.blur();
}

function completeRow() {
  if (currentRow.every((tile) => tile.letter)) {
    console.log(currentRow)
    const guess = currentRow.map((tile) => tile.letter).join('')
    if (!allWordsNoAccents.includes(guess) && guess !== answer) {
      shake()
      showMessage(`Palabra inválida`)
      return
    }

    const answerLetters: (string | null)[] = answer.split('')
    // first pass: mark correct ones
    currentRow.forEach((tile, i) => {
      if (answerLetters[i] === removeAccents(tile.letter)) {
        tile.state = letterStates[tile.letter] = LetterState.CORRECT
        answerLetters[i] = null
      }
    })
    // second pass: mark the present
    currentRow.forEach((tile) => {
      if (!tile.state && answerLetters.includes(tile.letter)) {
        tile.state = LetterState.PRESENT
        answerLetters[answerLetters.indexOf(tile.letter)] = null
        if (!letterStates[tile.letter]) {
          letterStates[tile.letter] = LetterState.PRESENT
        }
      }
    })
    // 3rd pass: mark absent
    currentRow.forEach((tile) => {
      if (!tile.state) {
        tile.state = LetterState.ABSENT
        if (!letterStates[tile.letter]) {
          letterStates[tile.letter] = LetterState.ABSENT
        }
      }
    })

    allowInput = false
    if (currentRow.every((tile) => tile.state === LetterState.CORRECT)) {
      // yay!
      setTimeout(() => {
        grid = genResultGrid()
        
        showMessage(
          ['¡Increíble!', '¡Magnifico!', '¡Impresionante!', '¡Espléndido!', '¡Excelente!', '¡Justo a tiempo!'][
            currentRowIndex
          ],
          -1
        )

        tries++;
        gameover = true;
        link_url = linkURL;
        success = true;
      }, 1600)
    } else if (currentRowIndex < board.length - 1) {
      // go the next row
      currentRowIndex++
      tries++
      setTimeout(() => {
        allowInput = true
      }, 1600)
    } else {
      // game over :(
      tries++
      setTimeout(() => {
        grid = genResultGrid();
        gameover = true;
        link_url = linkURL;
        showMessage('La respuesta era: ' + answer.toUpperCase(), -1)
      }, 1600)
    }
  } else {
    shake()
    showMessage('No hay suficientes letras')
  }
}

function showMessage(msg: string, time = 1000) {
  message = msg
  if (time > 0) {
    setTimeout(() => {
      message = ''
    }, time)
  }
}

function copyResult() {
  let range, selection;
  let textArea = document.getElementById("copytextarea");
  if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
  } else {
      textArea.select();
  }
  document.execCommand('copy');
  textArea.blur();
  alert('¡Copiado! Puede pegarlo en un mensaje.');
}

function shake() {
  shakeRowIndex = currentRowIndex
  setTimeout(() => {
    shakeRowIndex = -1
  }, 1000)
}

const icons = {
  [LetterState.CORRECT]: '🟩',
  [LetterState.PRESENT]: '🟨',
  [LetterState.ABSENT]: '⬜',
  [LetterState.INITIAL]: null
}

function genResultGrid() {
  return board
    .slice(0, currentRowIndex + 1)
    .map((row) => {
      return row.map((tile) => icons[tile.state]).join('')
    })
    .join('\n')
}
</script>

<template>
  <Transition>
    <div class="message" v-if="message">
      {{ message }}
      <pre v-if="grid" id="grid">{{ grid }}</pre>
      <p v-if="gameover" style="font-size: 0.8rem;" v-on:click="copyResult"><a href="#" style="color: #ffffff;">Comparte su resultado</a></p>
      <p v-if="gameover"><a v-bind:href="link_url" style="color: #ffffff;" target="_blank">Aprende más sobre {{ answerOrig.toUpperCase() }}</a></p>
    </div>
  </Transition>
  <Transition>
    <div class="message message-opaque" v-if="showHelp">
      COMO JUGAR
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="help-close" data-testid="icon-close" v-on:click="() => showHelp = false"><path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
      <p class="help-text">Adivina el tema del libro Perspicacia en 6 intentos.</p>
      <ul class="help-text" style="padding-left: .5rem;">
        <li style="margin-bottom: 1rem;">Cada intento debe ser una <strong>palabra válida de 5 letras</strong> del <strong>diccionario</strong> o un tema del <strong>libro Perspicacia</strong>.</li>
        <li>Los mosaicos cambiarán de color para mostrar qué tan cerca estuvo su adivinanza de la palabra.</li>
      </ul>
      <p class="help-text"><strong class="correct">Verde</strong> significa que la letra está en la palabra y en la posición correcta.</p>
      <p class="help-text"><strong class="present">Amarillo</strong> significa que la letra está presente en la palabra pero en la posición incorrecta.</p>
      <p class="help-text"><strong class="absent">Gris</strong> significa que la letra no está presente en la palabra.</p>
    </div>
  </Transition>
  <header>
    <h1>La Palabra Perspicaz</h1>&nbsp;&nbsp;|&nbsp;&nbsp;<span class="version">v1.2</span>&nbsp;&nbsp;&nbsp;&nbsp;<button v-on:click="useHint" class="hint-button">Use una pista</button>&nbsp;&nbsp;&nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="help" viewBox="0 0 16 16" v-on:click="() => showHelp = true">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
    </svg>
  </header>
  <textarea id="copytextarea" class="copytextarea" contenteditable="true">La Palabra Perspicaz  {{tries}}/6  ({{ hintMessage }})
{{ grid }}</textarea>
  <div id="board">
    <div
      v-for="(row, index) in board"
      :class="[
        'row',
        shakeRowIndex === index && 'shake',
        success && currentRowIndex === index && 'jump'
      ]"
    >
      <div
        v-for="(tile, index) in row"
        :class="['tile', tile.letter && 'filled', tile.state && 'revealed']"
      >
        <div class="front" :style="{ transitionDelay: `${index * 300}ms` }">
          {{ tile.letter }}
        </div>
        <div
          :class="['back', tile.state]"
          :style="{
            transitionDelay: [isHint ? `100ms` : `${index * 300}ms`],
            animationDelay: [isHint ? `100ms` : `${index * 100}ms`]
          }"
        >
          {{ tile.letter }}
        </div>
      </div>
    </div>
  </div>
  <Keyboard @key="onKey" :letter-states="letterStates" />
</template>

<style scoped>
#board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  --height: min(420px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) / 6 * 5));
  margin: 0px auto;
}
.message {
  position: absolute;
  left: 50%;
  top: 80px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 16px 20px;
  z-index: 2;
  border-radius: 4px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-out;
  font-weight: 600;
}
.message-opaque {
  background-color: rgb(0, 0, 0);
}
.message.v-leave-to {
  opacity: 0;
}
.help:hover, .help-close:hover {
  cursor: pointer;
}
.help-text {
  font-weight: normal;
  font-size: 0.875rem;
}
.help-close {
  fill: #fff;
  height: 20px;
  position: absolute;
  padding: .5rem;
  right: 0;
  top: 0;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  text-transform: uppercase;
  user-select: none;
  position: relative;
}
.tile.filled {
  animation: zoom 0.2s;
}
.tile .front,
.tile .back {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.tile .front {
  border: 2px solid #d3d6da;
}
.tile.filled .front {
  border-color: #999;
}
.tile .back {
  transform: rotateX(180deg);
}
.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}

.copytextarea {
  position: absolute;
  top: -9999px;
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px);
  }
  10% {
    transform: translate(-2px);
  }
  20% {
    transform: translate(2px);
  }
  30% {
    transform: translate(-2px);
  }
  40% {
    transform: translate(2px);
  }
  50% {
    transform: translate(-2px);
  }
  60% {
    transform: translate(2px);
  }
  70% {
    transform: translate(-2px);
  }
  80% {
    transform: translate(2px);
  }
  90% {
    transform: translate(-2px);
  }
  100% {
    transform: translate(1px);
  }
}

.jump .tile .back {
  animation: jump 0.5s;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(-25px);
  }
  90% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-height: 680px) {
  .tile {
    font-size: 3vh;
  }
}
</style>
