$(document).ready(function(){
//	选项卡功能

	$("#middle .middle_center .center_left .nav_list .product").click(function(){
		index = $(this).index();
		$("#middle .middle_center .center_left .nav_list ul li").eq(index).addClass("ative").siblings().removeClass("ative");
		$("#middle .middle_center .center_left .pro_par").css("display","block");
		$("#middle .middle_center .center_left .img").css("display","block");
		$("#middle .middle_bottom").css("display","block");
		$("#middle .left_bottom").css("display","none");
	})
	$("#middle .middle_center .center_left .nav_list .eva").click(function(){
		index = $(this).index();
		$("#middle .middle_center .center_left .nav_list ul li").eq(index).addClass("ative").siblings().removeClass("ative");
		$("#middle .middle_center .center_left .pro_par").css("display","none");
		$("#middle .middle_center .center_left .img").css("display","none");
		$("#middle .middle_bottom").css("display","none");
		$("#middle .left_bottom").css("display","block");
	})
	$("#middle .middle_center .center_left .nav_list .suce").click(function(){
		index = $(this).index();
		$("#middle .middle_center .center_left .nav_list ul li").eq(index).addClass("ative").siblings().removeClass("ative");
		$("#middle .middle_center .center_left .pro_par").css("display","none");
		$("#middle .middle_center .center_left .img").css("display","none");
		$("#middle .middle_bottom").css("display","none");
		$("#middle .left_bottom").css("display","none");
	})
//	选项卡功能 end
	
	//轮播 
	var sList = $(".middle_top .middle_top_left .small_list li");
	var  sListLen = $(".middle_top .middle_top_left .small_list li").length;
	var liWidth = $(sList).outerWidth()+28;
	var bool = true;
	

	
	
	
	
	$(".middle_top .middle_top_left .small_list").css("width",liWidth*sListLen);
	for(var i=0;i<sListLen;i++){
				sList.eq(i).css({"left":i*liWidth+"px"});
			}
	
	
	
	
	
	$(".middle_top .middle_top_left .next").click(function(){
		next();
		
	})
	$(".middle_top .middle_top_left .prev").click(function(){
		prev();
	})
//	切换下一张
	function next(){
		if(bool){
				bool = false;
				if(sListLen>5){
					$(".middle_top .middle_top_left .small_list li").eq(0).animate({"left":-liWidth+"px"},500,function(){
						$(".middle_top .middle_top_left .small_list li").eq(0).appendTo(".middle_top .middle_top_left .small_list").css({"left":(sListLen-1)*liWidth+"px"});
						bool = true;
						$(".middle_top .middle_top_left .small_list li").eq(0).addClass("on").siblings().removeClass("on");
						$(".middle_top .middle_top_left #smll_box img").attr("src",$(".middle_top .middle_top_left .small_list li").eq(0).children("a").children("img").attr("src"))
					})
					
					for(var i=1;i<sListLen;i++){
						$(".middle_top .middle_top_left .small_list li").eq(i).animate({"left":(i-1)*liWidth+"px"},500);
					}
					
				}
				
			}
		
		
	}
//	切换上一张
	function prev(){
		if(bool){
			bool=false;
			index=$(".middle_top .middle_top_left .small_list li.on").index();
			index--;
			$(".middle_top .middle_top_left .small_list li").eq(-1).addClass("on").siblings().removeClass("on");
			$(".middle_top .middle_top_left #smll_box img").attr("src",$(".middle_top .middle_top_left .small_list li").eq(-1).children("a").children("img").attr("src"))
		if(index<0){
			index=sListLen-1;
			}
			
			
			for(var i=0;i<sListLen-1;i++){
				$(".middle_top .middle_top_left .small_list li").eq(i).animate({"left":(i+1)*liWidth+"px"})	
			}
			
			$(".middle_top .middle_top_left .small_list li").eq(-1).css("left",-liWidth+"px").animate({"left":0},function(){
				$(this).prependTo(".middle_top .middle_top_left .small_list")	
				bool=true;
			})	
		}
	}
	
	//轮播 end
	
	//	点击小图切换大图
	$(".middle_top .middle_top_left .small_list li").click(function(){
		index = $(this).index();
		$(".middle_top .middle_top_left .small_list li").eq(index).addClass("on").siblings().removeClass('on');
		$(".middle_top .middle_top_left #smll_box img").attr("src",$(this).children("a").children("img").attr("src"))
	})
	
	
	
//	获取库存为最大值
	 maxval = $("#middle .middle_top .middle_top_right .num b span").text();
//	加操作
	 $("#middle .middle_top .middle_top_right .num .add").click(function(){
	 	var value = $("#middle .middle_top .middle_top_right .num input").val();
	 	value= parseInt(value);
	 	value+=1;
//	 	判断value值是否大于最大值
	 	if(value > maxval){
	 		value = maxval;
	 	}
	 	$("#middle .middle_top .middle_top_right .num input").val(value);
	 	
	 })
//	 减操作
	  $("#middle .middle_top .middle_top_right .num .minus").click(function(){
		var value = $("#middle .middle_top .middle_top_right .num input").val();
		value= parseInt(value);
		value-=1;
	 	if(value<1){
	 		value=1;
	 	}
	 	$("#middle .middle_top .middle_top_right .num input").val(value);
	  })
//	  数量框改变判断
	  $("#middle .middle_top .middle_top_right .num input").blur(function(){
	  	value = Math.round($("#middle .middle_top .middle_top_right .num input").val());
		$(this).val(value);
		  if(isNaN(value)){
		  	value = 1;
		  }else if(value <1){
		  	value = 1;
		  }
		  if(value > maxval){
	 		value = maxval;
	 	}
		  $("#middle .middle_top .middle_top_right .num input").val(value);
	  })
	  
//	  放大镜
		var smll_box = document.getElementById("smll_box");
			var box1 = document.getElementById("box1");
			var box = document.getElementById("box");
			var img = document.createElement("img");
			img.style.position="absolute";
			img.style.width="1890px";
			box.appendChild(img);
			var middle_top_left = document.getElementsByClassName("middle_top_left")[0];
			
		smll_box.onmouseover = function(){
			box1.style.display = "block";
			box.style.display = "block";
			img.src = smll_box.getElementsByTagName("img")[0].src;
		}
		smll_box.onmouseout = function(){
			box1.style.display = "none";
			box.style.display = "none";
		}
		smll_box.onmousemove = function(e){
			var e = e || window.event;
			var imgX = e.pageX;
			var imgY = e.pageY;
			var box1Left = imgX - middle_top_left.offsetLeft - box1.offsetWidth/2;
			var box1Top = imgY - middle_top_left.offsetTop - box1.offsetHeight/2;
			if(box1Left < 0){
				box1Left = 0;
			}else if(box1Left > smll_box.offsetWidth - box1.offsetWidth){
				box1Left = smll_box.offsetWidth - box1.offsetWidth;
			}
			if(box1Top < 0){
				box1Top = 0;
			}else if(box1Top > smll_box.offsetHeight - box1.offsetHeight){
				box1Top = smll_box.offsetHeight - box1.offsetHeight;
			}
			box1.style.left = box1Left + "px";
			box1.style.top = box1Top + "px";
			var count = img.offsetWidth/smll_box.getElementsByTagName("img")[0].offsetWidth;
			img.style.left = -box1Left*count + "px";
			img.style.top = -box1Top*count + "px";
		} 
//	  放大镜 end


//颜色选择
	$(function(){
		$("div.color a").click(function(){
			$("div.color a").removeClass("ative");
			$(this).addClass("ative")
		})
	})

//颜色选择 end
	//复选框
	
	$("#middle .left_bottom h5 ul li img").click(function(){
		if($(this).prev().val() == 0){
			$(this).attr("src","images/checkbox_1.png");
			$(this).prev().val(1)
		}else{
			$(this).attr("src","images/checkbox_0.png");
			$(this).prev().val(0)
		}
	});
	$("#middle .left_bottom h5 ul li a").click(function(){
		if($(this).prev().prev().val() == 0){
			$(this).prev().attr("src","images/checkbox_1.png");
			$(this).prev().prev().val(1)
		}else{
			$(this).prev().attr("src","images/checkbox_0.png");
			$(this).prev().prev().val(0)
		}
	});
	
	$("#middle .middle_bottom h5 ul li img").click(function(){
		if($(this).prev().val() == 0){
			$(this).attr("src","images/checkbox_1.png");
			$(this).prev().val(1)
		}else{
			$(this).attr("src","images/checkbox_0.png");
			$(this).prev().val(0)
		}
	})
	$("#middle .middle_bottom h5 ul li a").click(function(){
		if($(this).prev().prev().val() == 0){
			$(this).prev().attr("src","images/checkbox_1.png");
			$(this).prev().prev().val(1)
		}else{
			$(this).prev().attr("src","images/checkbox_0.png");
			$(this).prev().prev().val(0)
		}
	})
	
	//复选框 end
	
})
function setProduct(){
		var imgSrc = [
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg"
		];
		var nameArr = [
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套"
		]
		var id = parseInt(Math.random()*6);
		var img = imgSrc[id];
		var num = document.getElementById("num").value;
		var price = 560;
		var product = {
					imgSrc:img,
					name:nameArr[id],
					num:num,
					price:price,
					id:id,
					totalPrice:(price*num).toFixed(2),
					
				};
		addShopCar(product);
		pro_num();
	}