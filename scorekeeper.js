/*
Kevin Bubacz
WEB187
04/18/2016
*/

var $ = function(id) { return document.getElementById(id); }

function calculate_score () {
	//  ----------------------------------------------------
	//  Get user input
	//  ----------------------------------------------------
	var f1r1 = parseInt($("f1r1").value);
	var f1r2 = parseInt($("f1r2").value);
	
	var f2r1 = parseInt($("f2r1").value);
	var f2r2 = parseInt($("f2r2").value);
	
	var f3r1 = parseInt($("f3r1").value);
	var f3r2 = parseInt($("f3r2").value);
	
	var f4r1 = parseInt($("f4r1").value);
	var f4r2 = parseInt($("f4r2").value);
	
	var f5r1 = parseInt($("f5r1").value);
	var f5r2 = parseInt($("f5r2").value);
	
	var f6r1 = parseInt($("f6r1").value);
	var f6r2 = parseInt($("f6r2").value);
	
	var f7r1 = parseInt($("f7r1").value);
	var f7r2 = parseInt($("f7r2").value);
	
	var f8r1 = parseInt($("f8r1").value);
	var f8r2 = parseInt($("f8r2").value);
	
	var f9r1 = parseInt($("f9r1").value);
	var f9r2 = parseInt($("f9r2").value);
	
	var f10r1 = parseInt($("f10r1").value);
	var f10r2 = parseInt($("f10r2").value);
	var f10r3 = parseInt($("f10r3").value);
	
	
	//  ----------------------------------------------------
	//  Display running total score for each frame1_score
	//  ----------------------------------------------------
	var frame1_score = $("frame1_score");
	var frame2_score = $("frame2_score");
	var frame3_score = $("frame3_score");
	var frame4_score = $("frame4_score");
	var frame5_score = $("frame5_score");
	var frame6_score = $("frame6_score");
	var frame7_score = $("frame7_score");
	var frame8_score = $("frame8_score");
	var frame9_score = $("frame9_score");
	var frame10_score = $("frame10_score");
	var totalscore = $("totalscore");
	
	//  --------------------------------------------------------
	//  Add 1st and 2nd roll of each frame to get frame score
	//  --------------------------------------------------------
	var result = f1r1 + f1r2;
	var result2 = f2r1 + f2r2;
	var result3 = f3r1 + f3r2;
	var result4 = f4r1 + f4r2;
	var result5 = f5r1 + f5r2;
	var result6 = f6r1 + f6r2;
	var result7 = f7r1 + f7r2;
	var result8 = f8r1 + f8r2;
	var result9 = f9r1 + f9r2;
	var result10 = f10r1 + f10r2 + f10r3;
	
	//  ---------------------------------------------------------------
	//  CALCULATES SCORE
	//  Each block checks for 2 strikes in a row first,
	//  then 1 strike, then a spare, then displays the result
	//  ---------------------------------------------------------------
	
	//  Calculate Frame 1
	if (f1r1 == 10 && f2r1 == 10) {
		frame1_score.value = result + f2r1 + f3r1;
	} else if (f1r1 == 10) {
		frame1_score.value = result + f2r1 + f2r2;
		$("f1r2").value = 0;
		$("f1r1").style.display = "none";
		$("f1r2").style.display = "none";
		$("f1blank").style.display = "inline";
		$("f1strike").style.display = "inline";
	} else if (f1r1 != 10 && (f1r1 + f1r2 == 10)) {
		frame1_score.value = result + f2r1;
		$("f1r2").style.display = "none";
		$("f1spare").style.display = "inline";
	} else {
		frame1_score.value = result;
	}
	
	//  Calculate Frame 2
	if (f2r1 == 10 && f3r1 == 10) {
		frame2_score.value = parseInt($("frame1_score").value) + result2 + f3r1 + f4r1;
	} else if (f2r1 == 10) {
		frame2_score.value = parseInt($("frame1_score").value) + result2 + f3r1 + f3r2;
		$("f2r2").value = 0;
		$("f2r1").style.display = "none";
		$("f2r2").style.display = "none";
		$("f2blank").style.display = "inline";
		$("f2strike").style.display = "inline";
	} else if (f2r1 != 10 && (f2r1 + f2r2 == 10)) {
		frame2_score.value = parseInt($("frame1_score").value) + result2 + f3r1;
		$("f2r2").style.display = "none";
		$("f2spare").style.display = "inline";
	} else {
		frame2_score.value = parseInt($("frame1_score").value) + result2;
	}
	
	//  Calculate Frame 3
	if (f3r1 == 10 && f4r1 == 10) {
		frame3_score.value = parseInt($("frame2_score").value) + result3 + f4r1 + f5r1;
	} else if (f3r1 == 10) {
		frame3_score.value = parseInt($("frame2_score").value) + result3 + f4r1 + f4r2;
		$("f3r2").value = 0;
		$("f3r1").style.display = "none";
		$("f3r2").style.display = "none";
		$("f3blank").style.display = "inline";
		$("f3strike").style.display = "inline";
	} else if (f3r1 != 10 && (f3r1 + f3r2 == 10)) {
		frame3_score.value = parseInt($("frame2_score").value) + result3 + f4r1;
		$("f3r2").style.display = "none";
		$("f3spare").style.display = "inline";
	} else {
		frame3_score.value = parseInt($("frame2_score").value) + result3;
	}
	
	//  Calculate Frame 4
	if (f4r1 == 10 && f5r1 == 10) {
		frame4_score.value = parseInt($("frame3_score").value) + result4 + f5r1 + f6r1;
	} else if (f4r1 == 10) {
		frame4_score.value = parseInt($("frame3_score").value) + result4 + f5r1 + f5r2;
		$("f4r2").value = 0;
		$("f4r1").style.display = "none";
		$("f4r2").style.display = "none";
		$("f4blank").style.display = "inline";
		$("f4strike").style.display = "inline";
	} else if (f4r1 != 10 && (f4r1 + f4r2 == 10)) {
		frame4_score.value = parseInt($("frame3_score").value) + result4 + f5r1;
		$("f4r2").style.display = "none";
		$("f4spare").style.display = "inline";
	} else {
		frame4_score.value = parseInt($("frame3_score").value) + result4;
	}
	
	//  Calculate Frame 5
	if (f5r1 == 10 && f6r1 == 10) {
		frame5_score.value = parseInt($("frame4_score").value) + result5 + f6r1 + f7r1;
	} else if (f5r1 == 10) {
		frame5_score.value = parseInt($("frame4_score").value) + result5 + f6r1 + f6r2;
		$("f5r2").value = 0;
		$("f5r1").style.display = "none";
		$("f5r2").style.display = "none";
		$("f5blank").style.display = "inline";
		$("f5strike").style.display = "inline";
	} else if (f5r1 != 10 && (f5r1 + f5r2 == 10)) {
		frame5_score.value = parseInt($("frame4_score").value) + result5 + f6r1;
		$("f5r2").style.display = "none";
		$("f5spare").style.display = "inline";
	} else {
		frame5_score.value = parseInt($("frame4_score").value) + result5;
	}
	
	//  Calculate Frame 6
	if (f6r1 == 10 && f7r1 == 10) {
		frame6_score.value = parseInt($("frame5_score").value) + result6 + f7r1 + f8r1;
	} else if (f6r1 == 10) {
		frame6_score.value = parseInt($("frame5_score").value) + result6 + f7r1 + f7r2;
		$("f6r2").value = 0;
		$("f6r1").style.display = "none";
		$("f6r2").style.display = "none";
		$("f6blank").style.display = "inline";
		$("f6strike").style.display = "inline";
	} else if (f6r1 != 10 && (f6r1 + f6r2 == 10)) {
		frame6_score.value = parseInt($("frame5_score").value) + result6 + f7r1;
		$("f6r2").style.display = "none";
		$("f6spare").style.display = "inline";
	} else {
		frame6_score.value = parseInt($("frame5_score").value) + result6;
	}
	
	//  Calculate Frame 7
	if (f7r1 == 10 && f8r1 == 10) {
		frame7_score.value = parseInt($("frame6_score").value) + result7 + f8r1 + f9r1;
	} else if (f7r1 == 10) {
		frame7_score.value = parseInt($("frame6_score").value) + result7 + f8r1 + f8r2;
		$("f7r2").value = 0;
		$("f7r1").style.display = "none";
		$("f7r2").style.display = "none";
		$("f7blank").style.display = "inline";
		$("f7strike").style.display = "inline";
	} else if (f7r1 != 10 && (f7r1 + f7r2 == 10)) {
		frame7_score.value = parseInt($("frame6_score").value) + result7 + f8r1;
		$("f7r2").style.display = "none";
		$("f7spare").style.display = "inline";
	} else {
		frame7_score.value = parseInt($("frame6_score").value) + result7;
	}
	
	//  Calculate Frame 8
	if (f8r1 == 10 && f9r1 == 10) {
		frame8_score.value = parseInt($("frame7_score").value) + result8 + f9r1 + f10r1;
	} else if (f8r1 == 10) {
		frame8_score.value = parseInt($("frame7_score").value) + result8 + f9r1 + f9r2;
		$("f8r2").value = 0;
		$("f8r1").style.display = "none";
		$("f8r2").style.display = "none";
		$("f8blank").style.display = "inline";
		$("f8strike").style.display = "inline";
	} else if (f8r1 != 10 && (f8r1 + f8r2 == 10)) {
		frame8_score.value = parseInt($("frame7_score").value) + result8 + f9r1;
		$("f8r2").style.display = "none";
		$("f8spare").style.display = "inline";
	} else {
		frame8_score.value = parseInt($("frame7_score").value) + result8;
	}
	
	//  Calculate Frame 9
	if (f9r1 == 10 && f10r1 == 10) {
		frame9_score.value = parseInt($("frame8_score").value) + result9 + f10r1 + f10r2;
	} else if (f9r1 == 10) {
		frame9_score.value = parseInt($("frame8_score").value) + result9 + f10r1 + f10r2;
		$("f9r2").value = 0;
		$("f9r1").style.display = "none";
		$("f9r2").style.display = "none";
		$("f9blank").style.display = "inline";
		$("f9strike").style.display = "inline";
	} else if (f9r1 != 10 && (f9r1 + f9r2 == 10)) {
		frame9_score.value = parseInt($("frame8_score").value) + result9 + f10r1;
		$("f9r2").style.display = "none";
		$("f9spare").style.display = "inline";
	} else {
		frame9_score.value = parseInt($("frame8_score").value) + result9;
	}
	
	//  Calculate Frame 10
	frame10_score.value = parseInt($("frame9_score").value) + result10;
	if (f10r1 == 10) {
		$("f10r1").style.display = "none";
		$("f10strike1").style.display = "inline";
	} else if (f10r1 != 10 && (f10r1 + f10r2 == 10)) {
		$("f10r2").style.display = "none";
		$("f10spare1").style.display = "inline";
	}
	
	if (f10r2 == 10) {
		$("f10r2").style.display = "none";
		$("f10strike2").style.display = "inline";
	} else if (f10r1 != 10) {
		$("f10r3").style.display = "inline";
	} else if (f10r2 != 10 && (f10r2 + f10r3 == 10)) {
		$("f10r3").style.display = "none";
		$("f10spare2").style.display = "inline";
	}
	
	if (f10r3 == 10) {
		$("f10r3").style.display = "none";
		$("f10strike3").style.display = "inline";
	}
	
	//  Calculate Total Score
	totalscore.value = parseInt($("frame10_score").value);
}

