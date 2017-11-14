$(function(){
	$('.botton').click(function(){
		$('.f_nav').toggleClass('f_nav_active')
	})
	$(".go_top").click(function () {
	        var speed=200;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
	 });
   (function() {
        minigrid('.grid2', '.grid-item2', 6, null,
                function() {
                    var d = document.querySelector('.demo2');
                    d.style.opacity = 1;
                }
        );
        window.addEventListener('resize', function() {
            minigrid('.grid2', '.grid-item2');
        });
    })();
	$(window).scroll(function() { 
		windowTop = $(window).scrollTop();
		if (windowTop>=90) {
			$('.f_header').css({'background':'rgba(0,0,0,0.5)'})
		} else{
			$('.f_header').css({'background':'rgba(0,0,0,0.5)'})
		}
	}); 
})