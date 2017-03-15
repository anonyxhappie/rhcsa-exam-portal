/**
* -Feb 15, 2017 15:30:00
* -Coded by anonyxhappie - Akshay Saini
* -as a project of CBitss
**/

var QH_ARRAY = new Array();
var QQ_ARRAY = new Array();

/**
* This module is for getting the questions and start date and time of exam.1
**/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200) {
		xmlParser(this);
	} 
};
xhttp.open("GET", "xml/exam.xml", true);
xhttp.send();
var dateString="";
function xmlParser(xml){
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.documentElement.childNodes;
	dateString = x[1].childNodes[0].nodeValue;	
	//document.write(dateString);
	for(var i = 0; i < 17; i++){
		var qhead = xmlDoc.getElementsByTagName("qhead")[i].childNodes[0].nodeValue;
		var question = xmlDoc.getElementsByTagName("question")[i].childNodes[0].nodeValue;		
		QH_ARRAY.push(qhead);	
		QQ_ARRAY.push(question);
		var ss = 'p'+(i+1);
		document.getElementById(ss).innerHTML = qhead;
		document.getElementById(ss).value = qhead;
	}
}
/**
* This module is for the Timer.
**/
var countDownDate = new Date("Mar 15, 2017 20:00:00").getTime();
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

/**
* This module is for style display of center div.
**/
function hide(x){
	document.getElementById('review1').style.display="none";
	document.getElementById('review2').style.display="block";
	document.getElementById('qh').innerHTML = x.value;
	document.getElementById('question').innerHTML = QQ_ARRAY[QH_ARRAY.indexOf(x.value)];
}
function show(x){	
	document.getElementById('review2').style.display="none";
	document.getElementById('review1').style.display="block";
}

/**
* This module will submit and reboot the system.
**/
function reboot(){
	
}




