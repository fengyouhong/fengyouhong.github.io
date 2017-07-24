




//添加商品到购物车操作
function loadCar(){
	var carData = JSON.parse(getCar());
	if(carData){
		var ul = document.getElementById("pro_list");
		for(var i=0;i<carData.length;i++){
			
	//		创建图片和复选框div
			var li = document.createElement("li");
			li.setAttribute("class","pro_");
			li.setAttribute("data-id",carData[i].id);
			
			
			var div1 = document.createElement("div");
			div1.setAttribute("class","pic");
			var imgcheck = document.createElement("img");
			imgcheck.setAttribute("class","check");
			imgcheck.setAttribute("onclick","check(this)");
			imgcheck.setAttribute("src","images/checkbox_0.png");
			var img = document.createElement("img");
			var a1_1 = document.createElement("a");
			a1_1.setAttribute("href","pro_details.html");
			img.src = carData[i].imgSrc;
			var inputcheck = document.createElement("input");
			inputcheck.setAttribute("type","hidden");
			inputcheck.setAttribute("value","0");
			div1.appendChild(inputcheck);
			div1.appendChild(imgcheck);
			a1_1.appendChild(img);
			div1.appendChild(a1_1);
			li.appendChild(div1);
			
	//		创建介绍div
			var div2 = document.createElement("div");
			div2.setAttribute("class","text");
			var p2_1 = document.createElement("p");
			var a2_1 = document.createElement("a");
			a2_1.setAttribute("href","pro_details.html");
			text2 = document.createTextNode(carData[i].name);
			a2_1.appendChild(text2);
			p2_1.appendChild(a2_1);
			div2.appendChild(p2_1);
			li.appendChild(div2);
			
			
//			创建颜色div

			var div7 = document.createElement("div");
			div7.setAttribute("class","color");
			var text7_1 = document.createTextNode("黑色");
			div7.appendChild(text7_1);
			
			li.appendChild(div7)
			
	//		创建单价div
			var div3 = document.createElement("div");
			div3.setAttribute("class","univalent");
			text2 = document.createTextNode("￥");
			var span1 = document.createElement("span");
			text3 = document.createTextNode(carData[i].price.toFixed(2));
			span1.appendChild(text3);
			div3.appendChild(text2);
			div3.appendChild(span1);
			li.appendChild(div3);
			
	//		创建商品数量div
			var div4 = document.createElement("div");
			div4.setAttribute("class","num");
			var p1 = document.createElement("p");
	//		减按钮
			var span4_1 = document.createElement("span");
			span4_1.setAttribute("class","minus");
			span4_1.setAttribute("onclick","reduce(this)");
			var text4_1 = document.createTextNode("-");
			span4_1.appendChild(text4_1);
			p1.appendChild(span4_1);
	//		数量框
			var  input4 = document.createElement("input");
			input4.setAttribute("type","text");
			input4.setAttribute("onchange","numChange(this)");
			input4.setAttribute("value",carData[i].num);
			p1.appendChild(input4);
	//		加按钮
			var span4_2 = document.createElement("span");
			span4_2.setAttribute("class","add");
			span4_2.setAttribute("onclick","add(this)");
			var text4_2 = document.createTextNode("+");
			span4_2.appendChild(text4_2);
			p1.appendChild(span4_2);
			
			div4.appendChild(p1);
			li.appendChild(div4);
			
	//		小计div
			var div5 = document.createElement("div");
			div5.setAttribute("class","total");
			var text5_1 = document.createTextNode("￥");
			var span5_1 = document.createElement("span");
			var text5_2 = document.createTextNode(carData[i].totalPrice);
			span5_1.appendChild(text5_2);
			div5.appendChild(text5_1);
			div5.appendChild(span5_1);
			
			li.appendChild(div5)
			
	//		移入收藏div
			var div6 = document.createElement("div");
			div6.setAttribute("class","collect");
			var a6_1 = document.createElement("a");
			a6_1.setAttribute("href","###");
			text6 = document.createTextNode("移入收藏");
			a6_1.appendChild(text6);
			div6.appendChild(a6_1);
			
			li.appendChild(div6);
			
			ul.appendChild(li);
		}
	}
}

