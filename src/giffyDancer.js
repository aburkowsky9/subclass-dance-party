var GifDancer = function(top, left, timeBetweenSteps) {
  this.$gifImg = $('<div class="gif item"></div>');
  BlinkyDancer.call(this, top, left, timeBetweenSteps); 
};

GifDancer.prototype = Object.create(BlinkyDancer.prototype);

GifDancer.prototype.constructor = GifDancer;