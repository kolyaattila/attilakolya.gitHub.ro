var navbar = document.getElementById("pozitieSticky");

window.onscroll=function(){
	
	
	if(document.body.scrollTop >50 || document.documentElement.scrollTop >50 ){
	
	
	navbar.style.backgroundColor="#222";
	
	console.log("ceva");
	}
	else{
		
		navbar.style.background="transparent";
		console.log("cev22a");
		
		
	}
	
}



function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("pozitieSticky").className = "navbar";
    } else {
        document.getElementById("pozitieSticky").className = "navbar navbar-inverse";
    }
}