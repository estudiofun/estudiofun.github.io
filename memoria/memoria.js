var textos = _.shuffle(data_spanish);
var startingIndex = 0;

// after each selection show 'Another one...' or 'I'm done. How did I do?'
// at end show total done, total correct, and "accuracy" (percentage correct)

var app = new Vue({
    el: '#game',
    data: {
      currentIndex: startingIndex,
      texto: textos[startingIndex],
      books: [],
      chapters: [],
      verses: [],
      selectedBook: "?",
      selectedChapter: "?",
      selectedVerse: "?",
      currentSelection: "book",
      isCorrect: false,
      totalCorrect: 0,
      totalCurrentIncorrect: 0,
      currentHasBeenIncorrect: false,
      totalCorrect: 0,
      totalAttempts: 0,
      maxIncorrect: 3
    },
    created: function () {
        this.setBooks();
        this.setChapters();
        this.setVerses();
    },
    computed: {
      accuracy: function () {
        return Math.round((this.totalCorrect / this.totalAttempts) * 100);
      }
    },
    methods: {
      nextQuestion: function () {
        this.currentIndex = this.currentIndex + 1;

        if (this.currentIndex < textos.length) {
            this.texto = textos[this.currentIndex];
            this.selectedBook = "?";
            this.selectedChapter = "?";
            this.selectedVerse = "?";
            this.currentSelection = "book";
            this.isCorrect = false;
            this.setBooks();
            this.setChapters();
            this.setVerses();
        }
      },
      setBooks: function () {
        var currentBook = this.texto.book;
        this.books = _.shuffle(_.concat(_.sampleSize(_.reject(_.uniq(_.map(textos, "book")), function(o) { return o === currentBook; }), 2), this.texto.book));
      },
      setChapters: function () {
        var currentChapter = this.texto.chapter;
        this.chapters = _.sortBy(_.concat(_.sampleSize(_.reject(_.uniq(_.map(textos, "chapter")), function(o) { return o === currentChapter; }), 2), this.texto.chapter));
      },
      setVerses: function () {
        var currentVerse = this.texto.verse;
        this.verses = _.sortBy(_.concat(_.sampleSize(_.reject(_.uniq(_.map(textos, "verse")), function(o) { return o === currentVerse; }), 2), this.texto.verse));
      },
      checkAnswer: function() {
          
        this.totalAttempts = this.totalAttempts + 1;

          if (this.selectedBook === this.texto.book && this.currentSelection === "book") {
            this.totalCorrect = this.totalCorrect + 1;
          } 

          if (this.selectedChapter === this.texto.chapter && this.currentSelection === "chapter") {
            this.totalCorrect = this.totalCorrect + 1;
          }

          if (this.selectedVerse === this.texto.verse && this.currentSelection === "verse") {
            this.totalCorrect = this.totalCorrect + 1;
          }

          this.isCorrect = (this.selectedBook === this.texto.book && this.selectedChapter === this.texto.chapter && this.selectedVerse === this.texto.verse);

          if (this.isCorrect) {
            this.currentSelection = "";
          }

          if (!this.isCorrect) {
            if (this.currentSelection === "book" && this.selectedBook === this.texto.book) {
              this.currentSelection = "chapter";
            }
            if (this.currentSelection === "chapter" && this.selectedChapter === this.texto.chapter) {
              this.currentSelection = "verse";
            }
            if (this.currentSelection === "verse" && this.selectedVerse === this.texto.verse) {
              this.currentSelection = "book";
            }
          }
      }
    }
});