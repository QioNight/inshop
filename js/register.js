function trues(obj, index) {
	obj[index].innerHTML = '√';
	obj[index].style.background = 'green';
	obj[index].style.borderRadius = '50%';
	obj[index].style.color = '#fff';
}

window.onload = function() {
	var user = document.getElementById('user');
	var btn_test = document.getElementById('btn_test');
	var reg_form = document.getElementById('reg_form');
	var reg_inpt = reg_form.getElementsByTagName('input');
	var reg_span = reg_form.getElementsByTagName('span');
	var part2 = document.getElementById('part2');
	var part3 = document.getElementById('part3');
	var part_inpt = part2.getElementsByTagName('input')[0];
	var part_img = part2.getElementsByTagName('img')[0];
	var part_span = part2.getElementsByTagName('span')[0];
	var reg_nav = document.getElementsByClassName('reg_nav')[0];
	var reg_navLi = reg_nav.getElementsByTagName('li');
	
	user.onclick = function() {
		if(user.innerHTML == '您好，请登录！') {
			login();
		}
	}
	
	reg_inpt[3].onblur = function() {
		if(!/^1[3|4|5|8][0-9]{9}$/.test(reg_inpt[3].value)) {
			reg_span[2].innerHTML = '手机号码输入有误';
			reg_span[2].style.color = 'red';
		}else {
			trues(reg_span, 2);
		}
	}
	
	reg_inpt[4].onblur = function() {
		if(reg_inpt[4].value.length <6 || reg_inpt[4].value.length >20) {
			reg_span[3].innerHTML = '长度要求在6-20位字符之间';
			reg_span[3].style.color = 'red';
		}else {
			reg_span[3].innerHTML = '';
			var mete = document.createElement('meter');
			mete.min = 0;
			mete.max = 3;
			var strong = document.createElement('strong');
			reg_span[3].appendChild(mete);
			reg_span[3].appendChild(strong);
			if(reg_inpt[4].value.length >=6 && reg_inpt[4].value.length<10) {
				mete.value = 1;
				strong.innerHTML = '弱';
				strong.style.color = '#f00';
			}else if(reg_inpt[4].value.length >=10 && reg_inpt[4].value.length<15) {
				mete.value = 2;
				strong.innerHTML = '较强';
				strong.style.color = '#FF4400';
			}else {
				mete.value = 3;
				strong.innerHTML = '强';
				strong.style.color = 'green';
			}
		}
	}
	
	reg_inpt[5].onblur = function() {
		if(reg_inpt[5].value == '') {
			reg_span[4].innerHTML = '确认密码不能为空';
			reg_span[4].style.color = 'red';
		}else if(reg_inpt[5].value != reg_inpt[4].value) {
			reg_span[4].innerHTML = '两次密码输入不一致';
		}else {
			trues(reg_span, 4);
		}
	}
	
	btn_test.onclick = function() {
		confirm('您的手机号：' + reg_inpt[3].value);
	}
	
	reg_form.onsubmit = function() {
		if(!reg_inpt[9].checked) {
				oMent.style.display = 'block';
				oMentBg.style.display = 'block';
				return false;
			}
		reg_form.style.display = 'none';
		part2.style.display = 'block';
		for(var i=0; i<reg_navLi.length; i++) {
			reg_navLi[i].className = '';
		}
		reg_navLi[1].className = 'reg_on';
		for(var i=3; i<8; i++) {
			if(reg_inpt[3].value == '') {
				part_span.innerHTML = '手机号码错误';
				return false;
			}else if(reg_inpt[4].value == '') {
				part_span.innerHTML = '密码错误';
				return false;
			}else if(reg_inpt[5].value == '') {
				part_span.innerHTML = '两次密码不一致';
				return false;
			}else if(reg_inpt[6].value == '') {
				part_span.innerHTML = '请填写验证码';
				return false;
			}else if(reg_inpt[7].value == '') {
				part_span.innerHTML = '请填写短信验证码';
				return false;
			}else{
				part_img.src = 'img/reg/reg_dian3.png';
				part_inpt.value = '下一步';
				part_span.innerHTML = '正在注册，点击下一步';
			}
		}
	}
	
	part_inpt.onclick = function() {
		if(part_inpt.value == '上一步') {
			reg_form.style.display = 'block';
			part2.style.display = 'none';
			for(var i=0; i<reg_navLi.length; i++) {
				reg_navLi[i].className = '';
			}
			reg_navLi[0].className = 'reg_on';
		}else {
			part2.style.display = 'none';
			part3.style.display = 'block';
			for(var i=0; i<reg_navLi.length; i++) {
				reg_navLi[i].className = '';
			}
			reg_navLi[2].className = 'reg_on';
		}
	}
	
	var oMentA = document.getElementById('mentA');
	var oMent = document.getElementById('ment');
	var oMentBg = document.getElementById('ment_bg');
	var oMentClose = oMent.getElementsByTagName('span')[0];
	var oMentBtn = oMent.getElementsByTagName('button')[0];
	
	oMentA.onclick = function() {
		oMent.style.display = 'block';
		oMentBg.style.display = 'block';
	}
	oMentClose.onclick = function() {
		oMent.style.display = 'none';
		oMentBg.style.display = 'none';
	}
	oMentBtn.onclick = function() {
		oMent.style.display = 'none';
		oMentBg.style.display = 'none';
		reg_inpt[9].checked = true;
	}
}