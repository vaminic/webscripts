function updateTimer(endTimeInUnix){
	var target = endTimeInUnix;
	var current = Date.now();
	var timeDif = target - current;
	if (timeDif <= 0){
		$("#timerD").html("00");
		$("#timerH").html("00");
		$("#timerM").html("00");
		$("#timerS").html("00");
		clearInterval(updateTimer);
	}else{
		var days = Math.floor(timeDif/1000/60/60/24);
		var hours = Math.floor((timeDif/1000/60/60)-(days*24));
		var minutes = Math.floor((timeDif/1000/60)-(days*24*60)-(hours*60));
		var seconds = Math.ceil((timeDif/1000)-(days*24*60*60)-(hours*60*60)-(minutes*60));
		if (seconds == 60){
			seconds = 0;
			minutes += 1;
		}
		if (minutes == 60){
			minutes = 0;
			hours += 1;
		}
		if (hours == 24){
			hours == 0;
			days += 1;
		}
		$("#timerD").html(days.toString());
		if (hours < 10){
			$("#timerH").html("0" + hours.toString());
		}else{
			$("#timerH").html(hours.toString());
		}
		if (minutes < 10){
			$("#timerM").html("0" + minutes.toString());
		}else{
			$("#timerM").html(minutes.toString());
		}
		if (seconds < 10){
			$("#timerS").html("0" + seconds.toString());
		}else{
			$("#timerS").html(seconds.toString());
		}
	}
}