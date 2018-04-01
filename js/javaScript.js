//obtinerea unor referinte
var lungimeNume;
var lungimePrenume;
var referinta_email=document.getElementById("email");
var referinta_com=document.getElementById("comentari");
var referinta_oras=document.getElementById("oras");
var referinta_adresa=document.getElementById("adresa");
var referinta_telefon=document.getElementById("tel");
var referinta_codPostal=document.getElementById("codPostal");
var referinta_nume=document.getElementById("nume");
var referinta_prenume=document.getElementById("prenume");
//functia de validrea a formularului
function validare(){
	
	
	var complet=0;
	//document.getElementById("nume").style.backgroundColor="red";
	
	lungimeNume=document.getElementById("nume").value.length;
	lungimePrenume=document.getElementById("prenume").value.lenght;
	//verificare nume
	if(document.getElementById("nume").value=="" || lungimeNume<3 || areCifre(document.getElementById("nume").value)){
		document.getElementById("nume").style.background="#ff9999";
		document.getElementById("eroare1").style.color="red";
		document.getElementById("nume").value="";
	}
	else{
		//document.getElementById("nume").value="";
		document.getElementById("nume").style.background="white";
		document.getElementById("eroare1").style.color="black";
		complet++;
	}
	//verificare prenume
	if(document.getElementById("prenume").value=="" || lungimePrenume < 3 || areCifre(document.getElementById("prenume").value)){
		document.getElementById("prenume").value="";
		document.getElementById("prenume").style.background="#ff9999";
		document.getElementById("eroare2").style.color="red";
	}
	else{
		document.getElementById("eroare2").style.color="black";
		document.getElementById("prenume").style.background="white";
		//document.getElementById("prenume").value="";
		complet++;
	}
	//verificar email
	if(referinta_email.value.indexOf("@") == -1){
		referinta_email.value="";
		referinta_email.style.background="#ff9999";
		document.getElementById("eroare3").style.color="red";
	}
	else{
		//referinta_email.value="";
		referinta_email.style.background="white";
		document.getElementById("eroare3").style.color="black";
		complet++;
	}
	//verificare comentariu
	if(referinta_com.value=="" || referinta_com.value.lenght < 10 ){
		referinta_com.value="";
		referinta_com.style.background="#ff9999";
		document.getElementById("eroare13").style.color="red";
	}
	else{
		//referinta_com.value="";
		referinta_com.style.background="white";
		document.getElementById("eroare13").style.color="black";
		complet++;
	}
	//verificare oras
	if(referinta_oras.value=="" || referinta_oras.lenght < 4 || areCifre(referinta_oras.value)){
		referinta_oras.value="";
		referinta_oras.style.background="#ff9999";
		document.getElementById("eroare6").style.color="red";
	}
	else{
		//referinta_oras.value="";
		referinta_oras.style.background="white";
		document.getElementById("eroare6").style.color="black";
		complet++;
	}
	//verificare adresa
	if(referinta_adresa.value=="" || referinta_adresa.lenght < 4){
		referinta_adresa.value="";
		referinta_adresa.style.background="#ff9999";
		document.getElementById("eroare7").style.color="red";
	}
	else{
		//referinta_adresa.value="";
		referinta_adresa.style.background="white";
		document.getElementById("eroare7").style.color="black";
		complet++;
	}
	//console.log(referinta_telefon.value);
	//verificare nuar de telefon
	if(areLitere(referinta_telefon.value) || referinta_telefon.value.length<10){
		referinta_telefon.value="";
		referinta_telefon.style.background="#ff9999";
		document.getElementById("eroare4").style.color="red";
	}
	else{
		//referinta_telefon.value="";
		referinta_telefon.style.background="white";
		document.getElementById("eroare4").style.color="black";
		complet++;
	}
	//verificare cod postal
	if(areLitere(referinta_codPostal.value) || referinta_codPostal.value.length <6 || referinta_codPostal.value.length > 6 ){
		referinta_codPostal.value="";
		referinta_codPostal.style.background="#ff9999";
		document.getElementById("eroare8").style.color="red";
	}
	else{
		//referinta_codPostal.value="";
		referinta_codPostal.style.background="white";
		document.getElementById("eroare8").style.color="black";
		complet++;
	}
	//verifica daca toate campurile sunt corecte pentru a le putea elibera
	if(complet==8){
		document.getElementById("nume").value="";
		document.getElementById("prenume").value="";
		referinta_adresa.value="";
		referinta_codPostal.value="";
		referinta_com.value="";
		referinta_email.value="";
		referinta_oras.value="";
		referinta_telefon.value="";
	}
	
	
	
}

//functia care verifica daca un sir de caracter contine litere
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


referinta_nume.addEventListener("blur",function(){
	if(referinta_nume.value.length <3 || areSimboluri(referinta_nume.value) || areCifre(referinta_nume.value)){
		referinta_nume.style.backgroundColor="#FFA500";
	}
	else{
		referinta_nume.style.backgroundColor="#FFFFFF";
	}
})

