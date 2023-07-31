// var audio = document.getElementById("myaudio");
// audio.volume = 0.1;

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

gif();

function gif() {
  var i;
  var x = document.getElementsByClassName("myGif");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(gif, 1000); // Change image every 2 seconds
}

function response(value){
  console.log(value)
  if(value ==1){
    document.getElementById("responseTxt").innerHTML = "😳😳"
  }
  if(value ==2){
    document.getElementById("responseTxt").innerHTML = "🤔😚🥰🥰"
  }
  if(value ==3){
    document.getElementById("responseTxt").innerHTML = "YEAAYYY!! I LOVE YOU TOO BABE 😘😘😘"
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function jawaban(value){
  console.log(value)
  if(value == 1){
    document.getElementById("jawaban").style.backgroundColor = "rgb(130, 130, 130)"
  }
}

// JavaScript untuk mengubah warna latar belakang tombol saat diklik berdasarkan baris
document.addEventListener('DOMContentLoaded', function() {
  const buttonsRow1 = document.querySelectorAll('.row1');
  const buttonsRow2 = document.querySelectorAll('.row2');
  const buttonsRow3 = document.querySelectorAll('.row3');
  const buttonsRow4 = document.querySelectorAll('.row4');
  const buttonsRow5 = document.querySelectorAll('.row5');

  function resetButtons(buttons) {
    buttons.forEach(button => {
      button.style.backgroundColor = 'white';
    });
  }

  buttonsRow1.forEach(button => {
    button.addEventListener('click', function() {
      resetButtons(buttonsRow1);
      this.style.backgroundColor = 'grey';
    });
  });

  buttonsRow2.forEach(button => {
    button.addEventListener('click', function() {
      resetButtons(buttonsRow2);
      this.style.backgroundColor = 'grey';
    });
  });

  buttonsRow3.forEach(button => {
    button.addEventListener('click', function() {
      resetButtons(buttonsRow3);
      this.style.backgroundColor = 'grey';
    });
  });

  buttonsRow4.forEach(button => {
    button.addEventListener('click', function() {
      resetButtons(buttonsRow4);
      this.style.backgroundColor = 'grey';
    });
  });

  buttonsRow5.forEach(button => {
    button.addEventListener('click', function() {
      resetButtons(buttonsRow5);
      this.style.backgroundColor = 'grey';
    });
  });
});

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;

function jawaban1(value){
  if(num1 == 0){
    if(value == 1){
      num1 ++
    }
  }
  if(value == 0){
    num1=0;
  }
  console.log("ini num 1" + " hasil " +num1)
}

function jawaban2(value){
  if(num2 == 0){
    if(value == 1){
      num2 ++
    }
  }
  if(value == 0){
    num2=0;
  }
  console.log("ini num 2" + " hasil " +num2)
  
}
function jawaban3(value){
  if(num3 == 0){
    if(value == 1){
      num3 ++
    }
  }
  if(value == 0){
    num3=0;
  }
  console.log("ini num 3" + " hasil " +num3)
  
}
function jawaban4(value){
  if(num4 == 0){
    if(value == 1){
      num4 ++
    }
  }
  if(value == 0){
    num4=0;
  }
  console.log("ini num 4" + " hasil " +num4)
  
}
function jawaban5(value){
  if(num5 == 0){
    if(value == 1){
      num5 ++
    }
  }
  if(value == 0){
    num5=0;
  }
  console.log("ini num 5" + " hasil " +num5)
  
}

let hasil = 0

function submit(){
  console.log("hasil num 1 "+ num1)
  console.log("hasil num 2 "+ num2)
  console.log("hasil num 3 "+ num3)
  console.log("hasil num 4 "+ num4)
  console.log("hasil num 5 "+ num5)
  hasil = num1+num2+num3+num4+num5;
  console.log("ini jumlah semua " + hasil)
  document.getElementById("skor").innerHTML=hasil+"/5";

  if(hasil==0){
    document.getElementById("react").innerHTML="😐😐";
  }
    if(hasil==1){
      document.getElementById("react").innerHTML="🤨🤨";
    }
    if(hasil==2){
      document.getElementById("react").innerHTML="🤔🤔🤔";
    }
    if(hasil==3){
      document.getElementById("react").innerHTML="🙂🙂🙂";
    }
    if(hasil==4){
      document.getElementById("react").innerHTML="❤😘❤";
    }
    if(hasil==5){
      document.getElementById("react").innerHTML="😘😘😘😘";
    }
}

const username = document.getElementById("input").value

function password(){
  const username = document.getElementById("input").value
 if(username == "cek toko sebelah 2"){
  console.log("bener")
  document.getElementById("lastBox").style.display="block";
  document.getElementById("input").value="";
 }else{
  console.log("salah")
  document.getElementById("input").value=""
 }
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("passwordBtn").click();
  }
});


var countDownDate = new Date("Aug 05, 2023 09:00:00").getTime();

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
  document.getElementById("demo").innerHTML =  days +"d " +hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
