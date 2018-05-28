

//pozitia meniului
var navbar = document.getElementById("pozitieSticky");
var li = document.getElementById("li");
//console.log(window.innerWidth);
if(window.innerWidth>767){
	li.className="";
}
else{
	navbar.style.background="rgb(34, 34, 34)";
}
li.style.color="white";

//validare formular
var tab_erori=[false,false,false,false];
var referinta_email=document.getElementById("email");
var referinta_com=document.getElementById("comentariu");
var referinta_telefon=document.getElementById("telefon");
var referinta_nume=document.getElementById("nume");
var r_submit= document.getElementById("submit");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

r_submit.onclick=function(){
	if(verifica()){
		console.log("sa trimis");
	}
}
 
 //verifica erorile
 
 function verifica(){
	 for(var i=0;i<4;i++){
		 if(tab_erori[i]==false){
			switch(i){
				case 0:{
					console.log("a0");
					
				}
				case 1:{
					console.log("a1");
					
				}
				case 2:{
					console.log("a2");
					
				}
				case 3:{
					console.log("a3");
					
				}
			}
			return false;
		}
	 }
	 return true;
 }
 

//verificare nume
referinta_nume.addEventListener("blur",function(){
	if(referinta_nume.value.length <3 || areSimboluri(referinta_nume.value) || areCifre(referinta_nume.value)){
		//referinta_nume.style.backgroundColor="#FFA500";
		tab_erori[0]=false;
		span1.childNodes[1].style.border=" 1px solid #c30b0b";
		span1.childNodes[3].className="fas fa-times";
		
	}
	else{
		//referinta_nume.style.backgroundColor="#FFFFFF";
		tab_erori[0]=true;
		span1.childNodes[1].style.border=" 1px solid #ccc";
		span1.childNodes[3].className="fas fa-check";
	}
})

//verifica telefon
referinta_telefon.addEventListener("blur",function(){
	if(referinta_telefon.value.length!=10 || areLitere(referinta_telefon.value) || areSimboluri(referinta_telefon.value)){
		//referinta_telefon.style.backgroundColor="#FFA500";
		tab_erori[1]=false;
		span3.childNodes[1].style.border=" 1px solid #c30b0b";
		span3.childNodes[3].className="fas fa-times";
	}
	else{
		//referinta_telefon.style.backgroundColor="#FFFFFF";
		tab_erori[1]=true;
		span3.childNodes[1].style.border=" 1px solid #ccc";
		span3.childNodes[3].className="fas fa-check";
	}
})


//verifica email
referinta_email.addEventListener("blur",function(){
	if(referinta_email.value.indexOf("@")<3 || referinta_email.value.indexOf(".")<8){
		//referinta_email.style.backgroundColor="#FFA500";
		tab_erori[2]=false;
		span2.childNodes[1].style.border=" 1px solid #c30b0b";
		span2.childNodes[3].className="fas fa-times";
	}
	else{
		//referinta_email.style.backgroundColor="#FFFFFF";
		tab_erori[2]=true;
		span2.childNodes[1].style.border=" 1px solid #ccc";
		span2.childNodes[3].className="fas fa-check";
	}
		
})


//verifica comentariu
referinta_com.addEventListener("blur",function(){
	if(referinta_com.value.length<10 || referinta_com.value.length>200){
		referinta_com.style.backgroundColor="#FFA500";
		tab_erori[3]=false;
	}
	else{
		referinta_com.style.backgroundColor="#FFFFFF";
		tab_erori[3]=true;
	}
})





window.onscroll=function(){
	
	//progress bar
	myFunction();
	
	//paralax
	var ceva
	
	if(window.innerHeight>1000)
		ceva=30*this.innerHeight/100;
	else
		ceva=40*this.innerHeight/100;
	document.getElementById("paralax").style.top=-(this.scrollY-ceva)+"px";
	
	
	//animatie descriere
	if(document.body.scrollTop >50 || document.documentElement.scrollTop >50 ){
	
	document.getElementById("pAnime").style.opacity="1";
	document.getElementById("pAnime").style.transitionDuration="3s";
	navbar.style.backgroundColor="#222";
	if(window.innerWidth>678)
		li.className="active";
	console.log("ceva");
	}
	else if(document.body.scrollTop <150 || document.documentElement.scrollTop <150 ){
		if(window.innerWidth>767){
			navbar.style.background="transparent";
			li.className="";
		}
		document.getElementById("pAnime").style.opacity="0";
		document.getElementById("pAnime").style.transitionDuration="0s";
	}
	
}

var formular= document.getElementById("formular");

window.onresize=function(){
	//Redimensionarea frmularului
	console.log(this.innerWidth);
	if(this.innerWidth>767){
		formular.className="col-sm-8";
		console.log("maiMare");
	}
	else if(this.innerWidth<768 && this.innerWidth > 400){
		console.log("intre");
		formular.className="col-xs-8";
	}
	else{
		console.log("maiMic");
		formular.className="col-xs-12";
	}
	
}


window.onload=function(){
	//animatie body
	document.getElementById("body").style.opacity="1";
	
	//Redimensionarea frmularului
	console.log(this.innerWidth);
	if(this.innerWidth>767){
		formular.className="col-sm-8";
		console.log("maiMare");
	}
	else if(this.innerWidth<768 && this.innerWidth > 400){
		console.log("intre");
		formular.className="col-xs-8";
	}
	else{
		console.log("maiMic");
		formular.className="col-sxs-12";
	}
}


//progress bar
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


//verifica daca sir are litere
function areLitere(sir){
	var alfabet="qwertyuiopasdfghjklzxcvbnm";
	console.log(sir);
	console.log(alfabet.length);
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<alfabet.length;j++){
			//console.log(alfabet.charAt(j));
			if(sir.includes(alfabet.charAt(j))){
				
				return true;
			}
		}
	}
	return false;
}


//verifica daca sir are cifre
function areCifre(sir){
	var alfabet="1234567890";
	console.log(sir);
	console.log(alfabet.length);
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<alfabet.length;j++){
			//console.log(alfabet.charAt(j));
			if(sir.includes(alfabet.charAt(j))){
				
				return true;
			}
		}
	}
	return false;
}


//verifica daca sir are simboluri
function areSimboluri(sir){
	var simboluri="!@#$%^&*()_+=<>?|";
	
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<simboluri.length;j++){
			if(sir.includes(simboluri.charAt(j))){
				
				return true;
			}
		}
	}
	return false;
}