referinta_telefon.addEventListener("blur",function(){
	if(referinta_telefon.value.length!=10 || areLitere(referinta_telefon.value) || areSimboluri(referinta_telefon.value)){
		referinta_telefon.style.backgroundColor="#FFA500";
	}
	else{
		referinta_telefon.style.backgroundColor="#FFFFFF";
	}
})

referinta_prenume.addEventListener("blur",function(){
	if(referinta_prenume.value.length <3 || areCifre(referinta_prenume.value) || areSimboluri( referinta_prenume.value)){
		referinta_prenume.style.backgroundColor="#FFA500";
	}
	else{
		referinta_prenume.style.backgroundColor="#FFFFFF";
	}
})

referinta_email.addEventListener("blur",function(){
	if(referinta_email.value.indexOf("@")<3 || referinta_email.value.indexOf(".")<8){
		referinta_email.style.backgroundColor="#FFA500";
	}
	else{
		referinta_email.style.backgroundColor="#FFFFFF";
	}
		
})

referinta_oras.addEventListener("blur",function(){
	if(referinta_oras.value.length<3 || areSimboluri(referinta_oras.value) || areCifre(referinta_oras.value)){
		referinta_oras.style.backgroundColor="#FFA500";
	}
	else{
		referinta_oras.style.backgroundColor="#FFFFFF";
	}
})


referinta_com.addEventListener("blur",function(){
	if(referinta_com.value.length<10 || referinta_com.value.length>200){
		referinta_com.style.backgroundColor="#FFA500";
	}
	else{
		referinta_com.style.backgroundColor="#FFFFFF";
	}
})


referinta_adresa.addEventListener("blur",function(){
	if(referinta_adresa.value.lenght<5 || !(areCifre(referinta_adresa.value))   ||    areSimboluri(referinta_adresa.value)){
		referinta_adresa.style.backgroundColor="#FFA500";
	}
	else{
		referinta_adresa.style.backgroundColor="#FFFFFF";
	}
})


referinta_codPostal.addEventListener("blur",function(){

	if(referinta_codPostal.value.length!=6 || areLitere(referinta_codPostal.value) || areSimboluri(referinta_codPostal.value)){
		referinta_codPostal.style.backgroundColor="#FFA500";
	}
	else{
		referinta_codPostal.style.backgroundColor="#FFFFFF";
	}
})


//Autentificare

//Autentificare
var logo=document.getElementById("logoAutentificare");
var apare=document.getElementById("apare");
var login=document.getElementById("autentidicare");
var arataParola = document.getElementById("ochi");
var parola=document.getElementById("parola");
login.style.display="none";
var verifica=[false,false];

logo.addEventListener("click",function(){
	if(  (   (verifica[0]==false) && (verifica[1]==false)  )     ){
		
		//logo.style.backgroundColor="blue";
		apare.style.animationName="afisare";
		apare.style.animationDuration="1s";
		apare.style.animationFillMode="forwards";
		//verifica[0]=true;
	
	}
	else if((   (verifica[0]==true) && (verifica[1]==false)  )){
		//logo.style.backgroundColor="blue";
		apare.style.animationName="afisareInvers";
		apare.style.animationDuration="1s";
		apare.style.animationFillMode="forwards";
		//verifica[0]=false;
		
	}
})


logo.addEventListener("mouseover",function(){
	logo.style.color="orange";
});

logo.addEventListener("mouseout",function(){
	logo.style.color="white";
});



apare.addEventListener("animationend",function(){
	
	if(verifica[0]==false && verifica[1]==true){
		
			console.log("acuma trebuie sa pun loginul");
			//afisare(false);
			verifica[0]=true;
			verifica[1]=false;	
			console.log("Incepe cu 01 pune 10  "+verifica[0]+"--"+verifica[1]);			
			//sfarsesc in stanga ii dau starea 10
		
	}
	else if(verifica[0]==true && verifica[1]==true){
		verifica[0]=false;			//sfarsesc la dreapta si iii dau starea 00
		verifica[1]=false;
		afisare(true);
		console.log("Incepe cu 11 pune 00  "+verifica[0]+"--"+verifica[1]);
	}
		
})

apare.addEventListener("animationstart",function(){
	if(verifica[0]==false && verifica[1]==false){
			verifica[1]=true;				//incep din dreapta si ii dau starea 01
			verifica[0]=false;
			afisare(false);
			console.log("Incepe cu 00 pune 01  "+verifica[0]+"--"+verifica[1]);
	}
	else if(verifica[0]==true && verifica[1] == false){
		console.log("acuma trebuie sa dispaara loginul");
			//afisare(true);
			verifica[0]=true;				
			verifica[1]=true;
			console.log("Incepe cu 10 pune 11  "+verifica[0]+"--"+verifica[1]);
			//incep de la stanga si ii dau starea 11
	}
		
})

console.log(arataParola);
arataParola.addEventListener("mousedown",function(){
	parola.type="text";
	console.log("aici");
});

arataParola.addEventListener("mouseup",function(){
	parola.type="password";
	
});

arataParola.addEventListener("mouseover",function(){
	arataParola.style.color="black";
});

arataParola.addEventListener("mouseout",function(){
	arataParola.style.color="gray";
});


function afisare(temp)
{
	if(temp){
		login.style.display="none";
	}
	else{
		login.style.display="block";
	}
}


