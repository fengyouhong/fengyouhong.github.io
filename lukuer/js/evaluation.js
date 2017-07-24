$(function(){
//	评价星级
	var evalist = $(".evalue .bewrite").children();
	for(var i=0;i<evalist.length;i++){
		evalist.eq(i).click(function(){
			index = $(this).index();
			for (var i=0;i<evalist.length;i++) {
				evalist.attr("src","images/star_yellow_void.png");
			}
			for (var i=0;i<=index;i++) {
				
				evalist.eq(i).attr("src","images/star_yellow.png");
			}
			
		})
	}
	
	var serlist = $(".evalue .server").children();
	for(var i=0;i<serlist.length;i++){
		serlist.eq(i).click(function(){
			index = $(this).index();
			for (var i=0;i<serlist.length;i++) {
				serlist.attr("src","images/star_yellow_void.png");
			}
			for (var i=0;i<=index;i++) {
				
				serlist.eq(i).attr("src","images/star_yellow.png");
			}
			
		})
	}
	//	评价星级 end
	 img = $(".evalue p:nth-child(3) img");
	
	 Span = $(".evalue p:nth-child(3)  span");
	 
	 img.click(function(){
	 	 Input = $(".evalue p:nth-child(3) input");
	 	 console.log()
	 		if(Input.val() == 0){
	 			$(this).attr("src","images/comment_01.png");
	 			Input.val(1)
	 		}else{
	 			$(this).attr("src","images/comment_00.png")
	 			Input.val(0)
	 		}
	 })
	Span.click(function(){
		 Input = $(".evalue p:nth-child(3) input");
		if(Input.val() == 0){
	 			img.attr("src","images/comment_01.png");
	 			Input.val(1)
	 		}else{
	 			img.attr("src","images/comment_00.png")
	 			Input.val(0)
	 		}
	})
})