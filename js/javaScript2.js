
//functia care 
function dispare(temp1,temp2,temp3,Temp1,Temp2,Temp3){
	//obtinerea unor referinte spre anumite elemnte
	var aux1=document.getElementById(temp1);
	var aux2=document.getElementById(temp2);
	var aux3=document.getElementById(temp3);
	var Aux1=document.getElementById(Temp1);
	var Aux2=document.getElementById(Temp2);
	var Aux3=document.getElementById(Temp3);
	
	//stilizarea elemtelor
	Aux1.style.background="white";
	Aux2.style.background="#f2f2f2";
	Aux3.style.background="#f2f2f2";
	Aux1.style.color="orange";
	Aux2.style.color="black";
	Aux3.style.color="black";
	
	
	
	//afisarea unui container, si ascunderea altora
	aux1.style.display="block";
	aux2.style.display="none";
	aux3.style.display="none";
	
}
//apelarea functie prima data
dispare('sport','programare','film','Sport','Programare','Film');
	
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