window.onload = function() {
	
	var oPnav_ul = document.getElementById('p_nav');
	var aPnav_li = oPnav_ul.getElementsByTagName('li');
	var oLim_ul = document.getElementById('limit_tit');
	var aLim_li = oLim_ul.getElementsByTagName('li');
	var user = document.getElementById('user');
	
	user.onclick = function() {
		if(user.innerHTML == '您好，请登录！') {
			login();
		}	
	}
	for(var i=0; i<aPnav_li.length; i++) {
		aPnav_li[i].index = i;
		aPnav_li[i].onclick = function() {
			for(var i=0; i<aPnav_li.length; i++) {
				aPnav_li[i].className = "";
				aLim_li[i].style.display = "none";
			}
			this.className = "on-red";
			aLim_li[this.index].style.display = "block";
		}
	}
}
