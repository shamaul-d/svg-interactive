var container = document.getElementById("vimage");
var clearBtn = document.getElementById("og");
var anime = document.getElementById('move');
var stop = document.getElementById('stop');
var rid;

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
    c.setAttribute('vx', direction());
    c.setAttribute('vy', direction());
    c.addEventListener("click", change);
    return c;
};

var drawCicle = function(e) {
	var f = createCircle(event.offsetX, event.offsetY);
	container.appendChild(f);
};

var draw = function(x,y) {
    var l = createCircle(x,y);
    container.appendChild(l);
}

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

var move = function(e) {
	window.cancelAnimationFrame(rid);

        var balls = document.getElementsByTagName("circle");

        console.log(balls);

	var bounce = function() {
		console.log(rid);

                for (var i = 0; i < balls.length; i++) {

                    var vx = parseInt(balls[i].getAttribute('vx'));
                    var vy = parseInt(balls[i].getAttribute('vy'));            

                    var x = parseInt(balls[i].getAttribute('cx')) + vx;
                    var y = parseInt(balls[i].getAttribute('cy')) + vy;

                    if (x >= container.clientWidth || x <= 0) {
                        vx *= -1;
                    }

                    if (y >= container.clientHeight || y <= 0) {
                        vy *= -1;
                    }
                    
                    balls[i].setAttribute('cx',x);
                    balls[i].setAttribute('cy',y);
                    balls[i].setAttribute('vx',vx);
                    balls[i].setAttribute('vy',vy);
                };
                rid = window.requestAnimationFrame(bounce);
	};
        bounce();
};

var stopIt = function() {
    console.log(rid);
    window.cancelAnimationFrame(rid);
};

var direction = function() {
    var h = Math.random();
    if (h > 0.5) {
        return 1;
    }
    return -1;
}

container.addEventListener("click", drawCicle);
anime.addEventListener('click', move);
clearBtn.addEventListener("click", clear);
stop.addEventListener('click', stopIt);
