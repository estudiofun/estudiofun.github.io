// initialize dice
var dice1 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice2 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice3 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice4 = ['road-train-s.png','road-train-l.png','road-train-s.png','road-train-l.png','road-train-c.png', 'road-train-c.png'];
var dice5 = ['lake-1.png','lake-2.png','lake-3.png','lake-l.png','lake-road-s.png','lake-train-s.png'];
var dice6 = ['lake-1.png','lake-2.png','lake-3.png','lake-l.png','lake-road-s.png','lake-train-s.png'];

var app = new Vue({
    el: '#game',
    data: {
      dice1: dice1,
      dice2: dice2,
      dice3: dice3,
      dice4: dice4,
      dice5: dice5,
      dice6: dice6,
      roll1: 'train-s.png',
      roll2: 'train-s.png',
      roll3: 'train-s.png',
      roll4: 'train-s.png',
      roll5: 'lake-1.png',
      roll6: 'lake-1.png',
      useLakes: false
    },
    methods: {
      roll: function(lang) {
        this.roll1 = _.shuffle(dice1)[0];
        this.roll2 = _.shuffle(dice2)[0];
        this.roll3 = _.shuffle(dice3)[0];
        this.roll4 = _.shuffle(dice4)[0];
        this.roll5 = _.shuffle(dice5)[0];
        this.roll6 = _.shuffle(dice6)[0];
      }
    }
});