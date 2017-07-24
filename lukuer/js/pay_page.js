$(document).ready(function(){
	//		选项卡操作
	$("#middle .pay_center .pay_ment .page li").click(function () {
		 index = $(this).index();
		$("#middle .pay_center .pay_ment ul li").eq(index).addClass("on").siblings().removeClass('on');
		$("#middle .pay_center .pay_ment div").eq(index).addClass("ative").siblings().removeClass('ative');
	})
	
	//		选项卡操作 end
	$("#middle .pay_center .pay_ment ul.list li").click(function(){
		index = $(this).index();
		$("#middle .pay_center .pay_ment ul.list li").eq(index).addClass("on").siblings().removeClass("on");
	})
	$("#middle .pay_center .pay_ment ul.2 li").click(function(){
		index = $(this).index();
		$("#middle .pay_center .pay_ment ul.2 li").eq(index).addClass("on").siblings().removeClass("on");
	})
	$("#middle .pay_center .pay_ment ul.3 li").click(function(){
		index = $(this).index();
		$("#middle .pay_center .pay_ment ul.3 li").eq(index).addClass("on").siblings().removeClass("on");
	})
})
	
//获取价格
var keyName = "1";
function getCar(){
	return localStorage.getItem(keyName);
}

var totalchcek = 0;
function gettotal(){
	var carData = JSON.parse(getCar());
	if (!carData){
		return false;
	} {
		
	}
	for (var i=0;i<carData.length;i++) {
		totalchcek += parseInt(carData[i].totalPrice);
	}
	$(".right h3 p span").text(totalchcek.toFixed(2)+"元");
}

//单选框
$(function(){
	$("#middle .pay_center .bala img").click(function(){
		if($(this).prev().val() == "0"){
			$(this).attr("src","images/radiu_check.png");
			$(this).prev().val("1");
		}else {
			$(this).attr("src","images/radiu.png");
			$(this).prev().val("0")
		}
	})
	$("#middle .pay_center .bala b").click(function(){
		if($(this).prev().prev().val() == "0"){
			$(this).prev().attr("src","images/radiu_check.png");
			$(this).prev().prev().val("1");
		}else {
			$(this).prev().attr("src","images/radiu.png");
			$(this).prev().prev().val("0")
		}
	})
//单选框 end
})
//点击支付
function pay(){
	bala = parseInt($(".bala span").text());
	totalchcek = parseInt($(".right h3 span").text());
	
	if(bala < totalchcek){
		window.location.href="pay_failure.html";
	}else{
		window.location.href="pay_sucess.html";
		
	}
}



