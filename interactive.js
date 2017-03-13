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

var createCircle = function (x,y,r) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "blue");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", r);
    c.setAttribute('vx', direction());
    c.setAttribute('vy', direction());
    c.addEventListener("click", change);
    return c;
};

var drawCicle = function(e) {
	var f = createCircle(event.offsetX, event.offsetY, 20);
	container.appendChild(f);
};

var draw = function(x,y,r) {
    var l = createCircle(x,y,r);
    container.appendChild(l);
    return l;
}

var drawrand = function(e) {
    console.log(this);
    var x = Math.random() * 500;
    var y = Math.random() * 750;
    var d = createCircle(x,y,20);
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

var clearb = function(ball) {
    container.removeChild(ball);
}

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

                    var r = parseInt(balls[i].getAttribute('r'));

                    if (x >= container.clientWidth || x <= 0) {
                        vx *= -1;
                    }

                    if (y >= container.clientHeight || y <= 0) {
                        vy *= -1;
                    }

                    if (x == 250) {
                        split(balls[i]);
                    }

                    if (r < 1) {
                        clearb(balls[i]);
                        continue;
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

var split = function(ball) {
     console.log(ball);
     var vx = parseInt(ball.getAttribute('vx'));
     var vy = parseInt(ball.getAttribute('vy'));            

     var x = parseInt(ball.getAttribute('cx'));
     var y = parseInt(ball.getAttribute('cy'));
     var r = parseInt(ball.getAttribute('r'));
     
     r /= 2;
     ball.setAttribute('r', r);
     
     var newc = draw(x,y,r);
     console.log(newc);
     
     newc.setAttribute('vx', -vx);
     newc.setAttribute('vy', -vy);
}

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
