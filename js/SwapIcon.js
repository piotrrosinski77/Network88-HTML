function swapIcon1() {
	var imageDisplayed1 = document.getElementById('wifi-animation');
	imageDisplayed1.src = 'images/wifi_icon1.png';
	setTimeout('swapIcon1()', 1000);
}

function swapIcon2() {
	var imageDisplayed2 = document.getElementById('wifi-animation');
	imageDisplayed2.src = 'images/wifi_icon2.png';
	setTimeout('swapIcon2()', 1400);
}

function swapIcon3() {
	var imageDisplayed3 = document.getElementById('wifi-animation');
	imageDisplayed3.src = 'images/wifi_icon3.png';
	setTimeout('swapIcon3()', 2600);
}

function swapIcon4() {
	var imageDisplayed4 = document.getElementById('wifi-animation');
	imageDisplayed4.src = 'images/wifi_icon.png';
	setTimeout('swapIcon4()', 3200);
}

function swapImages() {
	swapIcon1();
	swapIcon2();
	swapIcon3();
	swapIcon4();
}
