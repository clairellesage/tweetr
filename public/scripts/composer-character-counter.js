$(document).ready(function() {
  	console.log("ready!");
  	let max = $('.counter').text();
  	$('#text').bind("keyup", "keydown", function(event) {
  		let newVal = (max - this.value.length)
  		let result = $('.counter').text(newVal)
  		if (newVal < 0) {
  			$('.counter').addClass("negative");
  		}
  		return result;
  	});
});