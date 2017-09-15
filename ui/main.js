console.log('Loaded!');

// move the Doremon image

var img= document.getElementById('img');
function moveRight() {
marginLeft = marginLeft+2;
img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
    var interval = setinterval(moveright,40);
};