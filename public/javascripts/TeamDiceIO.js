
$(document).ready(function() {

	socket.on('roll message', function(obj) {
		console.log(obj);
		if(obj.die1) {
			$('#displaydie1').text(obj.die1);
		}
		if(obj.die2) {
			$('#displaydie2').text(obj.die2);
		}
		if(obj.die3) {
			$('#displaydie3').text(obj.die3);
		}
		if(obj.die4) {
			$('#displaydie4').text(obj.die4);
		}
		if(obj.die5) {
			$('#displaydie5').text(obj.die5);
		}
		if(obj.die6) {
			$('#displaydie6').text(obj.die6);
		}
		if(obj.die7) {
			$('#displaydie7').text(obj.die7);
		}
	});
});

$('#rollbtn').click(function(e){
	e.preventDefault();
	var dice = {},
		alldice = false;

	if($('input.diceselector:checked').length < 1) {
		alldice = true;
	}
	if(alldice || $('#displaydie1toggle').prop('checked')) {
		dice.die1 = true;
	}
	if(alldice || $('#displaydie2toggle').prop('checked')) {
		dice.die2 = true;
	}
	if(alldice || $('#displaydie3toggle').prop('checked')) {
		dice.die3 = true;
	}
	if(alldice || $('#displaydie4toggle').prop('checked')) {
		dice.die4 = true;
	}
	if(alldice || $('#displaydie5toggle').prop('checked')) {
		dice.die5 = true;
	}
	if(alldice || $('#displaydie6toggle').prop('checked')) {
		dice.die6 = true;
	}
	if(alldice || $('#displaydie7toggle').prop('checked')) {
		dice.die7 = true;
	}
	console.log(dice);
	socket.emit('roll', dice);
});