// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // if (!this.$batmanImg && !this.$gifImg) {
  this.$node = $('<span class="dancer item"></span>');
  this.step();
  // }
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

  Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    var styleSettings = {
      top: top,
      left: left,
      margin: "10px"
    };

    // if (this.$batmanImg) {
    //   this.$batmanImg.css(styleSettings);
    // } 
    //else if below
   // if (this.$node) {
    this.$node.css(styleSettings);
    // }
    // else if (this.$gifImg) {
    //   this.$gifImg.css(styleSettings);
    // }
    
  };

Dancer.prototype.lineUp = function(idx) {
  let top = (window.innerHeight / 2) - 100;
  let left = 204 * idx;
  if (left >= window.innerWidth - 50) {
    top += 200;
    left = 204 * (idx - 8);
  }
  this.setPosition(top,left);
}