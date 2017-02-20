$(document).ready(function() {

var wins = 0;
var losses = 0;
var userTotal = 0;
var compNum = Math.floor(Math.random() * 102) + 19;

$("#compNum").html(compNum);

var gemArray = [];

function gemNums() {
	for (i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * 12) + 1;
		gemArray.push(num);
	}
}

gemNums();
console.log(gemArray);


var reset = function() {
	gemArray = [];
	compNum = Math.floor(Math.random() * 102) + 19;
	gemNums();
	console.log(gemArray);
	userTotal = 0;
	diff = compNum - userTotal;
	$("#compNum").html(compNum);
	$("#userNum").html(userTotal);
}

var statusCheck = function() {
	if (userTotal === compNum) {
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}
	else if (userTotal > compNum) {
		losses++;
		$("#losses").html("Losses: " + losses);
		reset();
	}
}


$("#crystal1").on("click", function() {
	userTotal += gemArray[0];
	$("#userNum").html(userTotal);
	statusCheck();
})

$("#crystal2").on("click", function() {
	userTotal += gemArray[1];
	$("#userNum").html(userTotal);
	statusCheck();
})

$("#crystal3").on("click", function() {
	userTotal += gemArray[2];
	$("#userNum").html(userTotal);
	statusCheck();
})

$("#crystal4").on("click", function() {
	userTotal += gemArray[3];
	$("#userNum").html(userTotal);
	statusCheck();
})







})


	

