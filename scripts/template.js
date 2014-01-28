/*Animates SITE GRID switch*/

$("#gridSwitch").click(function(){
 	$("#gridSwitch").toggleClass("switchedOn");
 	$("#gridSwitch").toggleClass("switchedOff");
});

$("#delete").hover(function(){
	$(".pageControl").toggleClass("removePage");
	$("#edit").toggleClass("invisible");
})