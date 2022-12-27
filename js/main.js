var interv = setInterval(function() {
	//get a random number from 1 to 15
	var random = Math.floor(Math.random() * 15) + 1;
	//get the image element
	var img = document.getElementById("img");
	//set the image source
	img.src = "assets/pic" + (10 + random) + ".jpeg";
}, 10000);
