var GifDancer = function(top, left, timeBetweenSteps) {
  // this.$gifImg = $('<div class="gif item"></div>');
  Dancer.call(this, top, left, timeBetweenSteps); 
};

GifDancer.prototype = Object.create(Dancer.prototype);

GifDancer.prototype.constructor = GifDancer;