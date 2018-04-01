


//referinte spre divuri
var pozaCurenta=1;
var div1=document.getElementById("1");
var div2=document.getElementById("2");
var div3=document.getElementById("3");
var div4=document.getElementById("4");
div2.style.display="none";
div3.style.display="none";
div4.style.display="none";
var ceva;
//functie de sleep
function dormi(milisecunde){
	var start = new Date().getTime();
	for(;;){
		var sfarsit = new Date().getTime();
		if((sfarsit - start) > milisecunde)
			return true;
	}
	return false;
}
//functia care ruleaza caruselul 
function mergeSingur(){
	console.log("aici");
	urmatoarea();
	setTimeout(function(){
		mergeSingur();
	},2000);
	
}

mergeSingur();

//functia care vreifica care va fi urmatoarea poza afisata
function urmatoarea(){
	switch(pozaCurenta){
		case 1:
			console.log("totaici");
			
			afisare(2);
			
			pozaCurenta++;
			
			break;
		case 2:
			afisare(3);
			pozaCurenta++;
			
			break;
		case 3:
			
			afisare(4);
			pozaCurenta++;
			
			break;
			
			
		case 4:afisare(1);
			pozaCurenta=1;
			break;
	}
}

//fnctia care se ocupa cu afisarea pozei anterioare
function anterioara(){
	
	switch(pozaCurenta){
		case 1:
		
			afisare(4);
			pozaCurenta=4;
			break;
		case 2:
		
			afisare(1);
			pozaCurenta--;
			break;
		case 3:
		
			afisare(2);
			pozaCurenta--;
			break;
		case 4:
			afisare(3);
			pozaCurenta--;
	}
}


function animatie(){
	console.log("aici");
	div1.style.opacity="0.2";
	div2.style.opacity="0.2";
	div3.style.opacity="0.2";
}

function animatie2(){
	div1.style.opacity="1";
	div2.style.opacity="1";
	div3.style.opacity="1";
}
//afisarea divului specificat in parametru
function afisare(y){
	switch(y){
		case 1:
			div1.style.display="block";
			div2.style.display="none";
			div3.style.display="none";
			div4.style.display="none";
			break;
		case 2:
			
			div2.style.display="block";
			div1.style.display="none";
			div3.style.display="none";
			div4.style.display="none";
			break;
		case 3:
			div3.style.display="block";
			div2.style.display="none";
			div1.style.display="none";
			div4.style.display="none";
			break;
		case 4:
			div1.style.display="none";
			div2.style.display="none";
			div3.style.display="none";
			div4.style.display="block";
			break;
	}
}
