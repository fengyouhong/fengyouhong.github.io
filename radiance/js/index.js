$(function(){
	 //自动轮播
            var i=0;
            
            liLen = $('.f_banner ul li').length;
            //向右切换
            var play=function(){
                i++;
                i = i >= liLen ? 0 : i ;
                $(".f_banner li").eq(i).fadeIn(800).siblings().fadeOut(800);
            }
            var timer=setInterval(play,5000);
            
            
          
        
        
})