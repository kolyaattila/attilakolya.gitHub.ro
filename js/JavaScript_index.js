var navbar = document.getElementById("pozitieSticky");
var li = document.getElementById("li");
li.className="";
li.style.color="white";
window.onscroll=function(){
	myFunction();
	var ceva=40*this.innerHeight/100;
	document.getElementById("paralax").style.top=-(this.scrollY-ceva)+"px";
	
	if(document.body.scrollTop >50 || document.documentElement.scrollTop >50 ){
	
	document.getElementById("pAnime").style.opacity="1";
	document.getElementById("pAnime").style.transitionDuration="3s";
	navbar.style.backgroundColor="#222";
	li.className="active";
	console.log("ceva");
	}
	else if(document.body.scrollTop <150 || document.documentElement.scrollTop <150 ){
		
		navbar.style.background="transparent";
		li.className="";
		document.getElementById("pAnime").style.opacity="0";
		document.getElementById("pAnime").style.transitionDuration="0s";
	}
	
}
window.onload=function(){

document.getElementById("body").style.opacity="1";
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



/*
$(window).scroll(function(){
	var scrol=$(this).scrollTop();
	$('#paralax').css('top',-(scrollTop)+'px');
});


/*
function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("pozitieSticky").className = "navbar";
    } else {
        document.getElementById("pozitieSticky").className = "navbar navbar-inverse";
    }
}
*/

