$(document).ready(function(){
	//	导航侧拉

			var bool = null;
			$("#header .header_botton .side-bar .glyphicon-menu-down").click(function(){
				bool=$("#header .header_botton .side-bar .glyphicon-menu-down").css("display");
				if(bool=="block"){
					$("#header .header_botton .side-bar .glyphicon-menu-down").css("display","none");
					$("#header .header_botton .side-bar ul.user_center").css("display","block");
				}
			})
			
			$("#header .header_botton .side-bar .user_center .glyphicon-menu-up").click(function(){
				bool=$("#header .header_botton .side-bar .glyphicon-menu-down").css("display");
				if(bool=="none"){
					$("#header .header_botton .side-bar .glyphicon-menu-down").css("display","block");
					$("#header .header_botton .side-bar ul.user_center").css("display","none");
				}
			});
//	导航侧拉 end


//	pro_list复选框
	$(".address ul li").click(function(){
		if($(this).children("input").val() == 0){
			$(this).children("img").attr("src","images/checkbox_1.png");
			$(this).children("input").val(1);
		}else{
			$(this).children("img").attr("src","images/checkbox_0.png");
			$(this).children("input").val(0);
		}
	})
//	pro_list复选框 end


//	confirm_order复选框
	$("#middle .billing .billling_details .right p img").click(function(){
		if($(this).prev().val() == 0){
			$(this).attr("src","images/checkbox_1.png");
			$(this).prev().val(1);
		}else{
			$(this).attr("src","images/checkbox_0.png");
			$(this).prev().val(0);
		}
	})
	$("#middle .billing .billling_details .right p span").click(function(){
		if($(this).prev().prev().val() == 0){
			$(this).prev().attr("src","images/checkbox_1.png");
			$(this).prev().prev().val(1);
		}else{
			$(this).prev().attr("src","images/checkbox_0.png");
			$(this).prev().prev().val(0);
		}
	})
//	confirm_order复选框 end

//收货地址左侧栏高度动态调整
		 $(document).ready(function(){
		 	Dheight = $("#middle .address_right").outerHeight();
			$("#middle .container .left_list").css("height",Dheight);
		 })
		 
		 
		 
//		订单详情左侧栏高度动态调整
		 $(document).ready(function(){
		 	Dheight = $("#middle .container").outerHeight();
			$("#middle .container .left_list").css("height",Dheight);
		 })
})

function pro_num(){
	var car_num1 = $(".shop_cart a span");
	var car_num2 = $(".side-bar ul li.badge");
	
	var pro = localStorage.getItem("shop_car");
//	
	if(pro != null){
		var pro_num = JSON.parse(pro).length;
	}else{
		pro_num = 0;
	}
	car_num1.text(pro_num);
	car_num2.text(pro_num);
}
