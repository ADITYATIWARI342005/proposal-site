let currentQuestion = 0;

function nextQuestion() {
    hideAllGifs();
    if (currentQuestion === 0) {
        document.getElementById("question").innerHTML = "Are you alive?";
        document.getElementsByClassName("yes")[0].setAttribute("onclick", "showGifAndNext(1, true)");
        document.getElementsByClassName("no")[0].setAttribute("onclick", "showGifAndNext(0, false, 'I am not necrophilic')"); 
    } 
  else if (currentQuestion === 1) {
        document.getElementById("question").innerHTML = "Are you a girl?";
      document.getElementsByClassName("yes")[0].setAttribute("onclick", "showGifAndNext(2, true)");
        document.getElementsByClassName("no")[0].setAttribute("onclick", "showGifAndNext(1, false)");
        document.getElementById("gif1").style.display = 'block';
    }
  else if (currentQuestion === 2) {
        document.getElementById("question").innerHTML = "Would you like to be my girlfriend?";
      document.getElementsByClassName("yes")[0].setAttribute("onclick", "showGifAndNext(2, true)");
       const noButton = document.getElementsByClassName("no")[0];
        noButton.style.position = 'absolute';
        noButton.onmouseover = moveButton;
      noButton.touchstart = moveButton;
      noButton.onclick = moveButton;
      noButton.ontouchstart = moveButton;
        document.getElementById("gif2").style.display = 'block';
    }
  else if (currentQuestion === 3) {
        document.getElementById("question").innerHTML = "Thanks for being my girlfriend";
       document.getElementById("buttons").style.display = 'none';
      document.getElementById("gif3").style.display = 'block';
        
    }

    currentQuestion++;
}

function showGifAndNext(questionNum, isYes, endMessage = '') {
    hideAllGifs();
  if (isYes) {
        nextQuestion();
    } 
  else {
        if (questionNum === 1) {
           document.getElementById("question").innerHTML = '';
    document.getElementById("buttons").style.display = 'none';
            redirectTo("https://youtube.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-&feature=shared");
        } 
    else {
            document.getElementById(`gif${questionNum}`).style.display = 'block';
            if (endMessage) {
                end(endMessage);
            }
        }
    }
}
function moveButton() {
    const button = document.getElementsByClassName("no")[0];
    const width = window.innerWidth - button.offsetWidth;
    const height = window.innerHeight - button.offsetHeight;
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;

    button.style.transition = 'left 0.3s, top 0.3s'; 
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
function end(reason) {
    document.getElementById("question").innerHTML = "Sorry, " + reason;
    document.getElementById("buttons").style.display = 'none';
    document.body.style.backgroundColor = "black";  
    document.getElementById("question").style.color = "white";
}
function redirectTo(link) {
    window.location.href = link;
}
function hideAllGifs() {
    document.getElementById("gif0").style.display = 'none';
    document.getElementById("gif1").style.display = 'none';
    document.getElementById("gif2").style.display = 'none';
    document.getElementById("gif3").style.display = 'none';
}
nextQuestion();
