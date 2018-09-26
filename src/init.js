$(document).ready(function() {
  window.dancers = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    ); 
    
    $('.grid').append(dancer.$node);
    window.dancers.push(dancer); 
  });
  
  
  $('.batSignal').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var batman = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    batman.$batmanImg.html("<img src='Batman.png'>").fadeIn(2000).appendTo(".grid");
    window.dancers.push(batman);
  });
  
  
  $('.master').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var gifDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    gifDancer.$gifImg.html("<img src='https://media.giphy.com/media/nMSGo0Ulx4s9i/giphy.gif'>").appendTo(".grid");
    window.dancers.push(gifDancer);
  });
  
  $('.lineup').on('click', function(event) {
    window.dancers.forEach(function($collection, idx, dancers) {
      $collection.lineUp(idx);
    });
  });
  
  $(document).on("mouseover", ".item", function(event) {
    let $img = $(this.childNodes[0]);
    $img.animate({
      height:'100px',
      width:'auto'
    }, 1000)
  });
  $(document).on("mouseout", ".item", function(event) {
    let $img = $(this.childNodes[0]);
    $img.animate({
      height:'200px',
      width:'auto'
    }, 500)
  });
  
  $(document).on("click", ".item", function(event) {
    let posX = event.pageX;
    let posY = event.pageY;
    window.dancers.forEach(function(instance) {
      let xRange = Math.abs(posX - instance.left);
      let yRange = Math.abs(posY - instance.top);
      let distance = Math.sqrt(Math.abs((xRange**2) - (yRange**2)));
      if (distance < 400) {
        if (instance.$batmanImg) {debugger;
          let img = instance.$batmanImg[0].childNodes[0];
          let $img = $(img);
          $img.css("height", "400px");
        } 
        else if (instance.$node) {
          let img = instance.$batmanImg[0].childNodes[0];
          let $img = $(img);
          let $img = $(instance.$node.childNodes[0]);
          $img.css("height", "400px");
        }
        else if (instance.$gifImg) {
          let $img = $(instance.$gifImg.childNodes[0])
          $img.css("height", "400px");
        }
      }
    })
  });
});

