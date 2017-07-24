/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

          $(document).ready(function(){
			/*定义一个变量接收setInterval*/	
			var lunbo;
			/*获取当前浏览器窗口的宽度*/
			var winW = $(window).width();
			/*初始化索引值*/
			var index = 0;
			/*设定一个开关*/
			var bool = true;
			/*获取图片的个数*/
			var liLen = $(".index_banner .bd li").length;
			$(".index_banner .bd ul").css({"width":winW*liLen+"px"});
			$(".index_banner .bd li").width(winW);

			$(".index_banner .hd li").click(function(){
				index = $(this).index();
				
				if(bool){
					bool = false;
					$(".index_banner .bd ul").animate({marginLeft:-winW*index+"px"},function(){bool = true;});
					$(".index_banner .hd li").eq(index).addClass("on").siblings().removeClass('on');
				}
			})
			
			$(".index_banner").mouseover(function(){
				clearInterval(lunbo);
			})
			$(".index_banner").mouseout(function(){
				show()
			})
			/*实现自动轮播*/
			
			function show(){
				/*变量使用clearInterval()去清除这个动画*/
				lunbo = setInterval(function(){
					/*执行下一张图片，对应的索引值+1*/
					index+=1;
					/*阻止索引值自增，*/
					if(index > liLen-1){
						index=0;
					}
					/*animate()动画*/
					$(".index_banner .bd ul").animate({marginLeft:-winW*index+"px"});
					/*通过对应的索引值的小圆点增加当前样式.on，siblings()找到除了自身元素之外的其他兄弟元素，也就是通过removeClass()这个方法去移除其他兄弟元素的.on*/
					$(".index_banner .hd li").eq(index).addClass("on").siblings().removeClass('on')
				},2000)
			}
			show();

			
		})
   