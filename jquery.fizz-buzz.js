// JavaScript Document
$(document).ready(function() {

var num = prompt("Please enter a number between 1 and 100")

while (num % 1 != 0){

num = prompt("That is not a whole number, please enter a whole number value (ex: 1, 2, 3)")
}

while (num % 1 === 0){
if(num > 100){
num = prompt("That number is too high, please enter a new number")
}
if(num < 1){
num = prompt("That number is too low, please enter a new number")	
}
break
}

var fizzbuzz = function(val) {
	var number = 1
	while (number <= val) {
	if (number % 3 == 0){
		
		$(".container").append("fizz");
		if (number % 5 == 0){
			$(".container").append("buzz");
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


}

fizzbuzz(num)

})