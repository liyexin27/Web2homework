window.onload=function(){
	var mouse = document.getElementById("mouse");
    document.onmousemove = function(evt){
    	var oEvent = evt || window.event;
  		var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
    	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    	mouse.style.left = oEvent.clientX + scrollleft + 10 +"px";
    	mouse.style.top = oEvent.clientY + scrolltop + 10 + "px";
    }
	var jump = document.getElementById('jump');
	var body = document.getElementsByClassName('body')[0];
	var close = document.getElementById('close');
	var t1 = document.getElementsByClassName("picture_con1")[0];
	var t2 = document.getElementsByClassName("picture_con2")[0];
	var t3 = document.getElementsByClassName("picture_con3")[0];
	var t4 = document.getElementsByClassName("picture_con4")[0];
	t1.onclick = function(){
		jump.style.display = "block";
	}
	t2.onclick = function(){
		jump.style.display = "block";
	}
	t3.onclick = function(){
		jump.style.display = "block";
	}
	t4.onclick = function(){
		jump.style.display = "block";
	}
	close.onclick = function(){
		jump.style.display = "none";
	}
	
}