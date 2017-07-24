$(function(){
//	多选效果
	$("#middle .classify_details .brand .right p span").click(function(){
		if($("#middle .classify_details .brand .center ul li input").eq(0).css("display") == "inline-block"){
			for (var i=0;i<$("#middle .classify_details .brand .center ul li input").length;i++) {
				$("#middle .classify_details .brand .center ul li input").eq(i).css("display","none");
			}
		}else{
			for (var i=0;i<$("#middle .classify_details .brand .center ul li input").length;i++) {
				$("#middle .classify_details .brand .center ul li input").eq(i).css("display","inline-block");
				$("#middle .classify_details .brand .center ul li input").eq(i).parent("li").css("padding-left","0")
			}
		}
	})
	

	$("#middle .classify_details .option .right p span").click(function(){
		if($("#middle .classify_details .option .center ul li input").eq(0).css("display") == "block"){
			for (var i=0;i<$("#middle .classify_details .option .center ul li input").length;i++) {
				$("#middle .classify_details .option .center ul li input").eq(i).css("display","none");
			}
		}else{
			for (var i=0;i<$("#middle .classify_details .option .center ul li input").length;i++) {
				$("#middle .classify_details .option .center ul li input").eq(i).css("display","block");
			}
		}
	})	
//多选按钮 end


//	点击文字可勾选
	var checka = $("#middle .classify_details .brand .center ul li a");
	checka.each(function(i){
		$(this).click(function(){
			if($(this).prev().attr("checked")){
				$(this).prev().attr("checked",false)
			}else{
				$(this).prev().attr("checked",true)
			}
		})
	})
	
	var checkb = $("#middle .classify_details .option .center ul li a");
	
	checkb.each(function(i){
		$(this).click(function(){
			if($(this).prev().attr("checked")){
				$(this).prev().attr("checked",false)
			}else{
				$(this).prev().attr("checked",true)
			}
		})
	})
//	点击文字可勾选 end

//选购热点展开

$("#middle .classify_details .brand .right p a:eq(0)").click(function(){
	if($("#middle .classify_details .brand .center").css("height") == "75px"){
		$("#middle .classify_details .brand .center").css("height","100%")
	}else{
		$("#middle .classify_details .brand .center").css("height","75px")
	}
})
//选购热点展开 end

//商品裂表复选框 
	 var checkimg = $("#middle .por_show ul li .bottom div:nth-child(1) img");
	 checkimg.each(function(i){
	 	$(this).click(function(){
	 		if($(this).attr("src") == "images/checkbox_0.png"){
	 			$(this).attr("src", "images/checkbox_1.png");
	 		}else{
	 			$(this).attr("src", "images/checkbox_0.png");
	 		}
	 	})
	 })
	 
	 
	 
	var setcar = $("#middle .por_show ul li .bottom div:nth-child(3)");
	setcar.each(function(i){
		$(this).click(function(){
			setProduct();
//			console.log($(this).parent().parent().children("a").children("img").attr("src"));
		})
	})
	function setProduct(){
		var imgSrc = [
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg","images/car_list_01.jpg",
			"images/car_list_01.jpg"
		];
		var nameArr = [
			"假发女短发bobo波波头自然逼真韩国时尚空气刘海蓬松帅气短直发",
			"假发女短发bobo波波头自然逼真韩国时尚空气刘海蓬松帅气短直发",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套三色可选 明星同款",
			"瑞贝卡/Rebecca齐刘海短发 修颜减龄头套三色可选 明星同款",
			"假发女短发bobo波波头自然逼真韩国时尚空气刘海蓬松帅气短直发",
			"假发女短发bobo波波头自然逼真韩国时尚空气刘海蓬松帅气短直发"
		]
		var id = parseInt(Math.random()*6);
		var img = imgSrc[id];
		var num = 1;
		var price = 560;
		var product = {
					imgSrc:img,
					name:nameArr[id],
					num:num,
					price:price,
					id:id,
					totalPrice:(price*num).toFixed(2),
					
				};
		addShopCar(product);
		pro_num();
	}
	
	var keyName = "shop_car";
//	将商品添加到购物车
	function addShopCar(product){
		//先获取本地数据
		var productData = getCar();
		//如果本地里面没有任何商品
		if(!productData){
			//创建一个json数据，将商品数据添加到这个json数据里面
			var proData = [
				product
			]
			addCar(proData);
		}else{
			//本地已经有数据（商品）
			//将数据转换成json格式的数据
			var carData =JSON.parse(productData);
			var bool = true;
			
			for(i=0;i<carData.length;i++){
				//通过id判断是否有相同商品，如果有相同的商品，直接加数量和小计
				if(carData[i].id == product.id){
					carData[i].num = parseInt(carData[i].num) + parseInt(product.num);
					carData[i].totalPrice = (parseFloat(carData[i].totalPrice) + parseFloat(product.totalPrice)).toFixed(2);
					bool = false;
					break;
				}
			}
			if (bool){
				carData.push(product);
			}
			addCar(carData);
		}
		
	}
	function addCar(productData){
		localStorage.setItem(keyName,JSON.stringify(productData));
	}
	function getCar(){
		return localStorage.getItem(keyName);
	}
})