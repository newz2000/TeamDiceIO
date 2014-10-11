
$(document).ready(function() {
	console.log('ready...');

	socket.on('roll message', function(obj) {
		console.log(obj);
		$('#displaydie1').text(obj.die1);
		$('#displaydie2').text(obj.die2);
		$('#displaydie3').text(obj.die3);
		$('#displaydie4').text(obj.die4);
		$('#displaydie5').text(obj.die5);
		$('#displaydie6').text(obj.die6);
		$('#displaydie7').text(obj.die7);
	});
});

$('#rollbtn').click(function(e){
	e.preventDefault();
	console.log('Rolling...');
	socket.emit('roll', 'clicked');
});