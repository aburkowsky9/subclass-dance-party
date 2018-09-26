var TinyDancer = function(top, left, timeBetweenSteps) {
  // this.$batmanImg = $('<div class="batman item"></div>');
 Dancer.call(this, top, left, timeBetweenSteps); //was BlinkyDancer
  
};

TinyDancer.prototype = Object.create(Dancer.prototype); //was BlinkyDancer

TinyDancer.prototype.constructor = TinyDancer;