//  ---------------------------------------------------------
//  --- User clicks Add Player button to add more players ---
//  ---------------------------------------------------------
function add_player2 () {
	var add;
	add = $("player2").style.display = "block";
	add = $("add_player2").style.display = "none";
	add = $("add_player3").style.display = "block";
}

function add_player3 () {
	var add;
	add = $("player3").style.display = "block";
	add = $("add_player3").style.display = "none";
	add = $("add_player4").style.display = "block";
}

function add_player4 () {
	var add;
	add = $("player4").style.display = "block";
	add = $("add_player4").style.display = "none";
	add = $("add_player5").style.display = "block";
}

function add_player5 () {
	var add;
	add = $("player5").style.display = "block";
	add = $("add_player5").style.display = "none";
	add = $("add_player6").style.display = "block";
}

function add_player6 () {
	var add;
	add = $("player6").style.display = "block";
	add = $("add_player6").style.display = "none";
	add = $("add_player7").style.display = "block";
}

function add_player7 () {
	var add;
	add = $("player7").style.display = "block";
	add = $("add_player7").style.display = "none";
	add = $("add_player8").style.display = "block";
}

function add_player8 () {
	var add;
	add = $("player8").style.display = "block";
	add = $("add_player8").disabled= "disabled";
}

window.onload = function () {
	$("f1r1").oninput = calculate_score;
	$("f1r2").oninput = calculate_score;
	
	$("f2r1").oninput = calculate_score;
	$("f2r2").oninput = calculate_score;
	
	$("f3r1").oninput = calculate_score;
	$("f3r2").oninput = calculate_score;
	
	$("f4r1").oninput = calculate_score;
	$("f4r2").oninput = calculate_score;
	
	$("f5r1").oninput = calculate_score;
	$("f5r2").oninput = calculate_score;
	
	$("f6r1").oninput = calculate_score;
	$("f6r2").oninput = calculate_score;
	
	$("f7r1").oninput = calculate_score;
	$("f7r2").oninput = calculate_score;
	
	$("f8r1").oninput = calculate_score;
	$("f8r2").oninput = calculate_score;
	
	$("f9r1").oninput = calculate_score;
	$("f9r2").oninput = calculate_score;
	
	$("f10r1").oninput = calculate_score;
	$("f10r2").oninput = calculate_score;
	$("f10r3").oninput = calculate_score;
}