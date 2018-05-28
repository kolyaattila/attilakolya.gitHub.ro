

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/*var butoaneAni = document.getElementById("butoaneAni").childNodes;
var timeline =document.getElementById("timeline").childNodes;
butoaneAni[0].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==0){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
		
	}
}





butoaneAni[1].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==1){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
	}
}

butoaneAni[2].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==2){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
	}
}
*/

window.onload=function(){
	if(window.innerWidth>=767)
	$("#rightTime1").css("right","-215px");
	//document.getElementById("rightTime1").style.right="-215px";
}

window.onscroll=function(){
	if(window.innerWidth>=967)
		animatieAn();
	if(window.innerWidth>=767 && window.innerWidth<967)
		animatieAn2();
	myFunction();
	
}


function animatieAn(){
	var winScroll=document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
	var scrolled = (winScroll/height)*100;
	console.log(winScroll);
		if(winScroll>=100)
			$("#leftTime1").css("left","-215px");
		
		if(winScroll>=300)
			$("#rightTime2").css("right","-215px");
		
		if(winScroll>=1100)
			$("#leftTime2").css("left","-215px");
		
		if(winScroll>=1700)
			$("#rightTime3").css("right","-215px");
		
		if(winScroll>=2200)
			$("#leftTime3").css("left","-215px");
		
		if(winScroll>=2600)
			$("#rightTime4").css("right","-215px");
		
		if(winScroll>=3200)
			$("#leftTime4").css("left","-215px");
		
		if(winScroll>=3900)
			$("#rightTime5").css("right","-215px");
		
		if(winScroll>=4300)
			$("#leftTime5").css("left","-215px");
		
		if(winScroll>=5300)
			$("#rightTime6").css("right","-215px");
		
		if(winScroll>=5800)
			$("#leftTime6").css("left","-215px");
		
		if(winScroll>=6200)
			$("#rightTime7").css("right","-215px");
		
		if(winScroll>=6600)
			$("#leftTime7").css("left","-215px");
		
		if(winScroll>=7200)
			$("#rightTime8").css("right","-215px");
		
		if(winScroll>=7600)
			$("#leftTime8").css("left","-215px");
		
		if(winScroll>=8000)
			$("#rightTime9").css("right","-215px");
		
		if(winScroll>=8300)
			$("#leftTime9").css("left","-215px");
		
		if(winScroll>=8800)
			$("#rightTime10").css("right","-215px");
		
		if(winScroll>=9200)
			$("#leftTime10").css("left","-215px");
		
		
		
		if(winScroll>=9800)
			$("#rightTime11").css("right","-215px");
		
		if(winScroll>=10500)
			$("#leftTime11").css("left","-215px");
		
		if(winScroll>=10700)
			$("#rightTime12").css("right","-215px");
		
		if(winScroll>=11200)
			$("#leftTime12").css("left","-215px");
		
		if(winScroll>=11800)
			$("#rightTime13").css("right","-215px");
		
		if(winScroll>=12500)
			$("#leftTime13").css("left","-215px");
		
		
	}
	
	
	
	
	function animatieAn2(){
	var winScroll=document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
	var scrolled = (winScroll/height)*100;
	console.log(winScroll);
		if(winScroll>=400)
			$("#leftTime1").css("left","-215px");
		
		if(winScroll>=800)
			$("#rightTime2").css("right","-215px");
		
		if(winScroll>=1900)
			$("#leftTime2").css("left","-215px");
		
		if(winScroll>=2800)
			$("#rightTime3").css("right","-215px");
		
		if(winScroll>=3700)
			$("#leftTime3").css("left","-215px");
		
		if(winScroll>=4300)
			$("#rightTime4").css("right","-215px");
		
		if(winScroll>=5100)
			$("#leftTime4").css("left","-215px");
		
		if(winScroll>=6300)
			$("#rightTime5").css("right","-215px");
		
		if(winScroll>=7000)
			$("#leftTime5").css("left","-215px");
		
		if(winScroll>=8400)
			$("#rightTime6").css("right","-215px");
		
		if(winScroll>=9300)
			$("#leftTime6").css("left","-215px");
		
		if(winScroll>=9800)
			$("#rightTime7").css("right","-215px");
		
		if(winScroll>=10400)
			$("#leftTime7").css("left","-215px");
		
		if(winScroll>=11400)
			$("#rightTime8").css("right","-215px");
		
		if(winScroll>=11900)
			$("#leftTime8").css("left","-215px");
		
		if(winScroll>=12600)
			$("#rightTime9").css("right","-215px");
		
		if(winScroll>=13000)
			$("#leftTime9").css("left","-215px");
		
		if(winScroll>=13700)
			$("#rightTime10").css("right","-215px");
		
		if(winScroll>=14300)
			$("#leftTime10").css("left","-215px");
		
		
		
		if(winScroll>=15200)
			$("#rightTime11").css("right","-215px");
		
		if(winScroll>=16200)
			$("#leftTime11").css("left","-215px");
		
		if(winScroll>=16600)
			$("#rightTime12").css("right","-215px");
		
		if(winScroll>=17300)
			$("#leftTime12").css("left","-215px");
		
		if(winScroll>=18300)
			$("#rightTime13").css("right","-215px");
		
		if(winScroll>=19300)
			$("#leftTime13").css("left","-215px");
		
		
	}
	
	


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}