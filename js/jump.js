const mql = window.matchMedia("(max-width: 600px)");
mql.addListener(function(e) {
	if (e.matches) {
		// viewport 宽度小于 600 像素
		//jump to mobile page
		window.location.href = "indexmb.html";
	} else {
		// viewport 宽度大于等于 600 像素
		window.location.href = "indexpc.html";
	}
});
