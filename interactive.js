var container = document.getElementById("vimage");
var clearBtn = document.getElementById("og");

var change = function(e) {
	console.log("haha");
        console.log(this);
	this.setAttribute('fill', 'green');
	this.addEventListener("click", drawrand);
	e.stopPropagation();
};

var createCircle = function (x,y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "20");
    c.addEventListener("click", change);
    return c;
};

var drawCicle = function(e) {
	var f = createCircle(event.offsetX, event.offsetY);
	container.appendChild(f);
};

var drawrand = function(e) {
    console.log(this);
    var x = Math.random() * 500;
    var y = Math.random() * 500;
    var d = createCircle(x,y);
    container.appendChild(d);
    clearOne(e);
};

var clear = function() {
	var list = document.getElementsByTagName("circle");
	while (list.length != 0) {
		container.removeChild(list[0]);
	};
};

var clearOne = function(e) {
        console.log(e.target);
	container.removeChild(e.target);
};




container.addEventListener("click", drawCicle);
clearBtn.addEventListener("click", clear);
