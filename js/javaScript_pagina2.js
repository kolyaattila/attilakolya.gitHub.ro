
//document.getElementById("img2").style.height=""+(window.innerHeight-72)+"px";


var navbar = document.getElementById("pozitieSticky");
var li = document.getElementById("li");
li.className="";
li.style.color="white";
window.onscroll=function(){
	//console.log(this.scrollY);
	
	//console.log(100*300/this.innerHeight);
	myFunction();
	var ceva=40*this.innerHeight/100;
	document.getElementById("paralax").style.top=-(this.scrollY-ceva)+"px";
	
	if(document.body.scrollTop >50 || document.documentElement.scrollTop >50 ){
	
	
	navbar.style.backgroundColor="#222";
	li.className="active";
	console.log("ceva");
	}
	else{
		
		navbar.style.background="transparent";
		li.className="";
		
	}
	
}


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



var video = document.getElementById("containerVideo");
video.addEventListener("mouseover",function(){
	this.style.width="50%";
})
video.addEventListener("mouseout",function(){
	this.style.width="35%";
})
video.play();

window.onload=function(){
	video.play();
}


console.log(""+window.innerHeight+"px");