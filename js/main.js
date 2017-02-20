var QH_ARRAY = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q');
var selectedQuestion;
var countDownDate = new Date("Feb 21, 2017 21:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = hours + ":"
    + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

function hide(x){
	document.getElementById('review1').style.display="none";
	document.getElementById('review2').style.display="block";
	return x.value;
}

function show(x){	
	document.getElementById('review2').style.display="none";
	document.getElementById('review1').style.display="block";
}

