//reeferint sre butoae si imputuri
var referinta_prenume=document.getElementById("prenume");
var referinta_nume=document.getElementById("nume");
var referinta_adresa=document.getElementById("adresa");
var referinta_telefon=document.getElementById("telefon");
var referinta_data=document.getElementById("data");
var referinta_email=document.getElementById("email");
var referinta_culoare=document.getElementById("culoare");
var tablouErori=["Campul nume este incorect complectat","Campul prenume este incorect complectat","Adresa este incorect complectat","Data nasteri este incorect complectat","Numarul de telefon este incorect complectat","E-mail este incorect complectat"];
var tablouErori2=[false,false,false,false,false,false];
//validare nume
function verificare_nume(){

	//console.log(referinta_nume);
	if( referinta_nume.value.length<3 || areCifre(referinta_nume.value) || areSimboluri(referinta_nume.value) ){
		referinta_nume.style.backgroundColor="#FFA500";
		tablouErori2[0]=false;
		return false;
	}
	else{
		referinta_nume.style.backgroundColor="#FFFFFF";
		tablouErori2[0]=true;
		return true;
	}
}
//validare prenume
function verificare_prenume(){
	if(referinta_prenume.value.length <3 || areCifre(referinta_prenume.value) || areSimboluri(referinta_prenume.value)){
		referinta_prenume.style.backgroundColor="#FFA500";
		tablouErori2[1]=false;
		return false;
	}
	else{
		referinta_prenume.style.backgroundColor="#FFFFFF";
		tablouErori2[1]=true;
		return true;
	}
}
//validare adresa
function validare_adresa()
{
	if(areSimboluri(referinta_adresa.value) || !areCifre(referinta_adresa.value)|| CateLitereAre(referinta_adresa.value)<3){
		referinta_adresa.style.backgroundColor="#FFA500";
		tablouErori2[2]=false;
	}
	else{
		referinta_adresa.style.backgroundColor="#FFFFFF";
		tablouErori2[2]=true;
	}
}
//validare data nastere
function validare_data_nastere(){
	console.log(referinta_data.value.length);
	if(!validare_data()){
		referinta_data.style.backgroundColor="#FFA500";
		tablouErori2[3]=false;
	}
	else{
		referinta_data.style.backgroundColor="#FFFFFF";
		tablouErori2[3]=true;
	}
}

function validare_data(){
	if(referinta_data.value.length==10){
		console.log("aici");
		for(i=0;i<referinta_data.value.length;i++){
			if(i<2 ||(i>2 && i<5 ) || (i>5 && i<10)){
				
				if(!areCifre(referinta_data.value.charAt(i))){
					console.log("aici1");
					return false;
					
				}
			}
			if(i==2 || i== 5){
				console.log(referinta_data.value.charAt(i));
				if(!(referinta_data.value.charAt(i)=='/')){
				console.log("aici2");
				return false;
				}
			}
			
		}
		return true;
	}
	else{
		return false;
	}
}
//validare numar de telefon
function validare_numar_telefon(){
	//console.log(referinta_telefon.value.length);
	if(!validare_telefon()){
		referinta_telefon.style.backgroundColor="#FFA500";
		tablouErori2[4]=false;
	}
	else{
		referinta_telefon.style.backgroundColor="#FFFFFF";
		tablouErori2[4]=true;
	}
}


function validare_telefon(){
	if(referinta_telefon.value.length==13){
		console.log(referinta_telefon.value.charAt(8)+"cev");
		for(i=0;i<referinta_telefon.value.length;i++){
			if((i<5 && i>0) ||(i>5 && i<9 ) || (i>9 && i<13)){
				
				if(!areCifre(referinta_telefon.value.charAt(i))){
					console.log("aici1");
					return false;
					
				}
			}
			if(i==5 || i== 9){
				console.log(referinta_telefon.value.charAt(i));
				if(!(referinta_telefon.value.charAt(i)=='-')){
				console.log("aici2");
				return false;
				}
			}
			if(i==0){
				if(!(referinta_telefon.value.charAt(i)=='+')){
				return false;
				}
			}
			
		}
		return true;
	}
	else{
		return false;
	}
	
}

