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
    
    console.log(choices);
  
    var result = "CRASH: Please fill out all of the questions.";
    var img = "imgs/results/tricycle.jpeg";
  
    if(choices.length == 5) {
        var total = 0;
        for(var i in choices) {
            total += parseInt(choices[i]);
        }
  
        if (total == 6) {
            /*Tricycle*/
            result = "You are a... Tricycle. Try to break out of your shell and go an adventure! ";
        } else if (total < 15) {
            /*Kawasaki*/ 
            result = "You are a... <strong>Kawasaki</strong>. You are extremely competitive, resourceful, and focused when you set your mind to something. You are a warrior who grinds until they succeed.  ";
            img = "imgs/results/tricycles.jpeg";
        } else if (total < 25) {
            /*Ducati*/
            result = "You are a... <strong>Ducati</strong>. You drip style and radiate class. You enjoy the lavishes of life: the loud, the fast, the expensive. You live your life to the fullest!";
            img = "imgs/results/Ducati.jpg"
        } else if (total < 35) {
            /*Yamaha*/
            result = "You are a... <strong>Yamaha</strong>. You are someone who always has a solution for everything life throws your way. Down to earth and okay with getting a little dirty, you thrive in any environment!";
            img = "imgs/results/Yamaha.png"
        } else if (total < 45) {
            /*Triumph*/
            result = "You are a... <strong>Triumph</strong>. You are the empitomy of Cool. You understand the subtlety of style and your authenticity is why other's look towards you to lead. ";
            img = "imgs/results/Triumph.jpg"
        } else {
            /*Harley*/
            result = "You are a... <strong>Harley-Davidson</strong>. You are All-American, iconic, and thrive in packs of like-minded bikers with a need for adventure. You're the Boss, never to turn away from controntation. ";
            img = "imgs/results/Harley-Davidson.webp";
        }
        
    } 
    console.log(result);
    document.getElementById("resultImg").src = img;
    document.getElementById("myModalLabel").innerHTML = result;
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

$.getJSON("quiz_data.json", function(data) {
    outcomes = data.outcome
    for(var i = 0; i < data.questions.length; i++) {
        document.getElementById("Q" + (i + 1)).innerHTML = questionTemplate(data.questions[i], (i + 1));
    }
    
    // now you can do something with this data. 
    // remember you can only work with the data in this callback
    // data.title has the title
    // maybe you want to loop through data.questions? 
    //console.log(quiz_info);
  });
  function questionTemplate(data, i) { 
  return `
        <h3 class="question-title">${data.question_name}</h3>
        <div class="flex-container" id="flex${i}">
            <div class="option" id="op${i}1">
                <label>
                    <img class="img" src = "${data.answers[0].img_url}" />
                    <input type="radio" name="${data.radio_name}" value="${data.answers[0].outcome}" onClick="changeColor('flex${i}', 'op${i}1')"/>
                    <p>${data.answers[0].text}</p>
                </label>
            </div>
            <div class="option" id="op${i}2">
                <label>
                    <img class="img" src = "${data.answers[1].img_url}" />
                    <input type="radio" name="${data.radio_name}" value=${data.answers[1].outcome} onClick="changeColor('flex${i}', 'op${i}2')"/>
                    <p>${data.answers[1].text}</p>
                </label>
            </div>
            <div class="option" id="op${i}3">
                <label>
                    <img class="img" src = "${data.answers[2].img_url}" />
                    <input type="radio" name="${data.radio_name}" value=${data.answers[2].outcome} onClick="changeColor('flex${i}', 'op${i}3')"/>
                    <p>${data.answers[2].text}</p>
                </label>
            </div>
            <div class="option" id="op${i}4">
                <label>
                    <img class="img" src = "${data.answers[3].img_url}" />
                    <input type="radio" name="${data.radio_name}" value=${data.answers[3].outcome} onClick="changeColor('flex${i}', 'op${i}4')"/>
                    <p>${data.answers[3].text}</p>
                </label>
            </div>
            <div class="option" id="op${i}5">
                <label>
                    <img class="img" src ="${data.answers[4].img_url}"/>
                    <input type="radio" name="${data.radio_name}" value=${data.answers[4].outcome} onClick="changeColor('flex${i}', 'op${i}5')"/>
                    <p>${data.answers[4].text}</p>
                </label>
            </div>
            <div class="option" id="op${i}6">
                <label>
                    <img class="img" src = "${data.answers[5].img_url}" />
                    <input type="radio" name="${data.radio_name}" value=${data.answers[5].outcome} onClick="changeColor('flex${i}', 'op${i}6')"/>
                    <p>${data.answers[5].text}</p>
                </label>
            </div>`; }