//	//删除对应的商品
//	function deletePro(obj){
//		var li = obj.parentNode.parentNode;
//		var id = tr.getAttribute("data-id");
//		delProduct(id);
//		tr.remove();
//	}

	function deletePro(obj){
		var inputHidden = document.querySelectorAll(".pro_ .pic input[type=hidden]");
		var bool = true;
		index = 0;
		for (var i=0;i<inputHidden.length;i++) {
			if(inputHidden[i].value == 1){
				if(bool){
					var con = confirm("确定删除商品吗？");
					if(!con){
						return false;	
					}
					bool = false;
				}
			}
			
		}
		for (var i=0;i<inputHidden.length;i++) {
			if(inputHidden[i].value == 1){
				li = inputHidden[i].parentNode.parentNode;
				id = li.getAttribute("data-id");
				delProduct(id);
				li.remove();
			}
			
			document.querySelector(".price").firstElementChild.firstElementChild.innerText = 0;
		}
		
		
		for(var i=0;i<inputHidden.length;i++ ){
			if(inputHidden[i].value == 0){
				index += 1;
			}
			if(index == inputHidden.length){
				alert("请先勾选商品");
			}
		}
	}
	
	//商品数量加操作
	function add(obj){
		var prd_num = obj.previousSibling;
		var id = obj.parentNode.parentNode.parentNode.getAttribute("data-id");
		var num = prd_num.value;
		if(isNaN(num)){
			num = 1;
		}else{
			num = parseInt(num);
		}
		
		num+=1;
		price = obj.parentNode.parentNode.previousElementSibling.firstElementChild.innerText;
		prd_num.value = num;
		totalPrice = (price*num).toFixed(2);
		changeCarNum(id,num,totalPrice);
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
	}
	//商品数量改变的操作
	function numChange(obj){
		var num = obj.value;
		var id = obj.parentNode.parentNode.parentNode.getAttribute("data-id");
		if(isNaN(num)||num == ""||num<1){
			num = 1;
		}
		price = obj.parentNode.parentNode.previousElementSibling.firstElementChild.innerText;
		num = parseInt(num);
		obj.value = num;
		totalPrice = (price*num).toFixed(2);
		changeCarNum(id,num,totalPrice);
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
	}
	//商品数量减操作
	function reduce(obj){
		var prd_num = obj.nextSibling;
		var id = obj.parentNode.parentNode.parentNode.getAttribute("data-id");
		var num = prd_num.value;
		if(isNaN(num)){
			num = 1;
		}else{
			num = parseInt(num);
		}
		
		num-=1;
		if(num < 1){
			 num = 1;
		}
		price = obj.parentNode.parentNode.previousElementSibling.firstElementChild.innerText;
		
		prd_num.value = num;
		totalPrice = (price*num).toFixed(2);
		changeCarNum(id,num,totalPrice);
		
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
	}
	
	
//	复选框
	function check(obj){
		length = document.getElementById("pro_list").children.length;
		var value = obj.parentNode.firstElementChild.value;
		var checkimg = obj.parentNode.firstElementChild.nextElementSibling;
		
		if(value == 0){
			checkimg.setAttribute("src","images/checkbox_1.png");
			obj.parentNode.firstElementChild.value = 1;
		}else if(value == 1){
			checkimg.setAttribute("src","images/checkbox_0.png");
			obj.parentNode.firstElementChild.value = 0;
		}
		totalall();
		
	}
	
//	全选按钮

	function checkall(obj){
		var value = obj.parentNode.firstElementChild.value;
		var totalall = 0;
		var checkimg = obj.parentNode.firstElementChild.nextElementSibling;
		length = document.getElementById("pro_list").children.length;
		if(value == 0){
			checkimg.setAttribute("src","images/checkbox_1.png");
			obj.parentNode.firstElementChild.value = 1;
			document.querySelector(".choose").firstElementChild.firstElementChild.innerText = length;
			
		}else if(value == 1){
			checkimg.setAttribute("src","images/checkbox_0.png");
			obj.parentNode.firstElementChild.value = 0;
			document.querySelector(".choose").firstElementChild.firstElementChild.innerText = 0;
		}
		var pic = document.querySelectorAll(".pro_ .pic");
		if(obj.parentNode.firstElementChild.value == 1){
			for(var i=0;i<pic.length;i++){
				pic[i].firstElementChild.value = 1;
				pic[i].firstElementChild.nextSibling.setAttribute("src","images/checkbox_1.png");
			}
		}else if(obj.parentNode.firstElementChild.value == 0){
			for(var i=0;i<pic.length;i++){
				pic[i].firstElementChild.value = 0;
				pic[i].firstElementChild.nextSibling.setAttribute("src","images/checkbox_0.png");
				document.querySelector(".price").firstElementChild.firstElementChild.innerText = 0;
			}
		}
		
		
		var inputHidden = document.querySelectorAll(".pro_ .pic input[type=hidden]");
		var totalall = 0;
		
		for(var i=0;i<inputHidden.length;i++){
			if(inputHidden[i].value==0){
				
				document.querySelector(".check_all").firstChild.nextElementSibling.value = 0; 
				document.querySelector(".check_all").firstChild.nextElementSibling.nextElementSibling.setAttribute("src","images/checkbox_0.png")
				break;
			}else if(inputHidden[i].value==1){
				
				document.querySelector(".check_all").firstChild.nextElementSibling.value = 1; 
				document.querySelector(".check_all").firstChild.nextElementSibling.nextElementSibling.setAttribute("src","images/checkbox_1.png")
				
			}
			totalall+= parseInt(inputHidden[i].parentNode.parentNode.lastElementChild.previousSibling.firstElementChild.innerText);
			
		}
		document.querySelector(".price").firstElementChild.firstElementChild.innerText = totalall.toFixed(2);
		
	}
	
