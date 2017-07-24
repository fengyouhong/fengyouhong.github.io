function submitInput(){
	var userValue = $("#username").val();
	var passwordValue = $("#password").val();
	var codevalue = $("#code").val();
	//做一个判断，如果用户名和密码其中一个是"",那么就返回false，阻止表单提交
	
	if(userValue == "" ){
			$(".usertip").css("display","block");	
			return false;
		}
		if(passwordValue == "" ){
			$(".passtip").css("display","block");	
			return false;
		}
		if(codevalue == "" ){
			$(".codetip").css("display","block");	
			return false;
		}
	
	if(userValue == "" || passwordValue == ""){
		return false;
	}
	//通过key获取本地里面的用户信息的数据
	var userInfos = getUserLoginInfo("userInfos");
	
	//判断本地的用户信息数据是否为空，如果为空，则提示用户这个用户名未注册
	if(!userInfos){
		$("#user_error").css("display","block");
		//返回false，阻止跳转
		return false;
	}else{
		//如果本地用户信息的数据不为空
		//将数据转换成JSON格式的数据
		var userData = JSON.parse(userInfos);
		var bool = true;
		//对本地数据做一个循环，匹配本地数据是否有与当前用户输入的用户名
		for(var i=0;i<userData.length;i++){
			//如果有匹配到用户
			
				$("#pass_error").css("display","none");
			if(userData[i].userName == userValue){
				//还需要用户名与密码一致
				$("#user_error").css("display","none");
				if(userData[i].password == passwordValue){
					bool = false;
					return true;
					break;
				}else{
					//如果密码不一致，提示密码不正确
					$("#pass_error").css("display","block")
					bool = false;
					//返回false，阻止跳转
					return false;
					break;
				}
				$("#pass_error").css("display","none")
			}
		}
		//如果不能与本地数据匹配，证明用户输入的用户名未注册
		if(bool){
			$("#user_error").css("display","block");
			return false;
		}
	}
	
	
	
	
}
//设置本地存储(webStorage)
function setStorage(user,password){
	var userLoginInfo = {
		user:user,
		password:password,
	}
}
//			获取本地存储(webStorage)
function getStorage(){
	var data = localStorage.getItem("userLoginInfo");
	if(data){
		var storageData = JSON.parse(data);
		document.getElementById("user").value = storageData.user;
		document.getElementById("password").value = storageData.password;
	}
}
var testuser = function(value){
	if(value === ""){
		$(".usertip").css("display","block");
	}else{
		$(".usertip").css("display","none");
	}
}
var testPassword = function(value){
	var reg = /^[a-z0-9_-]{6,18}$/;
	if(!reg.test(value)){
		$(".passtip").css("display","block");
	}else{
		$(".passtip").css("display","none");
	}
}

var codevalue = function(value){
	if(value == ""){
		$(".codetip").css("display","block");	
	}else if(value != ""){
		$(".codetip").css("display","none");
	}
	var codevalue = $("#code").val();
	if(codevalue.toLowerCase() != "v9am" && codevalue.toLowerCase() != "uwv6" && codevalue.toLowerCase() != "jgmkj"){
		$(".codetip").css("display","block");	
	}else{
		$(".codetip").css("display","none");
	}
}
function getUserLoginInfo(userKey){
	return localStorage.getItem(userKey);
}
$(function(){
	//切换验证码
	function changecode(){
		index = 1;
		$("#middle .form form .codeimg").click(function(){
			index+=1;
			$(this).attr("src","images/register_code_0"+index+".jpg");
			
			if(index == 3){
				index =0;
			}
		})
	}
	changecode();
})
