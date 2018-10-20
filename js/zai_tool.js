/**
* 本类库由仔仔、银河、列边框哥等人一起呕心沥血的完成，熬了不知道多个夜晚。
* 本类库永久免费，希望大家能够真诚一点。
* 我们不需要你们给予我们什么，但希望大家能够不要轻易破坏他人辛辛苦苦做出来的东西。
* 希望大家记住，本类库的特征和本js的名称。
* 另外，请记住本类库的名字。
* 名字：仔仔类库
* 创建者：仔仔
* QQ：806606688
* QQ群：492462862
* 感谢本类库某些方法的贡献者：银河网络软件、列边框哥等人。
* 希望大家在使用这些类库的时候，擦亮自己的眼睛。
* 盗版类库、翻版类库，可能会窃取您的某些隐私资料。
* 请大家支持仔仔类库，永久免费的类库。
* 蓝鸟上唯一一个工具集合类库。
* 蓝色上的精易模块。
* 记住类库里面的一些特征。
* 比如：方法名字的规则、某些注释上的感谢人、某些文件的命名等。
* 最后，感谢大家的支持，有您们的支持，我们才能做的更好。
*/

function 仔仔(name,eventName,eventProxi,eventNamea,eventNameb,eventNamec,eventNamec1,eventNamec2,eventNamec3,eventNamec4,eventpicka,eventpickb,eventDownload,eventjtjuk,eventAxis,eventAxisjt,eventpickDate,eventpickTime,eventpickBitmap,eventAccuracy,eventdxyzfsdx,eventdxyzfsdxa,eventleoweather){   
	this.名称 = name;
	this.服务端返回数据类型 = "";
	this.请求头 = null;
	this.跨域 = false;
	this.图片地址 = null;
	this.账号1 = "";
	this.密码1 = "";
	/*名字：仔仔类库 QQ群：492462862*/
	this.网络_取网络状态 = function(){
		return plus.networkinfo.getCurrentType();
	}
	
	this.组件_置是否可编辑 = function (namede,yesno){
		if(yesno==true){
			document.getElementById(namede).setAttribute("contenteditable","true");
		}else{
			document.getElementById(namede).setAttribute("contenteditable","false");
		}
	}
	
	this.组件_取是否可编辑 = function (namede){
		return document.getElementById(namede).getAttribute("contenteditable");
	}
	
	this.组件_文本反向 = function (namede){
		document.getElementById(namede).setAttribute("dir","rtl");
	}
	
	this.文本_取指定文本 = function (str,left,right){
		return str.substring(str.indexOf(left) + 1,str.indexOf(right));
	}
	
	/*名字：仔仔类库 QQ群：492462862*/
	this.网络_置跨域请求 = function(cross){
		this.跨域 = cross;
	}/*名字：仔仔类库 QQ群：492462862*/
	
	this.网络_置附加请求头 = function(header){
		this.请求头 = header;
	}/*名字：仔仔类库 QQ群：492462862*/
	
	this.数据库_查询数据 = function (urld,biao,zid,datas,fanhui){
		this.服务端返回数据类型 = fanhui;
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'post',                        
			headers:this.请求头,
			dataType: fanhui,
			data: "lei=1&biao=" + biao + "&zid=" + zid + "&name=" + datas,
			timeout: 10000,
			success: function(response) {
				complete(true,response);
			},
			error: function(xhr,type,errorThrown) {
				complete(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/    
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.数据库_修改数据 = function (urld,biao,zid,datas,uid,uname,fanhui){
		this.服务端返回数据类型 = fanhui;
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'post',                        
			headers:this.请求头,
			dataType: fanhui,
			data: "lei=2&biao=" + biao + "&zid=" + zid + "&name=" + datas+"&uid=" + uid+"&uname=" + uname,
			timeout: 10000,
			success: function(response) {
				complete(true,response);
			},
			error: function(xhr,type,errorThrown) {
				complete(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/     
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.数据库_增加记录 = function (urld,biao,zid,datas,fanhui){
		this.服务端返回数据类型 = fanhui;
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'post',                        
			headers:this.请求头,
			dataType: fanhui,
			data: "lei=3&biao=" + biao + "&zid=" + zid + "&name=" + datas,
			timeout: 10000,
			success: function(response) {
				complete(true,response);
			},
			error: function(xhr,type,errorThrown) {
				complete(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/    
	}
	
	this.命令_比较两个日期大小 = function (smallDate, bigDate){
		var v1 = smallDate; 
		var v2 = bigDate;
		if (v1 >= v2) { 
			v2.focus(); 
			return false; 
			} else{
			return true;
		} 
	}
	
	
	this.命令_检查逻辑值 = function (namede){
		return new Boolean(namede);
	}
	
	this.命令_比较两个金额大小 = function (smallNum,bigNum){
		var v1 = smallNum; 
		var v2 = bigNum; 
		if (parseFloat(v1) >= parseFloat(v2)) {
			v2.focus();
			return false; 
			} else{
			return true;
		}
	}
	
	this.命令_是否超出指定长度 = function (textId,len){
		obj = $(textId); 
		str = obj.value; 
		str = str.replace(/[^\x00-\xff]/g, "**"); 
		realLen = str.length; 
		if (realLen > len) { 
			obj.focus(); 
			return false; 
			} else{
			return true;
		}
	}
	
	this.命令_不可以为空 = function (textId){
		var textObj = $(textId); 
		var textValue = textObj.value; 
		if (trim(textValue) == '') { 
			textObj.focus(); 
			return false; 
			} else { 
			return true; 
		} 
	}
	
	this.命令_必须为邮件 = function (textId){
		var obj = $(textId); 
		if (!_isEmail(obj.value)) { 
			obj.focus(); 
			return false; 
			} else {
			return true; 
		}
	}
	
	this.命令_是否为邮件 = function (strEmail){
		var first = strEmail.indexOf('.'); 
		if (strEmail.indexOf('@')== -1) { 
			return false; 
		} 
		var tempStr = strEmail.substring(first + 1); 
		if (tempStr.indexOf('.') != -1) { 
			return false; 
		} 
		if (strEmail 
		.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) { 
			return true; 
			} else{ 
			return false;
		}
	}
	
	this.命令_是否为数字 = function (textId){
		obj = $(textId); 
		if (isNaN(obj.value)) { 
			obj.focus(); 
			return false; 
			} else{ 
			return true;
		}
	}
	
	this.命令_是否含有非法字符 = function (textId){
		obj = $(textId); 
		if (!_isValidString(obj.value, '不得含有非法字符。')) { 
			obj.focus(); 
			return false; 
			} else{
			return true;
		}
	}
	
	this.命令_是否为合法字符串 = function (szStr,errMsg){
		voidChar = "'\"><`~!@#$%^&\(\)（）！￥……？?“”‘'*"; 
		for (var i = 0; i < voidChar.length; i++) { 
			aChar = voidChar.substring(i, i + 1); 
			if (szStr.indexOf(aChar) > -1){ 
				alert(errMsg) 
				return false; 
			} 
		} 
		return true;
	}
	
	this.下拉_不可为负数 = function (selectId,nullValue){
		var obj = $(selectId); 
		if (obj.value == notNull(nullValue,'-1')) { 
			obj.focus(); 
			return false; 
			} else{ 
			return true;
		} 
	}
	
	this.下拉_获取内容 = function (selectObj){
		return selectObj.options[selectObj.selectedIndex].text;
	}
	
	this.下拉_获取值 = function (selectObj){
		return selectObj.options[selectObj.selectedIndex].value; 
	}
	
	this.下拉_设置到指定值 = function (obj, value){		
		obj.value= value; 
	}
	
	this.下拉_动态组装 = function (obj,valAndText){		
		if(trim(valAndText)==''){ 
			return false; 
		} 
		clearSelect(obj); 
		var keyandvalues = valAndText.split(';'); 
		for(var i=0;i<keyandvalues.length;i++){ 
			var arr = keyandvalues[i].split(','); 
			if(arr){ 
				var value =arr[0]; 
				var text =arr[1]; 
				var objOption = new Option(text,value); 
				obj.add(objOption); 
			} 
		} 
	}
	
	this.下拉_清空项目 = function (obj){		
		for (var i=obj.options.length; i >0; i--) { 
			obj.remove(0); 
		} 
	}
	
	this.数组_随机排列 = function (arr){
		if(arr!=null){
	       arr.sort(function(){ return 0.5 - Math.random() });
        }
	}
	
	this.数据库_删除记录 = function (urld,biao,zid,datas,fanhui){
		this.服务端返回数据类型 = fanhui;
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'post',                        
			headers:this.请求头,
			dataType: fanhui,
			data: "lei=4&biao=" + biao + "&zid=" + zid + "&name=" + datas,
			timeout: 10000,
			success: function(response) {
				complete(true,response);
			},
			error: function(xhr,type,errorThrown) {
				complete(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/      
	}
	
	/*名字：仔仔类库 QQ群：492462862*/
	this.数据库_自定义 = function (urld,datas,fanhui){
		this.服务端返回数据类型 = fanhui;
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'post',                        
			headers:this.请求头,
			dataType: fanhui,
			data: "lei=5&biao=" + datas,
			timeout: 10000,
			success: function(response) {
				complete(true,response);
			},
			error: function(xhr,type,errorThrown) {
				complete(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/     
	}
	
	var complete = function(result,response) {
		if(eventName==null){
			return;
		}/*名字：仔仔类库 QQ群：492462862*/
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}
		}
		eventName(result,response);/*名字：仔仔类库 QQ群：492462862*/
	};      
	/*名字：仔仔类库 QQ群：492462862*/
	this.网络_取网页源码 = function (urld){
		this.服务端返回数据类型 = "txt";
		/*名字：仔仔类库 QQ群：492462862*/
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'get',                        
			headers:this.请求头,
			dataType: 'txt',
			data: '',
			timeout: 10000,
			success: function(response) {
				wyymhq(true,response);
			},
			error: function(xhr,type,errorThrown) {
				wyymhq(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/   
	}
	
	var wyymhq = function(result,response) {
		if(eventNamec==null){
			return;
		}/*名字：仔仔类库 QQ群：492462862*/
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}/*名字：仔仔类库 QQ群：492462862*/
		}
		eventNamec(result,response);
	};/*名字：仔仔类库 QQ群：492462862*/
	
	this.网络_取网页源码2 = function (urld){
		this.服务端返回数据类型 = "txt";
		
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'get',                        
			headers:this.请求头,
			dataType: 'txt',
			data: '',
			timeout: 10000,
			success: function(response) {
				wyymhq1(true,response);
			},
			error: function(xhr,type,errorThrown) {
				wyymhq1(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/     
	}
	
	var wyymhq1 = function(result,response) {
		if(eventNamec1==null){
			return;
		}
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}
		}
		eventNamec1(result,response);
	};
	
	this.网络_取网页源码3 = function (urld){
		this.服务端返回数据类型 = "txt";
		
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'get',                        
			headers:this.请求头,
			dataType: 'txt',
			data: '',
			timeout: 10000,
			success: function(response) {
				wyymhq2(true,response);
			},
			error: function(xhr,type,errorThrown) {
				wyymhq2(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/    
	}
	
	var wyymhq2 = function(result,response) {
		if(eventNamec2==null){
			return;
		}
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}
		}
		eventNamec2(result,response);
	};
	
	this.网络_取网页源码4 = function (urld){
		this.服务端返回数据类型 = "txt";
		
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'get',                        
			headers:this.请求头,
			dataType: 'txt',
			data: '',
			timeout: 10000,
			success: function(response) {
				wyymhq3(true,response);
			},
			error: function(xhr,type,errorThrown) {
				wyymhq3(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/      
	}
	
	var wyymhq3 = function(result,response) {
		if(eventNamec3==null){
			return;
		}/*名字：仔仔类库 QQ群：492462862*/
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}/*名字：仔仔类库 QQ群：492462862*/
		}
		eventNamec3(result,response);
	};
	/*名字：仔仔类库 QQ群：492462862*/
	this.网络_取网页源码5 = function (urld){
		this.服务端返回数据类型 = "txt";
		
		mui.ajax(urld, {
			crossDomain:this.跨域,
			type: 'get',                        
			headers:this.请求头,
			dataType: 'txt',
			data: '',
			timeout: 10000,
			success: function(response) {
				wyymhq4(true,response);
			},
			error: function(xhr,type,errorThrown) {
				wyymhq4(false,type);
			}
		});  
		/*名字：仔仔类库 QQ群：492462862*/    
	}
	
	var wyymhq4 = function(result,response) {
		if(eventNamec4==null){
			return;
		}/*名字：仔仔类库 QQ群：492462862*/
		if(result==true){
			if (this.服务端返回数据类型 === "json") {
				response = JSON.stringify(response);
				} else if (this.服务端返回数据类型 === "xml") {
				response = new XMLSerializer().serializeToString(response);
			}
		}
		eventNamec4(result,response);
	};
	
	/*名字：仔仔类库 QQ群：492462862*/
	this.资源_引入css文件 = function (newTitle){
		var CSS = document.createElement("link");
		CSS.href = newTitle;
		CSS.rel = "stylesheet";
		CSS.type = "text/css";
		document.getElementsByTagName("head").item(0).appendChild(CSS);
	}/*名字：仔仔类库 QQ群：492462862*/
	
	this.资源_引入JS文件 = function (newTitle,wei){
		if(wei){
			var JS = document.createElement("script");
			JS.src = newTitle;
			JS.type = "text/javascript";
			document.getElementsByTagName(wei).item(0).appendChild(JS);
			}else{
			var JS = document.createElement("script");
			JS.src = newTitle;
			JS.type = "text/javascript";
			document.getElementsByTagName("head").item(0).appendChild(JS);
		}
		/*名字：仔仔类库 QQ群：492462862*/
	}
	
	this.命令_延迟执行 = function (newTitle,time){
		setTimeout(newTitle,time);
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_转整数型 = function (newTitle){
		return parseInt(newTitle);
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_转整数型2 = function (newTitle){
		return parseFloat(newTitle);
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_保存全局变量 = function (newTitle,newTitle1){
		localStorage.newTitle = newTitle1;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_读取全局变量 = function (newTitle){
		return localStorage[newTitle];
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_滚动到某位置 = function (newTitle,newTitle1){
		window.scrollTo(parseInt(newTitle),parseInt(newTitle1));
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.命令_当前滚动位置 = function (){
		var scrollPos;
		if (window.pageYOffset)
		{
			scrollPos = window.pageYOffset;
		}
		else if (document.compatMode && document.compatMode != 'BackCompat')
		{
			scrollPos = document.documentElement.scrollTop;
		}
		else if (document.body) 
		{
			scrollPos = document.body.scrollTop;
		}
		return scrollPos;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	
	this.命令_信息框 = function (newTitle){
		alert(newTitle);
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置文字位置 = function (newTitle,weizh){
		if(weizh=="左"){
			document.getElementById(newTitle).style.textAlign = "left";
			}else if(weizh=="中"){
			document.getElementById(newTitle).style.textAlign = "center";
			}else if(weizh=="右"){
			document.getElementById(newTitle).style.textAlign = "right";
		}
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置背景图 = function (name,newTitle){
		document.getElementById(name).style.backgroundImage='url('+newTitle+')';
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置背景图大小 = function (name,newTitle){
		document.getElementById(name).style.backgroundSize=newTitle;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置背景透明度 = function (name,newTitle){
		document.getElementById(name).style.opacity=newTitle;
		/*名字：仔仔类库 QQ群：492462862*/
	}
	
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置宽度 = function (name,newTitle){
		document.getElementById(name).style.width=newTitle;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_取宽度 = function (name){
		return document.getElementById(name).style.width;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_置高度 = function (name,newTitle){
		document.getElementById(name).style.height=newTitle;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_取高度 = function (name){
		return document.getElementById(name).style.height;
	}
	/*名字：仔仔类库 QQ群：492462862*/
	this.组件_设置圆角 = function (name,newTitle){
		document.getElementById(name).style.borderRadius=newTitle;
	}
	
	
	this.组件_自定义边框 = function (name,newTitle,newTitle1){
		document.getElementById(name).style.borderColor=newTitle;
		document.getElementById(name).style.borderWidth=newTitle1;
	}
	
	
	this.组件_自定义颜色 = function (name,newTitle,newTitle1){
		document.getElementById(name).style.background=newTitle;
		document.getElementById(name).style.color=newTitle1;
	}
	
	this.组件_置字体大小 = function (name,newTitle){
		document.getElementById(name).style.fontSize=newTitle;
	}
	
	this.组件_取字体大小 = function (name,newTitle){
		return document.getElementById(name).style.fontSize;
	}
	
	this.组件_取背景颜色 = function (name){
		return document.getElementById(name).style.background;
	}
	
	this.组件_取字体颜色 = function (name){
		return document.getElementById(name).style.color;
	}
	
	this.组件_悬浮组件 = function (newTitle,wei){
		if(wei=="1"){
			document.getElementById(newTitle).style.position="fixed";
			}else{
			document.getElementById(newTitle).style.position="relative";
		}
	}
	
	this.组件_距离顶部 = function (name,newTitle){
		document.getElementById(name).style.top=newTitle;
	}
	
	this.组件_置横排 = function (name,lei){
		if(lei=="1"){
			document.getElementById(name).style.cssFloat ="left";
			}else{
			document.getElementById(name).style.cssFloat ="none";
			document.getElementById(name).style.width="100%";
			document.getElementById(name).style.marginTop="none";
		}
	}
	
	this.组件_距离顶部2 = function (name,newTitle){
		document.getElementById(name).style.marginTop=newTitle;
	}
	
	this.组件_取距离顶部 = function (name){
		return document.getElementById(name).style.top;
	}
	
	this.组件_取距离顶部2 = function (name){
		return document.getElementById(name).style.marginTop;
	}
	
	this.组件_距离左边 = function (name,newTitle){
		document.getElementById(name).style.marginLeft=newTitle;
	}
	
	this.组件_取距离左边 = function (name){
		return document.getElementById(name).style.marginLeft;
	}
	
	this.组件_优先级 = function (name,newTitle){
		document.getElementById(name).style.zIndex=newTitle;
	}
	
	this.组件_取优先级 = function (name){
		return document.getElementById(name).style.zIndex;
	}
	
	this.编码_url编码 = function (newTitle){
		return encodeURI(newTitle);
	}
	
	this.编码_url解码 = function (newTitle){
		return decodeURI(newTitle);
	}
	
	this.组件_停靠位置 = function (newTitle,weizh){
		if(weizh=="左"){
			document.getElementById(newTitle).style.cssFloat = "left";
			}else if(weizh=="中"){
			document.getElementById(newTitle).style.cssFloat = "none";
			}else if(weizh=="右"){
			document.getElementById(newTitle).style.cssFloat = "right";
		}
	}
	
	this.编码_RC4加密 = function (name,key){
		return CryptoJS.RC4.encrypt(name,key);
	}
	
	this.编码_RC4解密 = function (name,key){
		var mima = CryptoJS.RC4.decrypt(name,key).toString(CryptoJS.enc.Utf8);
		return mima;
	}
	
	this.编码_AES加密 = function (name,key){
		return CryptoJS.AES.encrypt(name,key);
	}
	
	this.编码_AES解密 = function (name,key){
		var mima = CryptoJS.AES.decrypt(name,key).toString(CryptoJS.enc.Utf8);
		return mima;
	}
	
	this.编码_DES加密 = function (name,key){
		return CryptoJS.DES.encrypt(name,key);
	}
	
	this.编码_DES解密 = function (name,key){
		var mima = CryptoJS.DES.decrypt(name,key).toString(CryptoJS.enc.Utf8);
		return mima;
	}
	
	this.编码_TripleDES加密 = function (name,key){
		return CryptoJS.TripleDES.encrypt(name,key);
	}
	
	this.编码_TripleDES解密 = function (name,key){
		var mima = CryptoJS.TripleDES.decrypt(name,key).toString(CryptoJS.enc.Utf8);
		return mima;
	}
	
	this.编码_base64加密 = function (name){
		var str = CryptoJS.enc.Utf8.parse(name);
		return CryptoJS.enc.Base64.stringify(str);
	}
	
	this.编码_base64解密 = function (name){
		var mima = CryptoJS.enc.Base64.parse(name).toString(CryptoJS.enc.Utf8);
		return mima;
	}
	
	this.编码_SHA1 = function (name){
		return CryptoJS.SHA1(name);
	}
	
	this.编码_MD5 = function (name){
		return CryptoJS.MD5(name);
	}
	
	this.命令_取随机数 = function (n){
		var chars = ['0','1','2','3','4','5','6','7','8','9'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*9);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数2 = function (n){
		var chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*25);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数3 = function (n){
		var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*35);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数4 = function (n){
		var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*25);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数5 = function (n){
		var chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*25);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数6 = function (n){
		var chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*25);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取随机数7 = function (n){
		var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var res = "";
		for(var i = 0; i < n ; i ++) {
			var id = Math.ceil(Math.random()*25);
			res += chars[id];
		}
		return res;
	}
	
	this.命令_取当前系统 = function (){
		var hardwarePlatform = navigator.platform.toLowerCase();
		return hardwarePlatform;
	}
	
	this.编码_HTML编码 = function (name){
		return htmlEncode(name);
	}
	
	this.编码_HTML解码 = function (name){
		return htmlDecode(name);
	}
	
	this.时间_转时间戳 = function (name){
		var timestamp2 = Date.parse(new Date(name));
		timestamp2 = timestamp2 / 1000;
		return timestamp2;
	}
	
	this.时间_当前时间戳 = function (){
		var timestamp = Date.parse(new Date());
		timestamp = timestamp / 1000;
		return timestamp;
	}
	
	this.时间_时间戳转时间 = function (name){
		return new Date(parseInt(name) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
	}
	
	
	this.时间_取现行时间 = function (){
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		var getHours = date.getHours();
		var getMinutes = date.getMinutes();
		var getSeconds = date.getSeconds();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		if (getHours >= 0 && getHours <= 9) {
			getHours = "0" + getHours;
		}
		if (getMinutes >= 0 && getMinutes <= 9) {
			getMinutes = "0" + getMinutes;
		}
		if (getSeconds >= 0 && getSeconds <= 9) {
			getSeconds = "0" + getSeconds;
		}
		var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + getHours + seperator2 + getMinutes + seperator2 + getSeconds;
		return currentdate;
	}
	
	this.时间_取年份 = function (){
		var date = new Date();
		var year = date.getFullYear();
		return year;
	}
	
	this.时间_取月份 = function (){
		var date = new Date();
		var month = date.getMonth() + 1;
		return month;
	}
	
	this.时间_取日 = function (){
		var date = new Date();
		var strDate = date.getDate();
		return strDate;
	}
	
	this.时间_取小时 = function (){
		var date = new Date();
		var getHours = date.getHours();
		return getHours;
	}
	
	this.时间_取分钟 = function (){
		var date = new Date();
		var getMinutes = date.getMinutes();
		return getMinutes;
	}
	
	this.时间_取秒 = function (){
		var date = new Date();
		var getSeconds = date.getSeconds();
		return getSeconds;
	}
	
	this.时间_取毫秒 = function (){
		var date = new Date();
		var getSeconds = date.getMilliseconds();
		return getSeconds;
	}
	
	this.推送_创建本地消息 = function (msg,LocalMSG,title1){
		var myDate = new Date();
		var options = {
			cover:false,
			title:title1,
			when:myDate.toLocaleTimeString()
		};
		plus.push.createMessage( msg, LocalMSG, options );
	} 
	
	
	this.推送_消息监听 = function (){
		document.addEventListener( "plusready", function(){
			plus.push.addEventListener( "click", function ( msg ) {
				alert( "You clicked: " + msg.content ); 
			}, false ); 
		}, false );
	}
	
	this.推送_清空所有 = function (){
		plus.push.clear();
	}
	
	
	this.组件_阴影效果 = function (zuj,left,top,size,ryan,gyan,byan,tou){
		document.getElementById(zuj).style.boxShadow=left+"px "+ top +"px " + size+"px rgba(" +ryan+", "+gyan+", " + byan+", "+tou+ ")"; 
	}
	
	this.组件_倾斜效果 = function (zuj,size){
		document.getElementById(zuj).style.transform="rotate("+size+"deg)"; 
	}
	
	this.文本_取汉字简拼 = function (zuj){
		return pinyin.getCamelChars(zuj);
	}
	
	this.文本_取汉字全拼 = function (zuj){
		return pinyin.getFullChars(zuj); 
	}
	
	this.命令_四舍五入 = function (zuj){
		return Math.round(zuj); 
	}
	
	this.命令_按首字母排序 = function (zuj){
		var str=zuj;
		str=str.split(",");
		str.sort(function(a,b){
			return a.localeCompare(b);
		})
		return str;
	}
	
	this.文件_zip压缩 = function (wenj,lujin){
		var targetPath = wenj;
		var zipfile = lujin;
		plus.zip.compress(targetPath,zipfile,
		function() {
			alert("压缩成功！");
			},function(error) {
			alert("压缩失败！");
		});
	}
	
			this.文件_zip解压 = function (wenj,lujin){
      		var zipfile = wenj;
			var targetPath = lujin;
			plus.zip.decompress(zipfile, targetPath,
				function() {
					alert("压缩成功！");
				},function(error) {
					alert("压缩失败！");
			});
    	}
		
		this.文件_安装应用 = function (wgtFilePath){
      		plus.runtime.install(wgtFilePath,"","","");
			
    	}
		
		this.文件_重启当前应用 = function (){
			document.addEventListener( "plusready", onPlusReady, false );
			function onPlusReady() {
			}
			plus.runtime.restart();
			
    	}
		
		this.文件_置快捷式数字 = function (uid){
			document.addEventListener( "plusready", onPlusReady, false );
			function onPlusReady() {
			}
			plus.runtime.setBadgeNumber(uid);
    	}
		
		this.命令_接近距离信息 = function (){
			document.addEventListener( "plusready", onPlusReady, false );
			function onPlusReady() {
			}
			plus.proximity.getCurrentProximity( function ( d ) {
					Proximity(d);
			}, function ( e ) {
					Proximity(e.message);
			} );
			
    	}
		
		var Proximity = function(response) {
            if(eventProxi==null){
                return;
            }
            eventProxi(response);
        };
		
		this.命令_设置状态栏背景颜色 = function (yanse){
			function plusReady(){
				plus.navigator.setStatusBarBackground(yanse);
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}

    	}
		
		this.命令_获取状态栏背景颜色 = function (yanse){
			function plusReady(){
					var rgb = plus.navigator.getStatusBarBackground();
					return rgb;
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}

    	}
		
		this.命令_拍照 = function (){
			document.addEventListener( "plusready", onPlusReady, false );
			function onPlusReady() {   
			}
		    var cmr = plus.camera.getCamera();
		    var res = cmr.supportedImageResolutions[0];
		    var fmt = cmr.supportedImageFormats[0];
		    cmr.captureImage( function( path ){
					this.图片地址 = plus.gallery.save(path, function () {console.log( "保存图片到相册成功" );});
					var patha=plus.io.convertLocalFileSystemURL(path);
                    completeb(patha);
		        },
		        function( error ) {
					completeb(error.message);
		        },
		        {resolution:res,format:fmt}
		    );
        } 
        
        this.命令_录像 = function (){
			document.addEventListener( "plusready", onPlusReady, false );
			function onPlusReady() {
			}
			var cmr = plus.camera.getCamera();
			var res = cmr.supportedVideoResolutions[0];
			var fmt = cmr.supportedVideoFormats[0];
			cmr.startVideoCapture( function( path ){
     	       	this.图片地址 = plus.gallery.save(path, function () {console.log( "保存视频到相册成功" );});
			   	var patha=plus.io.convertLocalFileSystemURL(path);
			   	completea(patha);
     		   },
   		     function( error ) {
					completea(error.message);
   		     },
   			     {resolution:res,format:fmt}
		    );
        }
		
		
		var completeb = function(response) {
            if(eventNamea==null){
                return;
            }
            eventNamea(response);
        };
		
		var completeb = function(response) {
            if(eventNameb==null){
                return;
            }
            eventNameb(response);
        };
		
		this.文本_清除中文 = function (title1){
			var title =title1
			var reg=/[\u4E00-\u9FA5]/g;
			var result=title.replace(reg,'');
			return result;
        }
		
		this.文本_清除空格 = function (s1){
			var str=s1;
			var ccc=str.replace(/[ ]/g,"");
			return ccc;
        }
		
		this.文本_清除数字 = function (s2){
			var str=s2;
			var reg = str.replace(/\d+/g,'');
			return reg;
        }
		
		this.文本_清除特殊符号 = function (s){ 
			var s1 = s.replace(/[\（\）\~\!\_\+\-\=\[\]\|\\\/\,\.\·\！\￥\…\……\(\)\@\#\$\%\^\&\*\{\}\:\"\L\<\>\?]/g, '');  
			return s1;
        }
		
		this.文本_清除英文字母 = function (s3){
			var s1 = /[a-zA-Z]/g;  
			var s2 = s3.replace(s1,"");
			return s2;
        }
		
		this.文本_自定义正则 = function (s3,s){
			var s1 = s;  
			var s2 = s3.replace(s1,"");
			return s2;
        }
		
		this.文件_选择单个图片 = function (){
			kuozhang_api();
			plus.gallery.pick( function(path){
				dangepick(path);
			}, function ( e ) {
				dangepick();
			}, {filter:"image"} );	
        }
		
		var dangepick = function(response) {
            if(eventpicka==null){
                return;
            }
            eventpicka(response);
        };
		
		this.文件_选择多个图片 = function (){
			kuozhang_api();
			var wenj="";
			plus.gallery.pick( function(e){
				for(var i in e.files){
					if(wenj){
						wenj=wenj+","+e.files[i];
					}else{
						wenj=e.files[i];
					}
				}
				duogepick(wenj);
			}, function ( e ) {
				duogepick();
			},{filter:"image",multiple:true});
        }
		
		var duogepick = function(response) {
            if(eventpickb==null){
                return;
            }
            eventpickb(response);
        };
		
		
		this.文件_保存图片或视频 = function (wenj){
			kuozhang_api();
			var r = null;
			plus.gallery.save( wenj, function () {
				alert( "保存文件到相册成功" );
			}, function () {
				alert( "保存文件失败" );
			});
        }
		
		this.文件_新建下载任务 = function (wenj){
			kuozhang_api();
			var r = null;
			var dtask = plus.downloader.createDownload( wenj, {}, function ( d, status ) {
				//d.filename
				onCompleted(dtask,status);
			});
			dtask.start();
        }
		
		var onCompleted = function(dtask,status) {
            if(eventDownload==null){
                return;
            }
            eventDownload(dtask,status);
        };
		
		this.命令_获取IMEI = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.device.imei;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取IMSI = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.device.imsi;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取设备型号 = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.device.model;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取生产厂商 = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.device.vendor;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取UUID = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.device.uuid;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_蜂鸣声 = function (times){
			function plusReady(){
			}
			if(window.plus){
				plus.device.beep(times);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_设备振动 = function (milliseconds){
			function plusReady(){
			}
			if(window.plus){
				plus.device.vibrate(milliseconds);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_保持唤醒 = function (lock){
			function plusReady(){
			}
			if(window.plus){
				plus.device.setWakelock( lock );
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_系统音量 = function (volume){
			function plusReady(){
			}
			if(window.plus){
				plus.device.setVolume(volume);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取系统音量 = function (){
			function plusReady(){
			}
			if(window.plus){
				 return plus.device.getVolume();
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取屏幕高度 = function (){
			function plusReady(){
			}
			if(window.plus){
				 return plus.screen.resolutionHeight*plus.screen.scale;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取屏幕宽度 = function (){
			function plusReady(){
			}
			if(window.plus){
				 return plus.screen.resolutionWidtht*plus.screen.scale;
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_设置屏幕亮度 = function (brightness){
			function plusReady(){
			}
			if(window.plus){
				 plus.screen.setBrightness(brightness);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取屏幕亮度 = function (){
			function plusReady(){
			}
			if(window.plus){
				return plus.screen.getBrightness();
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_锁定屏幕方向 = function (orientation){
			function plusReady(){
			}
			if(window.plus){
				plus.screen.lockOrientation(orientation);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_解除屏幕方向 = function (){
			function plusReady(){
			}
			if(window.plus){
				plus.screen.unlockOrientation();
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.文本_只取数字 = function (txt){
			var value = txt.replace(/[^0-9]/ig,""); 
			return value;
		}
		
		this.文本_只取汉字 = function (txt) {
			return txt.replace(/[^\u4e00-\u9fa5]/gi,""); 
		}
		
		this.文本_只取字母 = function (txt) {
			return txt.replace(/[^\A-Za-z]/gi,""); 
		}
		
		this.文本_生成随机汉字 = function (int1) {
		var str2 = "";
		var all = 0;
		while (all < int1){
		all = all + 1;
		eval("var str=" + '"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16) + '"')
		str2 = str2 + str;
		}
		return str2;
		}
		
		this.文本_是否有空格 = function (str){
		if(""==str){
		return false;
		}
		var badChar =" ";
		badChar += "　";
		for(var i=0;i<str.length;i++){
		var c = str.charAt(i);
		if(badChar.indexOf(c) > -1){
		return "真";
		}
		}
		return "假";
		}
		
		this.编码_UTF8到GBK = function (password){
		var xx=new Utf8ToGb2312();
		var password=xx.Utf8ToGb2312(password);
    		return password;
        }
		
		this.编码_GBK到UTF8 = function (password){
		var xx=new GB2312UTF8();
		var password=xx.Gb2312ToUtf8(password);
    		return password;
        }
		
		this.文本_取随机字符串 = function (randomFlag, min, max){
    		var str = "";
        	range = min;
        	arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    		if(randomFlag){
     		   range = Math.round(Math.random() * (max-min)) + min;
   			 }
   			for(var i=0; i<range; i++){
   				pos = Math.round(Math.random() * (arr.length-1));
        		str += arr[pos];
 			 }
    		return str;
			}
		
		this.文本_取随机姓名 = function (){
        var familyNames = new Array(
                "赵",    "钱",    "孙",    "李",    "周",    "吴",    "郑",    "王",    "冯",    "陈",    
                "褚",    "卫",    "蒋",    "沈",    "韩",    "杨",    "朱",    "秦",    "尤",    "许",
                "何",    "吕",    "施",    "张",    "孔",    "曹",    "严",    "华",    "金",    "魏",    
                "陶",    "姜",    "戚",    "谢",    "邹",    "喻",    "柏",    "水",    "窦",    "章",
                "云",    "苏",    "潘",    "葛",    "奚",    "范",    "彭",    "郎",    "鲁",    "韦",    
                "昌",    "马",    "苗",    "凤",    "花",    "方",    "俞",    "任",    "袁",    "柳",
                "酆",    "鲍",    "史",    "唐",    "费",    "廉",    "岑",    "薛",    "雷",    "贺",    
                "倪",    "汤",    "滕",    "殷",    "罗",    "毕",    "郝",    "邬",    "安",    "常",
                "乐",    "于",    "时",    "傅",    "皮",    "卞",    "齐",    "康",    "伍",    "余",    
                "元",    "卜",    "顾",    "孟",    "平",    "黄",    "和",    "穆",    "萧",    "尹"
                );
        var givenNames =  new Array(
                "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
                "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
                "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
                "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
                "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
                "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
                "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
                "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
                "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
                "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌", 
				"坤", "昆", "莹", "晴", "强", "方", "河"
                );
        
        var i = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
        var familyName = familyNames[i];
        
        var j = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
        var givenName = givenNames[i];
        
        var name = familyName + givenName;
        var x = document.getElementsByName("client_name");
        for (var i = 0; i < x.length; i++) {
            var o = x[i];
            o.value = name;
        }
		return name;
        }
		
		this.文本_取随机手机号 = function (){
        var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
        var i = parseInt(10 * Math.random());
        var prefix = prefixArray[i];

        for (var j = 0; j < 8; j++) {
            prefix = prefix + Math.floor(Math.random() * 10);
        }

        var x = document.getElementsByName("mobile_tel");
        for (var i = 0; i < x.length; i++) {
            var o = x[i];
            o.value = prefix;
        }
		return prefix;
		}
		
		this.文本_取随机身份证号 = function (address1,birthday1){
        	var coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// 加权因子
        	var lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// 校验码
        	var address = address1; // 住址
        	var birthday = birthday1; // 生日
        	var s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
        	var array = (address + birthday + s).split("");   
        	var total = 0;
        	for(i in array){
            	total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
       			}       
        	var lastNumber = lastNumberArray[parseInt(total%11)];
        	var id_no_String = address + birthday + s + lastNumber;
       
         	var x = document.getElementsByName("id_no");
         	for (var i = 0; i < x.length; i++) {
            	var o = x[i];
            	o.value = id_no_String;
        		}
			return id_no_String;
		}
		
		this.命令_监听接近距离 = function (){
			kuozhang_api();
			var uid = plus.proximity.watchProximity( function ( d ) {
				jtProximity(uid,d);
			}, function ( e ) {
				jtProximity(uid,e.message);
			} ); 
			
        }
		
		var jtProximity = function(dtask,status) {
            if(eventjtjuk==null){
                return;
            }
            eventjtjuk(dtask,status);
        };
		
		this.命令_关闭监听距离 = function (watchId){
			kuozhang_api();
			plus.proximity.clearWatch(watchId);
        }
		
		this.命令_是否保持唤醒 = function (){
			kuozhang_api();
			return plus.device.isWakelock();
        }
		
		this.命令_取加速度信息 = function (){
			document.addEventListener( "plusready", function(){
				plus.accelerometer.getCurrentAcceleration( function( a ) {
					qjsxAxis(a.xAxis,a.yAxis,a.zAxis);
				} );
			}, false );	
        }
		
		var qjsxAxis = function(dtask,status,statusa) {
            if(eventAxis==null){
                return;
            }
            eventAxis(dtask,status,statusa);
        };
		
		this.命令_监听加速信息 = function (time){
			document.addEventListener( "plusready", function(){
				var Number = plus.accelerometer.watchAcceleration( function ( a ) {
					jtjsxAxis(Number,a.xAxis,a.yAxis,a.zAxis);
				}, function ( e ) {
					jtjsxAxis(Number,e.message);
				}, {frequency:time} );
			}, false );	
        }
		
		var jtjsxAxis = function(dtask,status,statusa) {
            if(eventAxisjt==null){
                return;
            }
            eventAxisjt(dtask,status,statusa);
        };
		
		this.命令_关闭监听加速 = function (wid){
			kuozhang_api()
			plus.accelerometer.clearWatch(wid);
        }
		
		this.组件_icon图标 = function (namede,ico){
			document.getElementById(namede).innerHTML='<span class="mui-icon mui-icon-'+ico+'"></span>';
        }
		
		this.组件_字体图标 = function (namede,ico){
			document.getElementById(namede).innerHTML='<span class="mui-icon-extra mui-icon-extra-'+ico+'"></span>';
        }
	
		this.数组_数组去重 = function (arr){
			var result = [], hash = {};
			for (var i = 0, elem; (elem = arr[i]) != null; i++) {
				if (!hash[elem]) {
					result.push(elem);
					hash[elem] = true;
				}
			}
			return result;
        }
		
		this.命令_刷新当前页面 = function (){
			window.location.reload();
        }
		
		this.命令_返回上页 = function (){
			window.history.go(-1);
        }
		
		this.命令_置剪切板 = function (namedede){
			if(mui.os.plus){
				if (plus.os.name == "Android") {//安卓系统
					var Context = plus.android.importClass("android.content.Context");
					var main = plus.android.runtimeMainActivity();
					var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
					plus.android.invoke(clip,"setText",neirong);
				}else{//苹果系统
					var UIPasteboard  = plus.ios.importClass("UIPasteboard");
					var generalPasteboard = UIPasteboard.generalPasteboard();
					generalPasteboard.plusCallMethod({setValue:neirong, forPasteboardType:"public.utf8-plain-text"});
				}			
			}else{//浏览器
    			var clipboard = new Clipboard(".mui-content", {
        			text: function() {
            			return neirong;
        			}
    			});				
			}
        }
		
		this.命令_取剪贴板 = function (){
			if(!mui.os.plus){//浏览器
				console.log("取剪贴板内容命令只能在手机APP中使用");
				return "";
			}
			if (plus.os.name == "Android") {//安卓系统
				var Context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
				return plus.android.invoke(clip,"getText");
			}else{//苹果系统
				var UIPasteboard  = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				var clip = generalPasteboard.plusCallMethod({valueForPasteboardType:"public.utf8-plain-text"});
				return clip;
			} 
        }
		
		
		this.命令_是否全屏显示 = function (fullscreen){
			function plusReady(){
			}
			if(window.plus){
				plus.navigator.setFullscreen(fullscreen);
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
        }
		
		this.命令_获取MAC地址 = function (){
			var mac = "xxx-xxx-xxx-xxx";
			if (plus.os.name == "Android") {
				var Context = plus.android.importClass("android.content.Context");
				var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
				var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
				var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");
				var wifiInfo = wifiManager.getConnectionInfo();
				mac = wifiInfo.getMacAddress();
			}
			return mac;
        }
		
		this.命令_获取内存信息 = function (){
			var memoryInfo = '';
			if (plus.os.name == "Android") {
				var Context = plus.android.importClass("android.content.Context");
				var ActivityManager = plus.android.importClass("android.app.ActivityManager");
				var mi = new ActivityManager.MemoryInfo();
				var activityService = plus.android.runtimeMainActivity().getSystemService(Context.ACTIVITY_SERVICE);
				activityService.getMemoryInfo(mi);
				memoryInfo = mi.plusGetAttribute("availMem");
			}
			return memoryInfo;
        }
		
		this.命令_获取内部总存储大小 = function (){
			var internalMemSize = 0;
			if (plus.os.name == "Android") {
				var environment = plus.android.importClass("android.os.Environment");
				var statFs = plus.android.importClass("android.os.StatFs");
        		var files = plus.android.importClass("java.io.File");
        		var Files = environment.getDataDirectory();
        		var StatFs = new statFs(Files.getPath());
        		var blockSize = parseFloat(StatFs.getBlockSize());
        		var blockCount = parseFloat(StatFs.getBlockCount());
        		internalMemSize = blockSize * blockCount;
			}
			return internalMemSize;
        }
		
		this.命令_获取总内存 = function (){
			var memInfo = '/proc/meminfo';
    		var temp = '',
        		ramSize = '',
        		arrays, initMemory;
    		var fileReader = plus.android.importClass("java.io.FileReader");
    		var bufferedReader = plus.android.importClass("java.io.BufferedReader");
    		var FileReader = new fileReader(memInfo);
    		var BufferedReader = new bufferedReader(FileReader, 8192);
    		while ((temp = BufferedReader.readLine()) != null) {
        		if (-1 != temp.indexOf('MemTotal:')) {
            		var value = temp.replace(/[^0-9]/ig, "");
            		ramSize = Math.floor(parseInt(value) / (1024));
        		}
    		}
			return ramSize;
        }
		
		this.命令_获取CPU信息 = function (){
			var cpuInfo = '/proc/cpuinfo';
    		var temp = '',
        		cpuHardware;
    		var fileReader = plus.android.importClass("java.io.FileReader");
    		var bufferedReader = plus.android.importClass("java.io.BufferedReader");
    		var FileReader = new fileReader(cpuInfo);
    		var BufferedReader = new bufferedReader(FileReader, 8192);
    		while ((temp = BufferedReader.readLine()) != null) {
        		if (-1 != temp.indexOf('Hardware')) {
            		cpuHardware = temp.substr(parseInt(temp.indexOf(":")) + 1);
        		}
    		}
    		return cpuHardware;
        }
		
		this.命令_获取CPU核数 = function (){
			var Runtime = plus.android.importClass("java.lang.Runtime");
			var cpuCount = Runtime.getRuntime().availableProcessors();
			return cpuCount;
        }
		
		this.编码_unicode转中文 = function (str){
			var stra = eval("'" + str + "'");
			return stra;
        }
		
		 this.网络_本地网络IP = function () {
			var uir = returnCitySN["cip"] ;
			return uir;
		}
        
        this.网络_本地网络地理 = function () {
			var uir = returnCitySN["cname"] ;
			return uir;
		}
		
        this.网络_本地网络邮编 = function (){
			var uir = returnCitySN["cid"] ;
			return uir;
        } 
        
        this.网络_取本地初始化 = function (){
			var JS = document.createElement("script");
    		JS.src = "http://pv.sohu.com/cityjson?ie=utf-8";
    		JS.type = "text/javascript";
			document.getElementsByTagName("head").item(0).appendChild(JS);
        }
		
		this.文本_数字千位符 = function (num){
			var num = (num || 0).toString(), result = '';
    		while (num.length > 3) {
    			result = ',' + num.slice(-3) + result;
				num = num.slice(0, num.length - 3);
			}
			if (num) { result = num + result; }
			return result;
        }
		
		this.命令_弹出系统日期选择框 = function (){
			function plusReady(){
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
			plus.nativeUI.pickDate( function(e){
				var d=e.date;
				jtpickDate(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate());
			},function(e){
				jtpickDate(e.message);
			});
        }
		
		var jtpickDate = function(dtask) {
            if(eventpickDate==null){
                return;
            }
            eventpickDate(dtask);
        };
		
		this.命令_弹出系统时间选择框 = function (){
			function plusReady(){
			}
			if(window.plus){
				plusReady();
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
			plus.nativeUI.pickTime( function(e){
				var d=e.date;
				jtpickTime(d.getHours()+":"+d.getMinutes());
			},function(e){
				jtpickTime(e.message);
			});
        }
		
		var jtpickTime = function(dtask) {
            if(eventpickTime==null){
                return;
            }
            eventpickTime(dtask);
        };
		
		this.命令_调用系统分享 = function (shareTip,shareText){
			var Context = plus.android.importClass("android.content.Intent");
			var Main = plus.android.runtimeMainActivity();
			var shareIntent=new Context(Context.ACTION_SEND);
			shareIntent.setType("text/plain"); 
			shareIntent.putExtra(Context.EXTRA_TEXT, shareText);
			Main.startActivity(Context.createChooser(shareIntent,shareTip));
        }
		
		this.命令_截屏 = function (){
			var wc=null,bitmap=null;
			function plusReady(){
			}
			if(window.plus){
				plusReady();
				wc = plus.webview.currentWebview();
				bitmap = new plus.nativeObj.Bitmap("test");
				wc.draw(bitmap,function(){
				},function(e){
				},{check:true,	
					clip:{top:"0px",left:"0px",width:"100%",height:"100%"}
				});
			}else{
				document.addEventListener("plusready",plusReady,false);
			}
			var date = seveimg();
			var savemap = "_doc/"+date+".jpg";
			bitmap.save( savemap
			,{}
			,function(i){
				jtpickBitmap(i.target);
			}
			,function(e){
				jtpickBitmap(e.message);
			});
        }
		
		var jtpickBitmap = function(dtask) {
            if(eventpickBitmap==null){
                return;
            }
            eventpickBitmap(dtask);
        };
		
		this.命令_调用第三方导航 = function (dstx,dsty,srcx,srcy,maos){
			var dst = new plus.maps.Point(dstx,dsty); 
			var src = new plus.maps.Point(srcx,srcy);
			plus.maps.openSysMap(dst,maos,src);

        }
		
		this.命令_GPS初始化 = function (key){
			var JS = document.createElement("script");
    		JS.src = "http://webapi.amap.com/maps?v=1.3&key="+key;
    		JS.type = "text/javascript";
			document.getElementsByTagName("head").item(0).appendChild(JS);
			var JSd = document.createElement("script");
    		JSd.src = "http://cache.amap.com/lbs/static/addToolbar.js";
    		JSd.type = "text/javascript";
			document.getElementsByTagName("head").item(0).appendChild(JSd);
        }
		
		this.命令_获取当前经纬度 = function (){
			    var map, geolocation;
    			map = new AMap.Map('', {
        			resizeEnable: true
    			});
    			map.plugin('AMap.Geolocation', function() {
        			geolocation = new AMap.Geolocation({
            			enableHighAccuracy: true,
            			timeout: 10000,
            			buttonOffset: new AMap.Pixel(10, 20),
            			zoomToAccuracy: true,  
           				buttonPosition:'RB'
        			});
        			map.addControl(geolocation);
        			geolocation.getCurrentPosition();
        			AMap.event.addListener(geolocation, 'complete', onComplete);
    			});
    			function onComplete(data) {
        			var str=[];
       				var stra=[];
       				str.push(data.position.getLng());
       				stra.push(data.position.getLat());
					jtAccuracy(str,stra);
   				}
        }
		
		var jtAccuracy = function(dtask,dtaska) {
            if(eventAccuracy==null){
                return;
            }
            eventAccuracy(dtask,dtaska);
        };
		
		this.短信_初始化 = function (账号,密码){
			this.账号1 = 账号;
			this.密码1 = 密码;
		}

		this.短信_发送短信 = function (手机号码,短信内容){
            this.服务端返回数据类型 = "txt";
            var urld = "http://106.ihuyi.com/webservice/sms.php?method=Submit&account="+this.账号1+"&password="+this.密码1+"&mobile="+手机号码+"&content="+短信内容+""
            mui.ajax(urld, {
                crossDomain:this.跨域,
                type: 'get',                        
                headers:this.请求头,
                dataType: 'txt',
                data: '',
                timeout: 10000,
                success: function(response) {
                    dxyz_fsdx(true,response);
                },
                  error: function(xhr,type,errorThrown) {
                        dxyz_fsdx(false,type);
                  }
               });
                    
        }
		
		var dxyz_fsdx = function(result,response) {
            if(eventdxyzfsdx==null){
                return;
            }
            if(result==true){
                if (this.服务端返回数据类型 === "json") {
                    response = JSON.stringify(response);
                } else if (this.服务端返回数据类型 === "xml") {
                    response = new XMLSerializer().serializeToString(response);
                }
            }
            eventdxyzfsdx(result,response);
        };
		
		this.短信_查询条数 = function (){
			this.服务端返回数据类型 = "txt";
			var urld = "http://106.ihuyi.com/webservice/sms.php?method=GetNum&account=" + this.账号1 + "&password=" + this.密码1 + ""
            mui.ajax(urld, {
                crossDomain:this.跨域,
                type: 'get',                        
                headers:this.请求头,
                dataType: 'txt',
                data: '',
                timeout: 5000,
                success: function(response) {
                    dxyz_fsdxa(true,response);
                },
                  error: function(xhr,type,errorThrown) {
                        dxyz_fsdxa(false,type);
                  }
               });
		}
		
		var dxyz_fsdxa = function(result,response) {
            if(eventdxyzfsdxa==null){
                return;
            }
            if(result==true){
                if (this.服务端返回数据类型 === "json") {
                    response = JSON.stringify(response);
                } else if (this.服务端返回数据类型 === "xml") {
                    response = new XMLSerializer().serializeToString(response);
                }
            }
            eventdxyzfsdxa(result,response);
        };
		
		this.组件_获取焦点 = function (jdzj){
			document.getElementById(jdzj).focus();
        }
		
		
		this.编码_摩斯密码加密 = function (jdzj){
			return xmorse.encode(jdzj,'');
        }
		
		this.编码_摩斯密码解密 = function (jdzj){
			return xmorse.decode(jdzj,'');
        }
		
		this.输出_初始化 = function (){
			var JS = document.createElement("script");
    		JS.src = "http://lanniao.e4os.com/zaitool/screenlog.min.js";
    		JS.type = "text/javascript";
			document.getElementsByTagName("head").item(0).appendChild(JS);
			setTimeout(shuchude, 1000);
        }
		
		this.输出_信息 = function (namead,nameadb){
			screenLog.log(namead,nameadb);
        }
		
		

    }
	/*名字：仔仔类库 QQ群：492462862*/
	function kuozhang_api() {
		document.addEventListener( "plusready", onPlusReady, false );
		function onPlusReady() {
		}
	}
	/*名字：仔仔类库 QQ群：492462862*/
	function seveimg(){
		var date = new Date();
	    	var seperator1 = "_";
	    	var seperator2 = "_";
	    	var month = date.getMonth() + 1;
	    	var strDate = date.getDate();
	    	var getHours = date.getHours();
			var getMinutes = date.getMinutes();
			var getSeconds = date.getSeconds();
			if (month >= 1 && month <= 9) {
	        	month = "0" + month;
	    	}
	    	if (strDate >= 0 && strDate <= 9) {
	        	strDate = "0" + strDate;
	    	}
	    	if (getHours >= 0 && getHours <= 9) {
	        	getHours = "0" + getHours;
	    	}
	    	if (getMinutes >= 0 && getMinutes <= 9) {
	        	getMinutes = "0" + getMinutes;
	    	}
	    	if (getSeconds >= 0 && getSeconds <= 9) {
	        	getSeconds = "0" + getSeconds;
	    	}
	    	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + "_" + getHours + seperator2 + getMinutes + seperator2 + getSeconds;
	    return currentdate;
	}
	
	function shuchude(){
		screenLog.init();
		screenLog.log('仔仔类库控制台信息：');
	}