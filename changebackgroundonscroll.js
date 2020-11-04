<script>
	var bg0 = "assets/images/background0.png"
	var bg1 = "assets/images/background1.png"
	var bg2 = "assets/images/background2.png"
	var bg3 = "assets/images/background3.png"
	var bg4 = "assets/images/background4.png"
	var bg5 = "assets/images/background5.png"
	var bg6 = "assets/images/background6.png"
	var bg7 = "assets/images/background7.png"
	var bg8 = "assets/images/background8.png"
	var bg9 = "assets/images/background9.png"
	$(window).scroll(function(){
		var s = $(window).scrollTop(),
			d = $(document).height(),
			c = $(window).height();
		var scrollPercent = (s / (d - c)) * 100;
		if (scrollPercent > 90)
			$(".backdrop").attr("src", bg9);
		else if (scrollPercent > 80)
			$(".backdrop").attr("src", bg8);
		else if (scrollPercent > 70)
			$(".backdrop").attr("src", bg7);
		else if (scrollPercent > 60)
			$(".backdrop").attr("src", bg6);
		else if (scrollPercent > 50)
			$(".backdrop").attr("src", bg5);
		else if (scrollPercent > 40)
			$(".backdrop").attr("src", bg4);
		else if (scrollPercent > 30)
			$(".backdrop").attr("src", bg3);
		else if (scrollPercent > 20)
			$(".backdrop").attr("src", bg2);
		else if (scrollPercent > 10)
			$(".backdrop").attr("src", bg1);
		else
			$(".backdrop").attr("src", bg0);				
	});
</script>

/*
THE CODE BELOW MUST BE IN THE BODY OF YOUR HTML FILE

<nav class="navbar navbar-default navbar-fixed-top">
	<div class="navbar-header">
		<a href="#top"><img class="backdrop" src="//:0" style="position:fixed; width:100vw; height:100vh; z-index:-5;"></a>
	</div>
</nav>
*/
