function submitOrder()
{
	text1 = "";  
	text2 = "";
	var total = 0;
	var sizeTotal = 0;
	var sizeVal = document.getElementsByName("size");
	for (var j = 0; j < sizeVal.length; j++) {
		if (sizeVal[j].checked) {
			var chooseSize = sizeVal[j].value;
			text1 = text1+chooseSize+"<br>";
		}
	}
	if (chooseSize === "Personal") {
		sizeTotal = 6;
		text2 = text2+sizeTotal+"<br>";
	} else if (chooseSize === "Medium") {
		sizeTotal = 10;
		text2 = text2+sizeTotal+"<br>";
	} else if (chooseSize === "Large") {
		sizeTotal = 14;
		text2 = text2+sizeTotal+"<br>";
	} else if (chooseSize === "X-Large") {
		sizeTotal = 16;
		text2 = text2+sizeTotal+"<br>";
	}
	total = sizeTotal;
	addMeat(total,text1,text2); 
};	

function addMeat(total, text1, text2) {
	var meatTotal = 0;
	var chooseMeat = [];
	var meatVal =  document.getElementsByName('meat');
	for (var j=0; j < meatVal.length; j++) {
		if (meatVal[j].checked) {
			chooseMeat.push(meatVal[j].value);
		}
		meatNum = chooseMeat.length;
		if (meatNum > 1) {
			meatTotal = (meatNum - 1);
		}
		else {
			meatTotal = 0;
		}
	}	
	total = (total + meatTotal);
	
	for (var j=0; j < chooseMeat.length; j++) {
		text1 = text1+chooseMeat[j]+"<br>";
		if (meatTotal <= 1) {
			text2 = text2 + 0 +"<br>";
			meatNum = (meatNum - 1);
		}
		else if (meatNum == 2) {
			text2 = text2 + 1 + "<br>";
		}
		else {
			text2 = text2 +1+"<br>";
			meatNum = (meatNum -1);
		}
	}
	addVeggies(total,text1,text2);
};

function addVeggies(total, text1, text2) {
	var vegTotal = 0;
	var chooseVeggies = [];
	var vegVal =  document.getElementsByName('veggies');
	for (var j=0; j < vegVal.length; j++) {
		if (vegVal[j].checked) {
			chooseVeggies.push(vegVal[j].value);
		}
		vegNum = chooseVeggies.length;
		if (vegNum > 1) {
			vegTotal = (vegNum - 1);
		}
		else {
			vegTotal = 0;
		}
	}	
	total = (total + vegTotal);
	for (var j=0; j < chooseVeggies.length; j++) {
		text1 = text1+chooseVeggies[j]+"<br>";
		if (vegTotal <= 1) {
			text2 = text2 +0 +"<br>";
			vegNum = (vegNum - 1);
		}
		else if (vegNum == 2) {
			text2 = text2 + 1 + "<br>"
			vegNum = (vegNum -1)
		}
		else {
			text2 = text2 + 1 + "<br>";
			vegNum = (vegNum -1);
		}
	}
	addCheese(total,text1,text2);
};
function addCheese(total, text1, text2){
	var cheeseVal = document.getElementsByName('cheese');
	var cheeseTotal = 0;
	chooseCheese = [];
	for (var j=0; j < cheeseVal.length; j++) {
		if (cheeseVal[j].checked) {
			chooseCheese = cheeseVal[j].value;
			text1 = text1+chooseCheese+"<br>";
		}
		if (chooseCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	text2 = text2 + cheeseTotal + "<br>";
	total = (total + cheeseTotal);
	addSauce(total,text1,text2);
};
function addSauce(total, text1, text2) {
	var sauceVal = document.getElementsByName('sauce');
	for (var j=0; j < sauceVal.length; j++) {
		if (sauceVal[j].checked) {
			chooseSauce = sauceVal[j].value;
			text1 = text1+ chooseSauce +"<br>";
		}
		
	}
	text2 = text2 + 0 +"<br>";
	addCrust(total,text1,text2);
};

function addCrust(total, text1, text2){
	var crustVal = document.getElementsByName('crust');
	var crustTotal = 0;
	var chooseCrust 
	for (var j=0; j < crustVal.length; j++) {
		if (crustVal[j].checked) {
			chooseCrust = crustVal[j].value;
			text1 = text1+ chooseCrust  +"<br>";
		}
		if (chooseCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	};
	text2 = text2 + crustTotal + "<br>";
	total = (total + crustTotal);
	document.getElementById("showItems").innerHTML=text1;
	document.getElementById("showTotal").innerHTML=text2;
	document.getElementById("showTotal2").innerHTML = "</h3>$"+total+".00"+"</h3>";
};
