function soundenter(x) {
	document.getElementById(x).play();
}
function soundleave(x) {
	document.getElementById(x).pause();
}
$(document).ready(function() {

	$("img").tooltip({
		position:{
			my:'left top',
			at:'left bottom'
		}

	});


});