//	总计
	function totalall(){
		var inputHidden = document.querySelectorAll(".pro_ .pic input[type=hidden]");
		var totalall = 0;
		var index = 0;
		bool = true;
		for(var i=0;i<inputHidden.length;i++){
			if(inputHidden[i].value==0){
				bool=false;
				document.querySelector(".check_all").firstChild.nextElementSibling.value = 0; 
				document.querySelector(".check_all").firstChild.nextElementSibling.nextElementSibling.setAttribute("src","images/checkbox_0.png");
			}else if(inputHidden[i].value==1){
				index +=1; 
				if(bool){
					document.querySelector(".check_all").firstChild.nextElementSibling.value = 1; 
					document.querySelector(".check_all").firstChild.nextElementSibling.nextElementSibling.setAttribute("src","images/checkbox_1.png")
				}
				
				totalall+= parseInt(inputHidden[i].parentNode.parentNode.lastElementChild.previousSibling.firstElementChild.innerText);
				
			}
			
		}
		document.querySelector(".price").firstElementChild.firstElementChild.innerText = totalall.toFixed(2);
		document.querySelector(".choose").firstElementChild.firstElementChild.innerText = index;
	}

	//改变本地数据的数量
	function changeCarNum(id,num,totalPrice){
		var carData = JSON.parse(getCar());
		for(var i=0;i<carData.length;i++){
			if(carData[i].id == id){
				carData[i].num = num;
				carData[i].totalPrice = totalPrice;
				break;
			}
		}
		addCar(carData);
	}
	

//	定义key名称
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
	//通过指定的key获取商品数据
	function getCar(){
		return localStorage.getItem(keyName);
	}
	//通过指定的key添加商品到本地
	function addCar(productData){
		localStorage.setItem(keyName,JSON.stringify(productData));
	}
	//通过指定的id删除对应的商品
	function delProduct(id){
		var carData = JSON.parse(getCar());
		var arrData = [];
		for(var i=0;i<carData.length;i++){
			if(carData[i].id == id){
				continue;
			}else{
				arrData.push(carData[i]);
			}
		}
		addCar(arrData);
//		location.reload();
		pro_num();
	}
	
	function clearCar(){
		localStorage.removeItem(keyName);
	}
	
	
	function clearProAll(){
		clearCar();
		var ul = document.getElementById("pro_list");
		if(ul){
			var li = ul.getElementsByName("pro_");
			var length = tr.length;
			for(i=0;i<length;i++){
				ul.remove(i);
			}
		}
		
	}
	
//	去结算按钮
function gosettle(){
	var inputHidden = $(".pro_ .pic input[type=hidden]");
	var orderData =[];
	var id = "";
	var index = 0;
	var carData = JSON.parse(getCar());
	for (var i=0;i<inputHidden.length;i++) {
		 var value = inputHidden[i].value;
		 
		if (value == 1) {
			window.location.href="confirm_order.html";
			id = inputHidden[i].parentNode.parentNode.getAttribute("data-id");
			if(carData[i].id == id ){
				orderData.push(carData[i]);
					
			}
		}else if(value == 0){
			index+=1;
		}
	}
	if(index == inputHidden.length){
		alert("请勾选商品")
	}
	
	
	localStorage.setItem(1,JSON.stringify(orderData));
	
	
}
