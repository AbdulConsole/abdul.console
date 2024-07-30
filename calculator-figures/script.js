window.onload= function (){

//    Colors
on = "green";
off = "#efefff";
dim = "transparent";

//    Lead lights lol
const lone = document.querySelector(".one");
const ltwo = document.querySelector(".two");
const lthree = document.querySelector(".three");
const lfour = document.querySelector(".four");
const lfive = document.querySelector(".five");
const lsix = document.querySelector(".six");
const lseven = document.querySelector(".seven");

//    Number buttons 0-9
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const clear = document.querySelector(".clear");


btn1.addEventListener("click", function () {
    lone.style.backgroundColor = dim;
    ltwo.style.backgroundColor = dim;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = dim;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = dim;
});

btn2.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = dim;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = on;
    lsix.style.backgroundColor = dim;
    lseven.style.backgroundColor = on;
});

btn3.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = dim;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

btn4.addEventListener("click", function () {
    lone.style.backgroundColor = dim;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = dim;
});

btn5.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = dim;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

btn6.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = dim;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = on;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

btn7.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = dim;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = dim;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = dim;
});

btn8.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = on;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

btn9.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = on;
    lfive.style.backgroundColor = dim;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

btn0.addEventListener("click", function () {
    lone.style.backgroundColor = on;
    ltwo.style.backgroundColor = on;
    lthree.style.backgroundColor = on;
    lfour.style.backgroundColor = dim;
    lfive.style.backgroundColor = on;
    lsix.style.backgroundColor = on;
    lseven.style.backgroundColor = on;
});

clear.addEventListener("click", function () {
    lone.style.backgroundColor = off;
    ltwo.style.backgroundColor = off;
    lthree.style.backgroundColor = off;
    lfour.style.backgroundColor = off;
    lfive.style.backgroundColor = off;
    lsix.style.backgroundColor = off;
    lseven.style.backgroundColor = off;
});





document.querySelector(".source").addEventListener("click", () => {
    window.location.href = 'https://www.instagram.com/reel/C98dHXSMwJx/?igsh=MWJrNXd5cnJmMmNiZQ==';
});


document.querySelector('.right').addEventListener(
  'click', () => {
        window.location.href = './../catalog.html';
  }
);



}