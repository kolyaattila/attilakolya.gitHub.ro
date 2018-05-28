
//document.getElementById("img2").style.height=""+(window.innerHeight-72)+"px";



window.onscroll=function(){
	
	
}


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


/*
var video = document.getElementById("containerVideo");
video.addEventListener("mouseover",function(){
	this.style.width="50%";
	document.getElementById("p1").style.width="40%";
	document.getElementById("p2").style.width="100%";
})
video.addEventListener("mouseout",function(){
	document.getElementById("p1").style.width="100%";
	document.getElementById("p2").style.width="65%";
	this.style.width="30%";
})

*/

	