//functie de verificare daca srul trimis ca parametru are cifre
function areCifre(sir){
	var cifre="1234567890";
	
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<cifre.length;j++){
			if(sir.includes(cifre.charAt(j))){
				return true;
			}
		}
	}
	return false;
}
//functia de resetare
function resetare(){
	
	referinta_nume.value="";
	referinta_prenume.value="";
	referinta_adresa.value="";
	referinta_adresa.style.backgroundColor="#FFFFFF";
	referinta_nume.style.backgroundColor="#FFFFFF";
	referinta_prenume.style.backgroundColor="#FFFFFF";
	referinta_data.value="";
	referinta_data.style.backgroundColor="#FFFFFF";
	referinta_telefon.value="";
	referinta_telefon.style.backgroundColor="#FFFFFF";
	referinta_email.value="";
	referinta_email.style.backgroundColor="#FFFFFF";
	return true;
}

//functia care verifica daca sirul trimis ca parametru are simbolurile specificate
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
//functia care vreifica cate litere are sirul trimis ca parametru
function CateLitereAre(sir){
	var numar=0;
	var alfabet="qwertyuiopasdfghjklzxcvbnm";
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<alfabet.length;j++){
			if(sir.includes(alfabet.charAt(j))){
				
				numar++;
			}
		}
	}
	return numar;
}
//validare email
function validare_email(){
	console.log(referinta_email.value.indexOf('.'));
	if((referinta_email.value.indexOf('@')<3) || (referinta_email.value.indexOf('.')<8)){
		referinta_email.style.backgroundColor="#FFA500";
		tablouErori2[5]=false;
		
	}
	else{
		console.log("nu intra aici");
		referinta_email.style.backgroundColor="#FFFFFF";
		tablouErori2[5]=true;
		}
}
//functia care verifica daca sirul trimis ca parametru are litere
function areLitere(sir){
	var alfabet="qwertyuiopasdfghjklzxcvbnm";
	
	for(var i=0;i<sir.length;i++){
		for(var j=0;j<alfabet.length;j++){
			if(sir.includes(alfabet.charAt(j))){
				
				return true;
			}
		}
	}
	return false;
}
//functia care verifica cate erori are formularul
function cateErori(){
	for(i=0;i<tablouErori.length;i++){
		if(!tablouErori2[i])
			return true;
	}
	return false;
}
//functia care alertaza utilizatorul cu privinta la erorile de la formular
function bagaAlert(){
	var sir="";
	for(i=0;i<tablouErori.length;i++){
		if(!tablouErori2[i]){
			sir=sir+tablouErori[i]+"\n";
		}
	}
	alert(sir);
}
//functia care se ocupa cu disparitea formularului si aparitia mesajului de logare cu succes
function stergeForm(){
	var container=document.getElementById("container");
	document.getElementById("formular").style.display="none";
	container.innerHTML="<p><b>Nume:</b> "+   referinta_nume.value +   " <br><b>Prenume</b>: "+referinta_prenume.value+" <br><b>Adresa:</b> "+referinta_adresa.value+" <br><b>Telefon: </b>"+referinta_telefon.value+" <br><b>E-mail: </b>"+referinta_email.value+"<br><b>Data nasteri:</b> "+referinta_data.value+"<br><b>Culoare Preferata:</b> </p>";
	var div=document.createElement("div");
	div.style.backgroundColor=""+referinta_culoare.value;
	div.style.border="1px solid black";
	div.style.height="30px";
	div.style.width="60px";
	div.style.float="left";
	container.appendChild(div);
	
}

//functia de verificare a erorilor formularului
function verificareErori(){
	if(cateErori()){
		bagaAlert();
	}
	else{
		stergeForm();
	}
}

