//referinte spre butoane
var arata=document.getElementById("ochi");
var schimaTip=document.getElementById("parola");
var rEmail=document.getElementById("ceva");
var lButon=document.getElementById("buton2");
var rDiv=document.getElementById("containerParola");
console.log(rEmail)	;

	//adaugarea evenimentuluide mousdown pt  afisare a parolei
	arata.addEventListener("mousedown",function(){
		console.log("merge");
		schimaTip.type="text";
		
	});
	
	
	//adaugarea evenimentului mouseup pt ascunderea parolei
	arata.addEventListener("mouseup",function(){
		console.log("merge");
		schimaTip.type="password";
		
	});
	
	//daugarea evenimentului blur pt a vreifica parola introdusa 
	schimaTip.addEventListener("blur",function(){
		if(schimaTip.value.length <8){
			schimaTip.style.backgroundColor="#FFA500";
			rDiv.style.backgroundColor="#FFA500";
			rDiv.style.border="0px";
		}
		else{
		schimaTip.style.backgroundColor="#FFFFFF";
		rDiv.style.backgroundColor="#FFFFFF";
		rDiv.style.border="0px";
		}
	})
	//adaugarea evenimentului blur pt a vreifica email-ul introdus
	rEmail.addEventListener("blur",function(){
		console.log(rEmail);
		if((rEmail.value.indexOf('@')<3) || (rEmail.value.indexOf('.')<8)){
		rEmail.style.backgroundColor="#FFA500";
		
	}
	else{
		
		rEmail.style.backgroundColor="#FFFFFF";
		
		}
	});
	//adaugarea evenimentului keydown pt a se verifica daca utilizatorul apasa tasata"enter"
	schimaTip.addEventListener("keydown",function(bla){
		console.log(bla);
		if(bla.key=="Enter"){
			if(rEmail.value=="exemplu@yahoo.com" && schimaTip.value == "12345678"){
			var ceva=document.createElement("p");
			var sir="Autentificare reusita!";
			ceva.innerHTML=sir.bold();
			ceva.style.color="#00FF00";
			ceva.style.fontSize="20px";
			ceva.style.position="absolute";
			ceva.style.top="90px";
			ceva.style.left="70px";
			ceva.fontFamily="Helvetica";
			
			
			var alceva =document.getElementById("container");
			alceva.appendChild(ceva);
			
			document.getElementById("dispare").style.display="none";
		}
		else{
			alert("Username sau parola au fost introduse gresit!");
		}
		}
			
	})
	//adaugarea evenimentului keydown pt a se verifica daca utilizatorul apasa tasata"enter"
	
	rEmail.addEventListener("keydown",function(bla){
		
		if(bla.key=="Enter"){
			if(rEmail.value=="exemplu@yahoo.com" && schimaTip.value == "12345678"){
			var ceva=document.createElement("p");
			var sir="Autentificare reusita!";
			ceva.innerHTML=sir.bold();
			ceva.style.color="#00FF00";
			ceva.style.fontSize="20px";
			ceva.style.position="absolute";
			ceva.style.top="90px";
			ceva.style.left="70px";
			ceva.fontFamily="Helvetica";
			
			
			var alceva =document.getElementById("container");
			alceva.appendChild(ceva);
			
			document.getElementById("dispare").style.display="none";
		}
		else{
			alert("Username sau parola au fost introduse gresit!");
		}
		}
			
	})
	
	

	
	lButon.addEventListener("click",function(){
		if(rEmail.value=="exemplu@yahoo.com" && schimaTip.value == "12345678"){
			var ceva=document.createElement("p");
			var sir="Autentificare reusita!";
			ceva.innerHTML=sir.bold();
			ceva.style.color="#00FF00";
			ceva.style.fontSize="20px";
			ceva.style.position="absolute";
			ceva.style.top="90px";
			ceva.style.left="70px";
			ceva.fontFamily="Helvetica";
			
			
			var alceva =document.getElementById("container");
			alceva.appendChild(ceva);
			
			document.getElementById("dispare").style.display="none";
		}
		else{
			alert("Username sau parola au fost introduse gresit!");
		}
		
		
		
	})
	//adaugarea evenimentelor mouseover si mouseout pentru butonul de afisarea a parolei
	arata.addEventListener("mouseover" , function(){
		arata.style.color="black";
	})
	
	arata.addEventListener("mouseout",function(){
		arata.style.color="gray";
	})
	
	/*schimaTip.addEventListener("focus",function(){
		console.log("cevaceavava");
		rDiv.style.border="1px solid blue";
		schimaTip.style.border="0px";
	});	
	*/
	