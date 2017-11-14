$(function(){
	//	定义rem
	 alWin = $('.img_alert').width();
     $('.img_alert').css('margin-left',-alWin/2+'px')
	
	item = $('#wrapper .grid-wrapper .grid-item');
	item.click(function(){
		$('.img_alert').show();
		Srcimg = $(this).find('img').attr('src');
		$('.img_alert .img img').attr('src',Srcimg)
	})
	$('.close_alert').click(function(){
		$('.img_alert').hide();
	})
	
	 window.addEventListener('resize', function() {
            alWin = $('.img_alert').width();
            $('.img_alert').css('margin-left',-alWin/2+'px')
            alHin = $('.img_alert').height();
     		$('.img_alert').css('margin-top',-alHin/2+'px')
        });
})

 alHin = $('.img_alert').height();
     $('.img_alert').css('margin-top',-alHin/2+'px')