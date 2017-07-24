
function submitForm(){
	
	var userValue = $("#username").val();
	var passValue = $("#password").val();
	var conpassValue = $("#conpassword").val();
	var emailValue = $("#email").val();
	var codevalue = $("#code").val();
	
	if($(".usertip").css("display") == "block" || $(".passtip").css("display") == "block" 
		|| $(".conpasstip").css("display") == "block" || $(".emailtip").css("display") == "block" || $(".codetip").css("display") == "block"){
		return false;
	}
	
	
	if(userValue == "" ){
		$(".usertip").css("display","block");	
		return false;
	}
	if(passValue == "" ){
		$(".passtip").css("display","block");	
		return false;
	}
	if(conpassValue == "" ){
		$(".conpasstip").css("display","block");	
		return false;
	}
	if(emailValue == "" ){
		$(".emailtip").css("display","block");	
		return false;
	}
	if(codevalue == "" ){
		$(".codetip").css("display","block");	
		return false;
	}
	var userInfo = {
					userName:userValue,
					password:passValue
				}
				//setUserInfoStorage(userInfo)
				
				//通过key获取本地里面的用户信息的数据
				var userData = getUserData("userInfos");
				//判断本地数据是否为空
				if(!userData){
					//如果为空，则创建一个JSON数据，然后存储到本地里面
					var userInfos = [
						userInfo
					];
					localStorage.setItem("userInfos",JSON.stringify(userInfos))
				}else{
					//如果本地数据不为空
					//将数据转换成JSON格式的数据
					var data = JSON.parse(userData);
					var bool = true;
					//对本地数据遍历，判断用户输入的用户名是否有与本地的用户信息匹配
					for(var i=0;i<data.length;i++){
						//如果匹配到了，代表这个用户名已被注册
						if(data[i].userName == userInfo.userName){
							alert("该用户已被注册！");
							bool = false;
							return false;
							break;
						}
					}
					//如果匹配不到，代表该用户名可以注册，将该信息存储到本地里面
					if(bool){
						data.push(userInfo);
						localStorage.setItem("userInfos",JSON.stringify(data))
					}
				}		
	
	
}

function getUserData(userKey){
				return localStorage.getItem(userKey)
			}
//用户名判断框
function user(value){
	if(value == ""){
		$(".usertip").css("display","block");	
	}else if(value != ""){
		$(".usertip").css("display","none");
	}
	
}
//密码判断框
function pass(value){
	
	var reg = /^[a-z0-9_-]{6,18}$/;
	if(!reg.test(value)){
		$(".passtip").css("display","block");
	}else{
		$(".passtip").css("display","none");
	}
}
//确认密码判断框
function conpass(value){
	var pass = $("#password").val();
	if(value != pass){
		$(".conpasstip").css("display","block");
	}else{
		$(".conpasstip").css("display","none");
	}
}
//邮箱判断框
function emailvalue(value){
	var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.(com|cn|net))+$/g;
	if(!reg.test(value)){
		$(".emailtip").css("display","block");
	}else{
		$(".emailtip").css("display","none");
	}
}
//验证码判断框
function codevalue(value){
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
