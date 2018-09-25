var TinyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  debugger;
  this.$node = $('<span class="batman"><img src="Batman.png"></span>');
};

TinyDancer.prototype = Object.create(Dancer.prototype);

TinyDancer.prototype.constructor = TinyDancer;

