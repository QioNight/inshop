function login() {;
	var login = document.getElementById('login');
	var login_bg = document.getElementById('login_bg');
	var close = document.getElementById('close');
	var login_form = document.getElementById('login_form');
	var inpt = login_form.getElementsByTagName('input');
	var user = document.getElementById('user');

	login.style.display = "block";
	login_bg.style.display = "block";
	
	close.onclick = function() {
		login.style.display = "none";
		login_bg.style.display = "none";
	}
	
	login_form.onsubmit = function() {
		if(inpt[0].value == '') {
			alert('请输入用户名或手机号码或邮箱');
		}else if(inpt[1].value == '') {
			alert('请输入密码');
		}else {
			login.style.display = "none";
			login_bg.style.display = "none";
			user.innerHTML = inpt[0].value;
		}
	}
}