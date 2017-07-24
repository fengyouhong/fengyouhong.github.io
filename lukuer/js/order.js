$(function(){
	
	$("#middle .order_right h4 ul li").click(function(){
		index = $(this).index();
		$("#middle .order_right h4 ul li").removeClass("on")
		$("#middle .order_right h4 ul li").eq(index).addClass("on");
		
		$("#middle .order_right .order_center table").removeClass("on");
		$("#middle .order_right .order_center table").eq(index).addClass("on");
	})
})