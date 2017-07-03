//获取外部style
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	}else	{
		return getComputedStyle(obj,false)[attr];
	}
}

window.onload = function() {

	var oCombo_nav = document.getElementById('combo_nav_js');
	var aNav_li = oCombo_nav.getElementsByTagName('li');
	var oCombo_thing = document.getElementById('combo_thing_js');
	var aThing_li = oCombo_thing.getElementsByTagName('li');
	
	var oSug_nav = document.getElementById('sug_nav');
	var aSugNav_li = oSug_nav.getElementsByTagName('li');
	var oSug_th = document.getElementById('sug_th');
	var aSugTh_li = oSug_th.getElementsByTagName('li');
	
	var oSugNav = document.getElementById('sugg');
	var oSugLNav = document.getElementById('l_nav');
	var oSugBtn = document.getElementById('sug_btn');
	var footertop= document.getElementById('footer');
	var T = document.getElementById('sugT').offsetTop;
	//窗口的可视高度
	var H=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
	
	var oPTop_img = document.getElementById('pTop_img');
	var oPTop_p = document.getElementById('pTop_p');
	var aPTop_p = oPTop_p.getElementsByTagName('img');
	var oPBg = document.getElementById('p_bg');
	
	var user = document.getElementById('user');
	
	user.onclick = function() {
		if(user.innerHTML == '您好，请登录！') {
			login();
		}	
	}
	for(var i=0; i<aPTop_p.length; i++) {
		aPTop_p[i].index = i;
		aPTop_p[i].onmouseover = function() {
			oPTop_img.src = this.src;
			if(this.index == 0) {
				oPBg.className = 'p_bg';
			}else {
				oPBg.className = '';
			}
		}
	}
	
	for(var i=0; i<aNav_li.length; i++) {
		aNav_li[i].index = i;
		aNav_li[i].onclick = function() {
			for(var i=0; i<aNav_li.length; i++) {
				aNav_li[i].className = "";
				aThing_li[i].style.display = "none";
			}
			this.className = "combo_lion";
			aThing_li[this.index].style.display = "block";
		}
	}
	
	for(var i=0; i<aSugNav_li.length; i++) {
		aSugNav_li[i].index = i;
		aSugNav_li[i].onclick = function() {
			for(var i=0; i<aSugNav_li.length; i++) {
				aSugNav_li[i].className = "";
				aSugTh_li[i].style.display = "none";
			}
			this.className = "sug_on";
			aSugTh_li[this.index].style.display = "block";
		}
	}

	window.onscroll = function() {
		//获取卷上去的高度
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		
		//卷积高度为一定值时，改变nav的定位方式
		if(scrollTop >= T) {
			oSugNav.style.position = 'fixed';
			oSugNav.style.top = '0';
			oSugNav.style.left = '303' + 'px';
			
			oSugLNav.style.position = 'fixed';
			oSugLNav.style.top = '41' + 'px';
			oSugLNav.style.left = '1108' + 'px';
			oSugLNav.style.height = H +"px";
			
			oSugBtn.style.display = 'block';
		}else {
			oSugNav.style.position = 'relative';
			oSugNav.style.top = '0';
			oSugNav.style.left = '0';
			
			oSugLNav.style.position = 'relative';
			oSugLNav.style.top = '0' + 'px';
			oSugLNav.style.left = '1' + 'px';
			
			oSugBtn.style.display = 'none';
		}

		if(scrollTop >=footertop.offsetTop-H) {
			var cT = scrollTop - (footertop.offsetTop-H);
			//外部函数，获取外部style
			var lH = getStyle(oSugLNav,'height');
			
			oSugLNav.style.height = parseInt(lH)-(scrollTop - (footertop.offsetTop-H)) - 72 + 'px';	
		}
		
	}	
}
