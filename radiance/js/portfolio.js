$(function(){
	//	定义rem
	 alWin = $('.img_alert').width();
     $('.img_alert').css('margin-left',-alWin/2+'px')
	
	item = $('#wrapper .grid-wrapper .grid-item');
	item.click(function(){
		$('.img_alert').show();
		Srcimg = $(this).find('img').attr('src');
		title = $(this).find('img').attr('title')
		$('.img_alert .img img').attr('src',Srcimg);
		$('.img_alert .text_explain').text(title)
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