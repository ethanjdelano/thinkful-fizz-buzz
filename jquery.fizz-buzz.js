// JavaScript Document
$(document).ready(function() {

var number = 1


while (number <= 100) {
	if (number % 3 == 0){
		
		$(".container").append("fizz");
		if (number % 5 == 0){
			$(".container").append(" buzz");
		}
		$(".container").append("<br />");
		number++
	}
	if (number % 5 == 0){
		$(".container").append("buzz <br />");
		number++
	}
	else {
	$(".container").append(number + "<br />");
	number++
	}
	}
})