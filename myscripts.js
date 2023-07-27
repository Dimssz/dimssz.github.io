document.addEventListener('DOMContentLoaded', function() {
    var texts = [
      "My Beloved Girlfriends"
    ];
    
    var index = 0;
    var textElement = document.getElementById("changingText");
    
    setInterval(function() {
      textElement.classList.remove("active");
      
      setTimeout(function() {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
        textElement.classList.add("active");
      }, 1000);
    }, 300);
  });

  let password = "";

function appendToPassword(num) {
    if (password.length < 6) {
        password += num;
        document.getElementById("password-input").value = "*".repeat(password.length);
      }
}

function clearPassword() {
  password = "";
  document.getElementById("password-input").value = "";
}
let error=0;
function submitPassword() {
    if (password === "070605") { 
        window.location.href = "page/home.html";
        clearPassword();
      } else {
        document.getElementById("salah").innerHTML = "salah";
        document.getElementById("salah").style.opacity=1;
        error +++
        console.log(error)
        clearPassword();
      }

      if(error == 2){
        document.getElementById("salah").innerHTML = "salah lagi";
      }
      if(error == 3){
        document.getElementById("salah").innerHTML = "masih salah";
      }
      if(error == 4){
        document.getElementById("salah").innerHTML = "clue bulan juni";
      }
      if(error >= 5){
        document.getElementById("salah").innerHTML = "tanggal lahir";
      }

}
 

var countDownDate = new Date("Jul 27, 2023 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);