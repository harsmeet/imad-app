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

var button=document.getElementById('counter');
var counter=0;
button.onclick=function () {
    
    counter = counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

// Submitt Name !!!!!!!!!!
var nameInput=document.getElementById('name');
var name = nameInput.value;

var submit=document.getElementByid('submt_btn');
submit.onclick= function(){
    //make a req to the server and send the name
    //capture a list of names and render it as a list
    
    var names=['punjab','haryana','karnataka'];
    var list='';
    for(var i=0;i<names.length;i++){
        
    } 
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
};