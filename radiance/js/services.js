$(function(){
	$('.allwidth').mousemove(function(){
		$(this).find('.swiper-button-prev,.swiper-button-next').show();
	})
	$('.allwidth').mouseout(function(){
		$(this).find('.swiper-button-prev,.swiper-button-next').hide();
	})
	var mySwiper = new Swiper('.swiper-container1', {
		 pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,   //slide间隙/可选选项，自动滑动
		nextButton: $('.swiper-button-next',this),
        prevButton: $('.swiper-button-prev',this)
	})
	var mySwiper = new Swiper('.swiper-container2', {
		 pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,   //slide间隙/可选选项，自动滑动
		nextButton: $('.swiper-button-next',this),
        prevButton: $('.swiper-button-prev',this)
	})
	var mySwiper = new Swiper('.swiper-container3', {
		 pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,   //slide间隙/可选选项，自动滑动
		nextButton: $('.swiper-button-next',this),
        prevButton: $('.swiper-button-prev',this)
	})
	var mySwiper = new Swiper('.swiper-container4', {
		 pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,   //slide间隙/可选选项，自动滑动
		nextButton: $('.swiper-button-next',this),
        prevButton: $('.swiper-button-prev',this)
	})
	var mySwiper = new Swiper('.swiper-container5', {
		slidesPerView:1,//页面分组显示，这里显示为3组
	    spaceBetween:10,//slide间隙/可选选项，自动滑动
	    effect : 'fade',
	    autoHeight: true,
	    autoplay: 3000,
		fade: {
		  crossFade: true,
		}
	})
	
	$('.imghei').mousemove(function(){
		$(this).find('.Bg_opacity').show();
		$(this).find('.Float_layer').show();
	})
	$('.imghei').mouseout(function(){
		$(this).find('.Bg_opacity').hide();
		$(this).find('.Float_layer').hide();
	})
})