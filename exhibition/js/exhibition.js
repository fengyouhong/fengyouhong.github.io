$(function(){	
	//导航条
	$('.nav li').click(function() {
		var index = $(this).index();
		var width = $(window).width();  
		if(width<768){
			$('.navbar-toggle').click();
		}
		$(this).addClass('active').siblings().removeClass('active');
	});
	//banner轮播
	$('.carousel').carousel({
		interval: 3000
	})
	$("#myCarousel,#MyCarousel").swipe({
		swipeLeft:function(){$(this).carousel("next")},
		swipeRight:function(){$(this).carousel("prev")},
	})
	window_resize()
	function window_resize(){
		var width = $(window).width();  
		var height = $(this).height();  
		$('#guest ul li').each(function(a){
			if(width<992){
				if(a>5){
					$('#guest ul li').eq(a).hide();
				}
			}else{
				if(a>7){
					$('#guest ul li').eq(a).hide();
				}
			}
		})
		if(width>767){
			$('#agenda .my_nav ul').show();
		}else{
			$('#agenda .my_nav ul').hide();
		}
		$('#guest a.more').click(function(){
			text = $(this).text(); 
			if(text == "展开更多"){
				$(this).html('<img src="images/up.png">收起')
				$('#guest ul li').each(function(a){
					$('#guest ul li').eq(a).show();
			})
			}else{
				$(this).html('<img src="images/down.png">展开更多')
				$('#guest ul li').each(function(a){
					if(width<992){
						console.log(width)
						if(a>5){
							$('#guest ul li').eq(a).hide();
						}
					}else{
						console.log(width)
						if(a>7){
							$('#guest ul li').eq(a).hide();
						}
					}
				})
			}
		})
	}
	$(window).resize(function() {  
		window_resize();
		var width = $(window).width();  
		if(width>767){
			$('#previous .my_nav ul').width(liL*liW);
			$('#previous .list_length').show();
		}else{
			$('#previous .my_nav ul').css('width','100%');
		}
	});  
		
	$('#agenda .my_nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		index = $(this).index();
		html = $(this).html();
		$('#agenda .mooo').html(html);
		$('#agenda .agenda_details').eq(index).fadeIn(500).siblings('.agenda_details').fadeOut(0)
		var width = $(window).width();  
		if(width<768){
			$('#agenda .my_nav ul').slideToggle()
		}
	})	
	flag = true;
	$('.mooo').click(function(){
		$(this).next().slideToggle()
		if (flag == true) {
			$(this).addClass('mobile_active1').removeClass('mobile_active')
			flag = !flag;
		}else{
			$(this).addClass('mobile_active').removeClass('mobile_active1')
			flag = !flag;
		}
	})

	$('#sign_up .my_nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		index = $(this).index();
		html = $(this).html();
		$('#sign_up .mooo').html(html);
		com = '	<label for="company" class="col-md-3  text-right"> 公司/Company：</label>'+
				      	'<div class="col-md-6">'+
				         	'<input type="text" class="form-control" id="company" >'+
				           ' <p class="alert alert-danger hidden">请输入您的公司/Company。</p>'+
				      	'</div>'
		if(index== 0){
			console.log(index)
			$('#sign_up form .company_a').html(com)
		}else{
			$('#sign_up form .company_a').html("")
		}
		var width = $(window).width();  
		if(width<768){
			$('#sign_up .my_nav ul').slideToggle()
		}
	})

	// 往届回顾切换
	$('#previous .my_nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		html = $(this).html();
		index = $(this).index();
		$('#previous .mooo').html(html);
		console.log(index)
		$('#previous .tab_content').eq(index).fadeIn(500).siblings().fadeOut(0)
		$('#previous .tab_content').eq(index).addClass('tab_content_block').siblings().removeClass('tab_content_block')

		var width = $(window).width();  
		if(width<768){
			$('#previous .list_length').slideToggle()
		}
	})
	liL = $('#previous .my_nav ul li').length;
	liW = $('#previous .my_nav ul li').width();
	var width = $(window).width();  
		if(width>767){
			$('#previous .my_nav ul').width(liL*liW);
		}
	
	$('#previous .my_nav .next_li').click(function(){
		left = $('#previous .my_nav ul').css('margin-left');
		left= parseInt(left.substring(0,left.length-2));
		widW = $('#previous .my_nav ul li').width();
		width = $('#previous .list_length').width();
		ulW =  $('#previous .my_nav ul').width();
		 
		if(left > (width-ulW)){
			$('#previous .my_nav ul').animate({'margin-left':left-widW+'px'},200)
		}
		
	})
	$('#previous .my_nav .prev_li').click(function(){
		left = $('#previous .my_nav ul').css('margin-left');
		left= parseInt(left.substring(0,left.length-2));
		widW = $('#previous .my_nav ul li').width();
		if(left < 0){
			$('#previous .my_nav ul').animate({'margin-left':left+widW+'px'},200)
		}
		
	})
})