$(function(){
    $(".p1").click(function(){
		$(".part1").show().siblings().hide();
	})
	$(".p2").click(function(){
		$(".part2").show().siblings().hide();
	})
	$(".p3").click(function(){
		$(".part3").show().siblings().hide();
	})
	$(".p4").click(function(){
		$(".part4").show().siblings().hide();
	})
	$(".p5").click(function(){
		$(".part5").show().siblings().hide();
	})
	$(".p6").click(function(){
		$(".part6").show().siblings().hide();
	})
	$(".p7").click(function(){
		$(".part7").show().siblings().hide();
	})
	$(".p8").click(function(){
		$(".part8").show().siblings().hide();
	})
	$(".p9").click(function(){
		$(".part9").show().siblings().hide();
	})
	$(".p10").click(function(){
		$(".part10").show().siblings().hide();
	})
	$(".S_mainNav ul li").click(function(){
		console.log(2);
		$(this).addClass('select').siblings().removeClass('select');
		$(this).css("color","#898989").siblings().css("color","#fff");;
	});
})

