// JavaScript Document
window.onload = function(){
	init();
}


var data = [];
function returnStr(){
	var input = document.getElementById("input").value.trim();
	input = input.replace(/(,|，|、|\s|\r\n)/g, " ");//将所有分隔符转化成空格；
	input = input.replace(/\s{2,}/g, " ");//将两个以上的空格转换成一个空格；
	var returnData = input.split(" ");
	return returnData;
}

function render(){
	var container = document.getElementById("container");
	var inner = "";
	for(var i in data){
		inner += '<span>'+data[i]+'</span>';
		
	}
	container.innerHTML = inner;
}


function leftIn(){
	var text = returnStr();
	data = text.concat(data);
	console.log(data);
	render();
}
function rightIn(){
	var text = returnStr();
	data = text.concat(data);
	render();
}
function leftOut(){
	var outer = data.shift();
	alert(outer);
	render();
}
function rightOut(){
	var outer = data.pop();
	alert(outer);
	render();
}

function delSpan(){
	var index = this.innerHTML;
	console.log(index);
}

function spanBtn(){
	window.onchange = function(){
		var span = document.getElementsByTagName("span");
		for(var i in span){
			span[i].onclick = delSpan;
		}
	}
}

function research(){
	var keyWord = document.getElementById("research").value.trim();
	var container = document.getElementById("container");
	var span = container.getElementsByTagName("span");
	for(var i in span){
		if(data[i].indexOf(keyWord)>=0){
			span[i].className = "true"
		}
	}
}
		

function init(){
	var leftInBtn = document.getElementById("leftIn");
	var rightInBtn = document.getElementById("rightIn");
	var leftOutBtn = document.getElementById("leftOut");
	var rightOutBtn = document.getElementById("rightOut");
	var researchBtn = document.getElementById("researchBtn");
	leftInBtn.onclick = leftIn;
	rightInBtn.onclick = rightIn;
	leftOutBtn.onclick = leftOut;
	rightOutBtn.onclick = rightOut;
	researchBtn.onclick = research;
}
	
	