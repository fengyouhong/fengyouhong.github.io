$(function(){
	function Tip(thats,test_tip){
//		参数thats:要检验的input元素
//		参数test_tip:检验的正则
		thats.blur(function(){
				value =thats.val();
				if(test_tip.test(value)){
				 	 thats.parent().find('.alert-danger').addClass('hidden')
				}else{
				 	thats.parent().find('.alert-danger').removeClass('hidden')
				}
				test_tip.test(value);
			})
		
	}
//	Tip(thats,test_tip)
//	参数thats:要检验的input元素
//	参数test_tip:检验的正则



	//  用户名校验
	//用户名正则，4到16位（字母，数字，下划线，减号）
	user_input = $('#username');
	user_test =  /^[a-zA-Z0-9_-]{4,16}$/;
	Tip(user_input,user_test);
	
	
	//  邮箱
	Email_input = $('#E-mails');
	Email_test =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	Tip(Email_input,Email_test)
	
	//  手机
	phone_input = $('#Phone');
	phone_test =   /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	Tip(phone_input,phone_test)
	
	
	//	组织机构代码
	Organization_input = $('#Organization_code');
	Organization_test =  /^([1-9]{1})(\d{14}|\d{18})$/;
	Tip(Organization_input,Organization_test)
	
	//	金额
	$('#Of_money').blur(function(){
		user_test =  /^\d*\.?\d+$/;
		if(Tip($(this),user_test)){
			$(this).parent().parent().find('.alert-danger').addClass('hidden')
		}else{
			$(this).parent().parent().find('.alert-danger').removeClass('hidden')
		}
	})
	
	
	//	银行账号
	Bank_input = $('#Bank_account');
	Bank_test =  /^([1-9]{1})(\d{14}|\d{18})$/;
	Tip(Bank_input,Bank_test)
	
	
//	中文姓名
	Contacts_name_input = $('#Contacts_name');
	Contacts_name_test = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
	Tip(Contacts_name_input,Contacts_name_test)
	
	
	//	联系人电话
	Contacts_tele_input = $('#Contacts_Telephone');
	//	电话验证（如：010-85369999、186199999）
	Contacts_tele_test =   /^(0\d{2,3}[-| ]?)?(\d{7,8})([-| ]?\d{3,5})?$/;
	Tip(Contacts_tele_input,Contacts_tele_input)


	//	联系人手机
	Contacts_Phone_input = $('#Contacts_Phone')
	Contacts_Phone_test = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	Tip(Contacts_Phone_input,Contacts_Phone_test)
		
		
	//	联系人邮箱
	Contacts_Email_input = $('#Contacts_Email');
	Contacts_Email_test = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	Tip(Contacts_Email_input,Contacts_Email_test)
	
	
	
	 $('.sub_info').click(function(){
	 	$('#username').blur();
	 	$('#E-mails').blur();
	 	$('#Phone').blur();
	 	$('#Organization_code').blur();
	 	$('#Of_money').blur();
	 	$('#Bank_account').blur();
	 	$('#Contacts_name').blur();
	 	$('#Contacts_Telephone').blur();
	 	$('#Contacts_Phone').blur();
	 	$('#Contacts_Email').blur();
	 	al = $('form').find('.alert-danger');
	 	var bool = true;
	 	for (var i=0;i++;i<al.length) {
	 		if(al[i].css('display') == 'block'){
	 			bool = false;
	 			return false;
	 		}
	 	}
	 	console.log(123)
	 })
})