window.onload = function() {
	
	var oBan_img = document.getElementById('ban_img');
	var aB_img = oBan_img.getElementsByTagName('li');
	var oBan_num = document.getElementById('ban_num');
	var aB_num = oBan_num.getElementsByTagName('li');
	var oBanner = document.getElementById('banner');
	var iNum = 0;
	
	var user = document.getElementById('user');
	
	user.onclick = function() {
		if(user.innerHTML == '您好，请登录！') {
			login();
		}	
	}
	oBan_img.style.left = -5+'px';	
		//banner鼠标移入标号，手动换图
	for (var i=0; i<aB_num.length; i++) {
		aB_num[i].index = i;
		aB_num[i].onmouseover = function() {
			for (var i=0; i<aB_num.length; i++) {
				aB_num[i].className = "";
				aB_img[i].style.display = "none";
			}
			this.className = "active";
			aB_img[this.index].style.display = "block";
			iNum = this.index;
		}
	}
	
		//自动切换
	function toRuning(){
		if(iNum == aB_num.length - 1) {
				iNum = 0;	
			}else {
				iNum++;
			}
		for (var j=0; j<aB_num.length; j++) {
				aB_num[j].className = "";
				aB_img[j].style.display = "none";
			}
			aB_img[iNum].style.display = "block";
			//oBan_img.style.left = -5 + (-1920 * iNum) + 'px';
			aB_num[iNum].className = "active";    
		console.log(iNum);
	}
	
	var toRun = setInterval(toRuning,3000);

	oBanner.onmouseover = function() {
		clearInterval(toRun);
	}
	oBanner.onmouseout = function() {
		toRun = setInterval(toRuning,3000);
	}
	
	var oPro_hot = document.getElementById('pro_hot');
	var aHot_li = oPro_hot.getElementsByTagName('li');
	var oPro_ware = document.getElementById('pro_ware');
	var aWare_li = oPro_ware.getElementsByTagName('li');
	
	for(var i=0; i<aHot_li.length; i++) {
		aHot_li[i].index = i;
		aHot_li[i].onclick = function() {
			for(var i=0; i<aHot_li.length; i++) {
				aHot_li[i].className = "";
				aWare_li[i].style.display = "none";
			}
			this.className = "on-click";
			aWare_li[this.index].style.display = "block";
		}
	}
	
	var oHnav_ul = document.getElementById('h_nav_js');
	var aHnav_li = oHnav_ul.getElementsByTagName('li');
	var oWrap_ul = document.getElementById('h_wrap_js');
	var aWrap_li = oWrap_ul.getElementsByTagName('li');
	
	for(var i=0; i<aHnav_li.length; i++) {
		aHnav_li[i].index = i;
		aHnav_li[i].onclick = function() {
			for(var i=0; i<aHnav_li.length; i++) {
				aHnav_li[i].className = "";
				aWrap_li[i].style.display = "none";
			}
			this.className = "nav_on";
			aWrap_li[this.index].style.display = "block";
		}
	}
}
