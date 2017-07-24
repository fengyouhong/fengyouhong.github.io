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
		totalPrice = (price*num).toFixed(2);
		obj.parentNode.firstElementChild.nextElementSibling.value = num;
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
		changeCarNum(id,num,totalPrice);
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
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
		changeCarNum(id,num,totalPrice);
	}
	//商品数量减操作
	function reduce(obj){
		var num = obj.parentNode.firstElementChild.nextElementSibling.value;
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
		totalPrice = (price*num).toFixed(2);
		obj.parentNode.firstElementChild.nextElementSibling.value = num;
		obj.parentNode.parentNode.nextElementSibling.firstElementChild.innerText = totalPrice;
		totalall();
		changeCarNum(id,num,totalPrice);
	}
	
//	总计
	function totalall(){
		var li = $(".pro_list li");
		var totalall = 0;
		for (var i=0;i<li.length;i++) {
			totalall += parseInt(li.eq(i).children(".total").children("span").text());
		}
		
		document.querySelector(".right p span.total").innerText = "¥"+totalall.toFixed(2);
		document.querySelector("h5.money").firstElementChild.innerText = "¥"+totalall.toFixed(2);
		document.querySelector("div.money").firstElementChild.nextElementSibling.innerText = "¥"+totalall.toFixed(2);
	}
	
//	改变本地数据
	function changeCarNum(id,num,totalPrice){
		
		var carData = JSON.parse(getCar());
		if(!carData){
			return false;
		}
		for(var i=0;i<carData.length;i++){
			if(carData[i].id == id){
				carData[i].num = num;
				carData[i].totalPrice = totalPrice;
				break;
			}
		}
		addCar(carData);
	}
	
	function addCar(productData){
		localStorage.setItem(keyName,JSON.stringify(productData));
	}
	
	var keyName = "1";
	function getCar(){
		return localStorage.getItem(keyName);
	}
function loadCar(){
	var carData = JSON.parse(getCar());
	if(carData){
		oli = $("#pro_list li");
		oli.remove();
	}
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
			var img = document.createElement("img");
			var a1_1 = document.createElement("a");
			a1_1.setAttribute("href","pro_details.html");
			img.src = carData[i].imgSrc;
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
			var text7_1 = document.createTextNode("颜色：黑色");
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
			var span5_1 = document.createElement("span");
			var text5_2 = document.createTextNode(carData[i].totalPrice);
			span5_1.appendChild(text5_2);
			div5.appendChild(span5_1);
			
			li.appendChild(div5)
			

			
			ul.appendChild(li);
		}
	}
}