
$(document).ready(function() {
  	console.log("ready!");
  	let max = $('.counter').text();
  	$('#text').bind("keyup", "keydown", function(event) {
  		let result = $('.counter').text(max - this.value.length)
  		return result;
  	});
});

// console.log($(document).className('.counter'))


// var counter = $(document).querySelector('.counter')
// conosle.log(counter)

// $textarea.addEventListener("keydown", function (event) {
// 	var max = 140;
// 	if (event) {
// 		max -= 1;
// 	}
// 	return max;
// })
// console.log(max);
// var textarea = $('#text');
// document.addEventListener("keydown", function (event) {
// 	console.log(event)
// })

// document.addEventListener("dblclick", function(event) {
//   console.log(event);
// });

//on backspace, add characters
//key location

//js and the dom do this
// function $(query){
// 	return document.querySelector(query);
// }