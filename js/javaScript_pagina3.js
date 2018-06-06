var ready=false;
var timer;

var ceva1=false;
var cevaVerificare=true;

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
console.log(height);



window.onscroll=function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	console.log(winScroll);
	console.log(document.body.innerHeight);
	if(window.innerWidth>767 ){
		animatie();
		if(winScroll>=0 && winScroll<300)
			$("#img2").css("top",""+winScroll+"px");
		if( winScroll>1){
			$("#cotinut").css("top","0px");
				ceva();
		}
		else if( winScroll<1){
				$("#cotinut").css("top","100vh");
				ceva1=false;
		}
	}
}



function ceva(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(winScroll>=100  && winScroll<=1550 )
			$("#img3").css("top",winScroll-100+"px");
	ceva1=true;
}

window.onload=function(){
	$("#img2").css("0px");
	
}


var temp1,temp2=0;

function animatie(){
	temp1=temp2;
	temp2=document.body.scrollTop || document.documentElement.scrollTop;
	
	if(temp2>=100 && temp1<temp2){
		//console.log("merge");
		$("#continut2").css("top","200px");
		$("#continut2").css("left","5%");
		$("#continut2").css("opacity","1");
	}
	else if(temp2<100 && temp2<temp1){
		$("#continut2").css("top","310px");
		$("#continut2").css("left","15%");
		$("#continut2").css("opacity","0");
	}
	
	if(temp2>=150 && temp1<temp2){
		//console.log("merge");
		$("#continut1").css("top","307px");
		$("#continut1").css("left","5%");
		$("#continut1").css("opacity","1");
	}
	else if(temp2<150 && temp2<temp1){
		$("#continut1").css("top","500px");
		$("#continut1").css("left","0%");
		$("#continut1").css("opacity","0");
	}
	
	
	if(temp2>=550 && temp1<temp2){
		//console.log("merge");
		$("#continut3").css("top","200px");
		$("#continut3").css("left","5%");
		$("#continut3").css("opacity","1");
	}
	else if(temp2<550  && temp1>temp2){
		$("#continut3").css("top","300px");
		$("#continut3").css("left","10%");
		$("#continut3").css("opacity","0");
	}
	
	if(temp2>=950 && temp1<temp2){
		//console.log("merge");
		$("#continut4").css("top","-64px");
		$("#continut4").css("left","5%");
		$("#continut4").css("opacity","1");
	}
	else if(temp2<950 && temp1>temp2){
		$("#continut4").css("top","136px");
		$("#continut4").css("left","10%");
		$("#continut4").css("opacity","0");
	}
	
	
	if(temp2>=1250 && temp1<temp2){
		//console.log("merge");
		$("#continut5").css("top","200px");
		$("#continut5").css("left","8%");
		$("#continut5").css("opacity","1");
	}
	else if(temp2<1250 && temp1>temp2){
		$("#continut5").css("top","300px");
		$("#continut5").css("left","13%");
		$("#continut5").css("opacity","0");
	}
	
	if(temp2>=1650 && temp1<temp2){
		//console.log("merge");
		$("#continut6").css("top","-75px");
		$("#continut6").css("left","5%");
		$("#continut6").css("opacity","1");
	}
	else if(temp2<1650 && temp1>temp2){
		$("#continut6").css("top","125px");
		$("#continut6").css("left","0%");
		$("#continut6").css("opacity","0");
	}
	
	if(temp2>=2000 && temp1<temp2){
		//console.log("merge");
		$("#continut7").css("top","200px");
		$("#continut7").css("left","8%");
		$("#continut7").css("opacity","1");
	}
	else if(temp2<2000 && temp1>temp2){
		$("#continut7").css("top","300px");
		$("#continut7").css("left","13%");
		$("#continut7").css("opacity","0");
	}
	
	
	
	if(temp2>=2300 && temp1<temp2){
		//console.log("merge");
		$("#continut8").css("top","36px");
		$("#continut8").css("left","-36%");
		$("#continut8").css("opacity","1");
	}
	else if(temp2<2300 && temp1>temp2){
		$("#continut8").css("top","236px");
		$("#continut8").css("left","-41%");
		$("#continut8").css("opacity","0");
	}
	
}


/*$("#continut4").mouseover(function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(cevaVerificare && winScroll>768)
		$("#1S").css("right","150px");
	
	
});

$("#continut4").mouseout(function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(cevaVerificare && winScroll>768)
			$("#1S").css("right","500px");
});*/

$("#1S").click(function(){
	
	$("#1S").css("right","-50px");
	setTimeout(function(){
		window.open("../pagini/pagina4.html","_parent");
	},1000);
});

/*
$("#continut5").on('mouseover',function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(cevaVerificare && winScroll>768)
		$("#2S").css("right","150px");
	
	
});

$("#continut5").mouseout(function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(cevaVerificare && winScroll>768)
			$("#2S").css("right","500px");
});
*/
$("#2S").click(function(){
	$("#2S").css("right","-50px");
	setTimeout(function(){
		window.open("../pagini/pagina5.html","_parent");
	},1000);
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}