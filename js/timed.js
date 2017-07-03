window.onload = function() {
	var user = document.getElementById('user');
	
	user.onclick = function() {
		if(user.innerHTML == '您好，请登录！') {
			login();
		}	
	}
	//限时 倒计时
	setInterval(function() {
		leftTimer('2017/7/10,10:10:00', 'timer_1');
	}, 1000);
	setInterval(function() {
		leftTimer('2017/7/20,10:10:40', 'timer_2');
	}, 1000);
	setInterval(function() {
		leftTimer('2017/7/10,8:10:46', 'timer_3');
	}, 1000);
	setInterval(function() {
		leftTimer('2017/7/30,16:10:00', 'timer_4');
	}, 1000);
}

function leftTimer() {
	var leftTime = new Date(arguments[0]).getTime() - new Date().getTime();
	var days = checkTime(parseInt(leftTime / 1000 / 60 / 60 / 24, 10));
	var hours = checkTime(parseInt(leftTime / 1000 / 60 / 60 % 24, 10));
	var minutes = checkTime(parseInt(leftTime / 1000 / 60 % 60, 10));
	var seconds = checkTime(parseInt(leftTime / 1000 % 60));

	var timeText = document.getElementById(arguments[1]);
	var atext = timeText.getElementsByTagName('span');
	
	atext[0].innerHTML = days;
	atext[1].innerHTML = hours;
	atext[2].innerHTML = minutes;
	atext[3].innerHTML = seconds;
	
}

function checkTime(i) {
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}