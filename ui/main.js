// console.log('Loaded!');

// change the text of the main-text div
// var element=document.getElementByID=('main-text');
// element.innertHTML='Update';

// move the image

// var img = document.getElementById('madi');
// var marginLeft=0;
// function moveRight() {
// marginLeft = marginLeft+5;
// img.style.marginLeft=marginLeft+'px';
// }
// img.onclick = function () {
//     var interval = setinterval(moveright,40);
// };


// Counter Code

var button=document.getElementById("counter");
var counter=0;
button.onclick=function () {
    
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
};