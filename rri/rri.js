// initialize dice
var dice1 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice2 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice3 = ['train-s.png','train-t.png','road-s.png','road-t.png','train-c.png','road-c.png'];
var dice4 = ['road-train-s.png','road-train-l.png','road-train-s.png','road-train-l.png','road-train-c.png', 'road-train-c.png'];

var app = new Vue({
    el: '#game',
    data: {
      dice1: dice1,
      dice2: dice2,
      dice3: dice3,
      dice4: dice4,
      roll1: 'train-s.png',
      roll2: 'train-s.png',
      roll3: 'train-s.png',
      roll4: 'train-s.png'
    },
    methods: {
      roll: function(lang) {
        this.roll1 = _.shuffle(dice1)[0];
        this.roll2 = _.shuffle(dice2)[0];
        this.roll3 = _.shuffle(dice3)[0];
        this.roll4 = _.shuffle(dice4)[0];
      }
    }
});