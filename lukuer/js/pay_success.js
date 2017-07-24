$(function(){
	
})
	var keyName = "1";
	function getCar(){
		return localStorage.getItem(keyName);
	}

	var totalchcek = 0;
	function getto(){
		var carData = JSON.parse(getCar());
		for (var i=0;i<carData.length;i++) {
			totalchcek += parseInt(carData[i].totalPrice);
		}
		$(".right h4 span").text(totalchcek.toFixed(2));
	}