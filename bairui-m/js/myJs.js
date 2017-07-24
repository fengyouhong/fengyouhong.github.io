//$(function(){})
//rem定义
$(document).ready(function(){
	var winW = $(window).width();
	var constant = winW/6.4;
	$('body,html').css({"font-size":constant});
	$(window).resize(function(){
		var winW = $(window).width();
		var constant = winW/6.4;
		$('body,html').css({"font-size":constant});
	})
})
//导航栏下拉
$(function(){
			
			var bool=true;
			
			$(".nav_toggle").click(function(){
				if(bool){
					$(".navbar").slideDown(500,function () {
						bool=false;
					});
					
				}else{
					$(".navbar").slideUp(500,function(){
							bool=true;
					});
				
					}
			})
})

//表单输入框判断事件

		//function focusVlaue(){}
		var focusVlaue = function(obj,value){
			if(obj.value == value){
				obj.value = ""
			}
		}
		var blurValue = function(obj,value){
			if(obj.value == ""){
				obj.value = value;
			}
		}
	


