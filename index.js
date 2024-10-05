var time = document.getElementsByTagName("h1")[0];
var doli=0, second=0, minute=0, hour=0;
var ol = document.getElementsByTagName("ol")[0];
// start time
function watch(){
	doli++;
	time.innerText="00:00:00:"+second;
	if(doli>99){
		second++;
		doli=0;
	if(second>59){
		minute++;
		second=0;
		if(minute>59){
			hour++;
			minute=0;
		}
	}
	}
	// ternary operator ? :
	var d = doli<10 ? "0" +doli : doli;
	var s = second<10 ? "0"+second : second;
	/*if(second<10){
		time.innerText = "0"+second;
	}else{
		time.innerText = "0"+second;
	}*/
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText = h+":"+m+":"+s+":"+d;
}
function start(){
	a = setInterval(watch, 1000);
	document.getElementsByTagName("button")[0].disabled=
	true;
	document.getElementsByTagName("button")[1].disabled=
	false;
	b = setInterval(watch, 15);
}
function stop(){
	clearTimeout(b);
	document.getElementsByTagName("button")[0].disabled=
	false;
	document.getElementsByTagName("button")[1].disabled=
	true;
}
function restart(){
	ol.innerText = "00:00:00:0";
	doli=0;
	second=0;
	minute=0;
	hour=0;
	time.innerText="00:00:00:0";
	clearInterval(a);
	document.getElementsByTagName("button")[0].disabled=
	false;
}
function lap(){
	// document.createElement("tagName"); -> shine tag uusgene
	var li = document.createElement("li");
	li.innerText=time.innerText;
	console.log(li);
	// tagName.append(tagName);
	ol.append(li);
}