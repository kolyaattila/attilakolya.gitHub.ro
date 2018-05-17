var butoaneAni = document.getElementById("butoaneAni").childNodes;
var timeline =document.getElementById("timeline").childNodes;
butoaneAni[0].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==0){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
		
	}
}

butoaneAni[1].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==1){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
	}
}

butoaneAni[2].onclick=function(){
	for(var i=0;i<timeline.length;i++){
		if(i==2){
			timeline[i].className=" timeline";
	
		}	
		else{
			timeline[i].className="timeline dispare";
		}
	}
}