var TinyDancer = function(top, left, timeBetweenSteps) {
  this.$batmanImg = $('<div class="batman"></div>');
  BlinkyDancer.call(this, top, left, timeBetweenSteps); 
  
};

TinyDancer.prototype = Object.create(BlinkyDancer.prototype);

TinyDancer.prototype.constructor = TinyDancer;

