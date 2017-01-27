$(document).ready(function() {
  	console.log("ready!");
  	let max = $('.counter').text();
  	$('.textarea').bind("keyup", "keydown", function(event) {
  		let newVal = (max - this.value.length)
  		let result = $('.counter').text(newVal)
      $('.counter').removeClass("negative");
  		if (newVal < 0) {
  			$('.counter').addClass("negative");
  		}
  		return result;
  	});
});