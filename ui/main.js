console.log('Loaded!');

// move the Doremon image

var img= document.getElementById('doremon');
var marginLeft=0;
function moveRight() {
marginLeft = marginLeft+5;
img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
    var interval = setinterval(moveright,40);
};