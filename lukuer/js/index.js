$(document).ready(function(){
//	banner轮播
	
	var lunbo;
	var winW =  $(window).width();
	var index = 0;
	var bool = true;
	var LiLen = $(".banner .bd li").length;
	$(".banner .bd ul").css({"width":winW*LiLen+"px"});
	$(".banner .bd li").width(winW);
	
	$(".banner .hd li").click(function(){
		index = $(this).index();
		if (bool) {
			bool = false;
			$(".banner .bd ul").animate({marginLeft:-winW*index+"px"},300,function(){bool = true});
			$(".banner .hd li").eq(index).addClass("on").siblings().removeClass('on');
		}
	})
	
	$(".banner .next").click(function(){
			
		index = $(".banner .hd li.on").index();
		if(bool){
			bool = false;
			index+=1;
			if(index > LiLen-1){
				index=0;
			}
			$(".banner .bd ul").animate({marginLeft:-winW*index+"px"},300,function(){bool = true;});
			$(".banner .hd li").eq(index).addClass("on").siblings().removeClass('on');
		}

	})
	
	$(".banner .prev").click(function(){
			index = $(".banner .hd li.on").index();
			if(bool){
				bool = false;
				index-=1;
				if(index < 0){
					index=LiLen-1;
				}
				$(".banner .bd ul").animate({marginLeft:-winW*index+"px"},300,function(){bool = true;});
				$(".banner .hd li").eq(index).addClass("on").siblings().removeClass('on');
			}

		})
		
	$(".banner").mouseover(function(){
		clearInterval(lunbo);
	})
	$(".banner").mouseout(function(){
		show();
	})
	function show(){
		lunbo = setInterval(function(){
			index+=1;
			if(index > LiLen-1){
				index = 0;
			}
			$(".banner .bd ul").animate({marginLeft:-winW*index+"px"});
			$(".banner .hd li").eq(index).addClass("on").siblings().removeClass("on")
		},3000)
	}
	show();
	
//	banner轮播 end



//产品轮播
	var prolunbo;
	var proListWidth;
	var odlistlen;
	var proindex = 0;
	proListWidth = $(".flash_sale .flash_sale_show .pd").width();
	odlistlen = $(".flash_sale .flash_sale_show .od ol li").length;
	$("#middle .flash_sale .flash_sale_show .pd ul").css("width",odlistlen*proListWidth+"px");
	
	
//	点击圆点切换图片
	$(".flash_sale .flash_sale_show .od ol li").click(function(){
		proindex = $(this).index();
		if (bool) {
			bool = false;
			$(".flash_sale .flash_sale_show .pd ul").animate({marginLeft:-proListWidth*proindex+"px"},700,
				function(){bool = true;});
			$(".flash_sale .flash_sale_show .od ol li").eq(proindex).addClass("on").siblings().removeClass("on");
		}
	})
//	鼠标移动上去,清除轮播
	$(".flash_sale_show .pd").mouseover(function(){
		clearInterval(prolunbo);
	})
	
//	鼠标移开,继续轮播
	$(".flash_sale_show .pd").mouseout(function(){
		proshow();
	})
	$(".flash_sale .flash_sale_show .od").mouseover(function(){
		clearInterval(prolunbo);
	})
	
//	鼠标移开,继续轮播
	$(".flash_sale .flash_sale_show .od").mouseout(function(){
		proshow();
	})
//	定义轮播
	function proshow(){
		prolunbo = setInterval(function(){
			proindex+=1;
			if(proindex > odlistlen-1){
				proindex = 0;
			}
			$(".flash_sale .flash_sale_show .pd ul").animate({marginLeft:-proListWidth*proindex+"px"},700);
			$(".flash_sale .flash_sale_show .od ol li").eq(proindex).addClass("on").siblings().removeClass("on")
		},3000)
	}
	proshow();
//产品轮播 end

//限时抢购倒计时

	function flash_sale_time(){
		var time =60;
		setInterval(function(){
			time-=1;
			if(time<0){
				time = 60;
			}
			if(time.toString().length <2){
					time = "0"+time;
				}
			$("#middle .flash_sale .title p span").text(time);
			
		},1000);
	}
	flash_sale_time();
//限时抢购倒计时 end


//人气爆款倒计时
			
	function popular_burst_time(){
		var time = 156645;
		
		setInterval(function(){
			time-=1;
			var d = Math.floor(time/(24*3600));
			var h = Math.floor(time/3600%24);
			var m = Math.floor(time/60%60);
			var s = Math.floor(time%60);
			
			for(var i=0;i<$("#middle .popular_burst ul li").length;i++){
				
				if(d.toString().length <2){
					d = "0"+d;
				}if(h.toString().length <2){
					h = "0"+h;
				}
				if(m.toString().length <2){
					m = "0"+m;
				}
				if(s.toString().length <2){
					s = "0"+s;
				}

				$("#middle .popular_burst ul li .introduce .introduce_bottom p span").eq(i*4).text(d);
				$("#middle .popular_burst ul li .introduce .introduce_bottom p span").eq(i*4+1).text(h);
				$("#middle .popular_burst ul li .introduce .introduce_bottom p span").eq(i*4+2).text(m);
				$("#middle .popular_burst ul li .introduce .introduce_bottom p span").eq(i*4+3).text(s);
			}
			
			
		},1000)
		
	}
	popular_burst_time();
//人气爆款倒计时 end

//热门活动倒计时 
	
	
	function activity_time(){
		var time = 156462;
		
		setInterval(function(){
			time-=1;
			var d = Math.floor(time/(24*3600));
			var h = Math.floor(time/3600%24);
			var m = Math.floor(time/60%60);
			var s = Math.floor(time%60);
			
			for(var i=0;i<$("#middle .activity .activity_show ul li").length;i++){
				if(d.toString().length <2){
					d = "0"+d;
				}if(h.toString().length <2){
					h = "0"+h;
				}
				if(m.toString().length <2){
					m = "0"+m;
				}
				if(s.toString().length <2){
					s = "0"+s;
				}
				$("#middle .activity .activity_show ul li .introduce p span").eq(i*4).text(d);
				$("#middle .activity .activity_show ul li .introduce p span").eq(i*4+1).text(h);
				$("#middle .activity .activity_show ul li .introduce p span").eq(i*4+2).text(m);
				$("#middle .activity .activity_show ul li .introduce p span").eq(i*4+3).text(s);
			}
			
			
		},1000)
		
	}
	activity_time();


//热门活动倒计时 end
	
})