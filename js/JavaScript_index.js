var navbar = document.getElementById("pozitieSticky");
var li = document.getElementById("li");
li.className="";
li.style.color="white";
window.onscroll=function(){
	//console.log(this.scrollY);
	
	//console.log(100*300/this.innerHeight);
	
	var ceva=39*this.innerHeight/100;
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

