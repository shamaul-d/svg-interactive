var s = document.getElementById('vector');

var clear = function(e) {
    while (s.lastChild) {
	s.removeChild(s.lastChild);
    };
};

var circle = function(e) {
    console.log('circle!');
    var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 20);
    c1.setAttribute("fill","#00FFFF");
    s.appendChild(c1);   

    c1.addEventListener('click', colchange);

    if (c1.getAttribute('fill') == '#9be564') {
	s.addEventListener('click', remaddrand, true);
    };
};

var colchange = function(e) {
    console.log('colors!');
    this.setAttribute('fill', '#9be564');
    e.stopPropagation();
};

var remaddrand = function(e) {
    console.log('target: ' + e.target);
    e.stopPropagation();
};

s.addEventListener("click", circle);
