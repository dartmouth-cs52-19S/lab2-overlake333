function changeColor(val, value) {
    var nodes = document.getElementById(val).childNodes;
    for(var i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'div') { 
            nodes[i].style.background = "rgb(255, 255, 255)";
            nodes[i].style.opacity = "0.5";
        }
    }
    document.getElementById(value).style.backgroundColor = "rgb(255, 107, 107)";
    document.getElementById(value).style.opacity = "1";
}

$("#finished-button").on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
        return $(radio).val();
      }).toArray();
  
  
      if (choices.length == 5) {
          var total = 0;
          for(var i in choices) {
              total += parseInt(choices[i]);
          }

          var result = "Tricycle";
          var img = "imgs/results/tricycle.jpeg";
  
          if (total == 6) {
              /*Tricycle*/
              result = "You are a... Tricycle. Try to break out of your shell and go an adventure! ";
          } else if (total < 15) {
              /*Kawasaki*/ 
              result = "You are a... Kawasaki. You are extremely competitive, resourceful, and focused when you set your mind to something. You are a warrior who grinds until they succeed.  ";
              img = "imgs/results/tricycles.jpeg";
          } else if (total < 25) {
              /*Ducati*/
              result = "You are a... Ducati. You drip style and radiate class. You enjoy the lavishes of life: the loud, the fast, the expensive. You live your life to the fullest!";
                img = "imgs/results/Ducati.jpg"
            } else if (total < 35) {
              /*Yamaha*/
              result = "You are a... Yamaha. You are someone who always has a solution for everything life throws your way. Down to earth and okay with getting a little dirty, you thrive in any environment!";
                img = "imgs/results/Yamaha.png"
            } else if (total < 45) {
              /*Triumph*/
              result = "You are a... Triumph. You are the empitomy of Cool. You understand the subtlety of style and your authenticity is why other's look towards you to lead. ";
                img = "imgs/results/Triumph.jpg"
            } else {
              /*Harley*/
              result = "You are a... Harley-Davidson! You are All-American, iconic, and thrive in packs of like-minded bikers with a need for adventure. You're the Boss, never to turn away from controntation. ";
              img = "imgs/results/Harley-Davidson.webp";
            }
          console.log(result);
          document.getElementById("resultImg").src = img;
          document.getElementById("myModalLabel").innerHTML = result;
      }
    modal.style.display = "block";  
  }); 

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("finished-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
