var defaultTextos = data_english;
var startingIndex = 0;

var app = new Vue({
    el: '#game',
    data: {
      currentLanguage: "",
      currentIndex: startingIndex,
      textos: defaultTextos,
      texto: defaultTextos[startingIndex],
      books: [],
      chapters: [],
      verses: [],
      selectedBook: "?",
      selectedChapter: "?",
      selectedVerse: "?",
      currentSelection: "book",
      isCorrect: false,
      totalCorrect: 0,
      totalAttempts: 0,
      maxIncorrect: 3,
      isFinished: false
    },
    created: function () {
        this.setBooks();
        this.setChapters();
        this.setVerses();
    },
    computed: {
      accuracy: function () {
        return Math.round((this.totalCorrect / this.totalAttempts) * 100);
      },
      accuracyPercentage: function () {
        return Math.round((this.totalCorrect / this.totalAttempts) * 100) - 100 + "%";
      }
    },
    methods: {
      setLanguage: function(lang) {
        this.currentLanguage = lang;
        if (lang === 'english') {
          this.textos = _.shuffle(data_english);
          this.texto = this.textos[startingIndex];
        }

        if (lang === 'spanish') {
          this.textos = _.shuffle(data_spanish);
          this.texto = this.textos[startingIndex];
        }

        this.setBooks();
        this.setChapters();
        this.setVerses();

        console.log(this.textos);
      },
      getLiteral: function(id) {
        return _.find(literals, { 'id': id })[this.currentLanguage];
      },
      nextQuestion: function () {
        this.currentIndex = this.currentIndex + 1;

        if (this.currentIndex < this.textos.length) {
            this.texto = this.textos[this.currentIndex];
            this.selectedBook = "?";
            this.selectedChapter = "?";
            this.selectedVerse = "?";
            this.currentSelection = "book";
            this.isCorrect = false;
            this.setBooks();
            this.setChapters();
            this.setVerses();
        }
        else {
          this.isFinished = true;
        }
      },
      setBooks: function () {
        var currentBook = this.texto.book;
        this.books = _.shuffle(_.concat(_.sampleSize(_.reject(_.uniq(_.map(this.textos, "book")), function(o) { return o === currentBook; }), 2), this.texto.book));
      },
      setChapters: function () {
        var currentChapter = this.texto.chapter;
        this.chapters = _.sortBy(_.concat(_.sampleSize(_.reject(_.uniq(_.map(this.textos, "chapter")), function(o) { return o === currentChapter; }), 2), this.texto.chapter));
      },
      setVerses: function () {
        var currentVerse = this.texto.verse;
        this.verses = _.sortBy(_.concat(_.sampleSize(_.reject(_.uniq(_.map(this.textos, "verse")), function(o) { return o === currentVerse; }), 2), this.texto.verse));
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
              if (this.selectedChapter === this.texto.chapter) {
                this.currentSelection = "verse";
              }
              else {
                this.currentSelection = "chapter";
              }
            }
            if (this.currentSelection === "chapter" && this.selectedChapter === this.texto.chapter) {
              if (this.selectedVerse === this.texto.verse) {
                this.currentSelection = "book";
              }
              else {
                this.currentSelection = "verse";
              }
            }
            if (this.currentSelection === "verse" && this.selectedVerse === this.texto.verse) {
              if (this.selectedBook === this.texto.book) {
                this.currentSelection = "chapter";
              }
              else {
                this.currentSelection = "book";
              }
            }
          }
      }
    }
});