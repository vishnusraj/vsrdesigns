// JavaScript Document
$(document).ready(function(){
	$('.kruto,.kruto_drop').hover(function(){
		$('.kruto_drop').css({display:'block'});
	})
	$('.kruto,.menu_dropdown').mouseleave(function(){
		$('.kruto_drop').css({display:'none'});
	})
	$('.mystory_d,.story_drop').hover(function(){
		$('.story_drop').css({display:'block'});
	})
	$('.mystory_d,.menu_dropdown').mouseleave(function(){
		$('.story_drop').css({display:'none'});
	})
	function checkWidth() {
			var pagewidth=$(window).width();
			var pageht=$(window).height();
			var btlht=$('.fimg4').height();
			if(pagewidth >= 2800)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:+(pageht-260)+'px'});	
				
				
					var krutoht=$('.one').height()-50;
					var girl1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+240;
					var soulht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+300;
					var cocktailht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+250;
					var navht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height()-400;
					var fameht=$('.one').height()+$('.two').height()+$('.four_1').height()+250;
					var contactht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()+68;
					var locateht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()+$('.five').height()+10;
					var meht1=$('.one').height()+$('.two').height()+250;
					var partyht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+100;
					
					$('.philo').click(function(){
						$('html, body').animate({scrollTop:0}, window.scrollY);
					});
					var mystory=$('.one').height()+$('.two').height()+$('.six_11').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height()+240;
					$('.mystory').click(function(){
						var srllht=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, srllht);
					})
					var tatoogirlht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_2').height()+$('.three').height()+80;
					$('.fimg5').click(function(){
						var ctail=Math.abs(tatoogirlht-window.scrollY);
						$('html, body').animate({scrollTop:+tatoogirlht}, ctail);
					})
					$('.me').click(function(){
						//$('html, body').animate({scrollTop:+meht}, 6000);
						var srllht=Math.abs(meht1-window.scrollY);
						$('html, body').animate({scrollTop:+meht1}, srllht);
					})
					$('.fame').click(function(){
						
						var srllht=Math.abs(fameht-window.scrollY);
						$('html, body').animate({scrollTop:+fameht}, srllht);
						
					});
					$('.party').click(function(){
						
						var par=Math.abs(partyht-window.scrollY);
						$('html, body').animate({scrollTop:+partyht}, par);
					})
					$('.contact').click(function(){
						
						$('.contact0').fadeOut();
						$('.contact1').fadeIn();
						var srllht=Math.abs(contactht-window.scrollY);
						$('html, body').animate({scrollTop:+contactht}, srllht);
						
					});
					$('.fimg4').click(function(){
						var krht=Math.abs(krutoht-window.scrollY);
						$('html, body').animate({scrollTop:+krutoht}, krht);
					});
					$('.fimg1').click(function(){
						var baldht=Math.abs(girl1-window.scrollY);
						$('html, body').animate({scrollTop:+girl1}, baldht);
					})
					$('.fimg3').click(function(){
						var srl=Math.abs(soulht-window.scrollY);
						$('html, body').animate({scrollTop:+soulht}, srl);
					});
					
					var stat4=0;
					$('.cocktails').click(function(){
						
						var ctail=Math.abs(cocktailht-window.scrollY);
						$('html, body').animate({scrollTop:+cocktailht}, ctail);
						
					});
					$('.mystory').click(function(){
						
						var ctail=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, ctail);
						
					});
					$('.locate').click(function(){
						var srllht=Math.abs(locateht-window.scrollY);
						$('.locate0').fadeOut();
						$('.locate1').fadeIn();
						$('html, body').animate({scrollTop:+locateht}, srllht);
					});
			
					$('.bottle_img img.cartoonic').mouseenter(function(){
						$('.bottle_img img.real').fadeIn(100);
						$('.bottle_img img.cartoonic').fadeOut(0);
						$('.two').css({'background-color': '#f5f5f5','-webkit-transition': 'background-color 2000ms linear','-moz-transition': 'background-color 2000ms linear','-o-transition': 'background-color 2000ms linear',' -ms-transition':'background-color 2000ms linear','transition':'background-color 2000ms linear'});
					});
					$('.bottle_img img.real').mouseleave(function(){
						$('.bottle_img img.real').fadeOut(100);
						$('.bottle_img img.cartoonic').fadeIn(0);
						$('.two').css({backgroundColor: '#000'},'slow');
					});
					
	$('.bbottle').mouseenter(function(){
		$('.wbottle').fadeIn(500);
	})	
	$('.wbottle').mouseleave(function(){
		$(this).fadeOut(500);
	})
	
	$('.eventholder').mouseenter(function(){
		$('.irsh,.starkill,.cuban').css({display:'block'});
	});
	$('#irishhouse,#cuban1,#starkill1,.ltback,.rtback,#nex,#pre').css({cursor:'pointer'});
	$('#irishhouse').click(function(){
		$('.cuban,.starkill').not('.irsh').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('#cuban1').click(function(){
		$('.irsh,.starkill').not('.cuban').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	
	$('#starkill1').click(function(){
		$('.irsh,.cuban').not('.starkill').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('.rtback,.ltback').click(function(){
		$('.events').animate({'margin-left':'0%'},1000);
		$('.irsh,.starkill,.cuban').fadeIn(1500);
	
	})
	$('.cuban,.starkill,.irsh').mouseleave(function(){
		$('.events').animate({'margin-left':'0%'},1000);
	})
	$('#cuban1,#starkill1,#irishhouse').css({opacity:'1'});
	
	$('#starkill1').mouseenter(function(){
		$(this).animate({width:'22vw',height:'28vh','margin-left':'62.5vw','margin-top':'1vh'},500);
	});
	$('#starkill1').mouseleave(function(){
		$(this).animate({width:'20vw',height:'26vh','margin-left':'63.5vw','margin-top':'2vh'},500);
	});
	
	$('#cuban1').mouseenter(function(){
		$(this).animate({width:'16.3vw',height:'42.5vh','margin-left':'71.5vw','margin-top':'25.5vh'},500);
	});
	$('#cuban1').mouseleave(function(){
		$(this).animate({width:'14.5vw',height:'39.5vh','margin-left':'72.5vw','margin-top':'27vh'},500);
	});
	
	$('#irishhouse').mouseenter(function(){
		$(this).animate({width:'18vw',height:'28vh','margin-left':'69vw','margin-top':'67vh'},500);
	});
	$('#irishhouse').mouseleave(function(){
		$(this).animate({width:'16vw',height:'24vh','margin-left':'70vw','margin-top':'69vh'},500);
	});
	$('#home').mouseenter(function(){
		$('#homered').show();
	})
	
	var clk=0;
	$('#homered').click(function(){
		clk=1;
		$(this).show();
		$('.kruto').removeClass('red');
	});
	$('#homered').parent('span').siblings().click(function(){
		clk=0;
		$('#homered').hide();
	});
	$('.menu_d_block').click(function(){
		clk=0;
		$('#homered').hide();
	});
	
	
	$('#homered').mouseleave(function(){
		if(clk==0)
		{
			$(this).hide();
		}
	});
	
	
	var cllk=0;
	$('#locate').mouseenter(function(){
		$('#locatered').show();
	})
	
	
	$('#locatered').click(function(){
		cllk=1;
		$(this).show();
	});
	$('#locatered').parent('span').siblings().click(function(){
		cllk=0;
		$('#locatered').hide();
	});
	
	$('#locatered').mouseleave(function(){
		if(cllk==0)
		{
			$(this).hide();
		}
	});
	$('#mir a').mouseenter(function(){
		$(this).css({color:'#f00'})
	})
	$('#mir a').mouseleave(function(){
		$(this).css({color:'#fff'})
	})
	
	
					$(window).scroll(function(){
						var h=window.scrollY;
						if(h==0 || h<=$('.one').height())
						{
							$('#homered').show();
						}
						else
						{
							$('#homered').hide();
						}
					});
					
	
					$(window).scroll(function(){
						var lo=window.scrollY;
						if(lo>=locateht)
						{
							$('#locatered').show();
						}
						else
						{
							$('#locatered').hide();
						}
					});
					
					$(window).scroll(function(){
						var v=window.scrollY;
						if(v>0 && v<$('.one').height())
						{
							$('.mystory_d,.cocktails,.party,.mystory,.kruto').removeClass('red');
							$('.contact').removeClass('active');
						}
					})
					
					$(window).scroll(function(){
						var v=window.scrollY;
						if(v>$('.one').height()-200 && v<girl1)
						{
							$('.kruto').addClass('red');
							$('.mystory_d,.cocktails,.party,.mystory').removeClass('red');
							$('.contact').removeClass('active');
						}
					})
					
					pht1=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_2').height()+100;
					$(window).scroll(function () {
					var v=window.scrollY;
					if(v > (pht1-900) && v < (pht1+700))
						{
							
							$('.three').mouseover(function(){
								$('.zoom img').animate({width:'11%',marginLeft:'32%'},1000);
							});
								var boxz = $('.three div img'),
								$window = $(window);
									var scrollTop = $window.scrollTop()-pht1;
									boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.three div').css({'margin-top':'16.5%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
						
					});
					
					
					$(window).scroll(function () {
					var z=window.scrollY;
					var con=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+60;
					
					if(z > (con-700) && z < (con+700))
						{
							if(z > con-10 && z < locateht)
							{
								$('.contact').addClass('active');
								$('.party').removeClass('red');
								
							}
								var boxz = $('.six_2 div img'),
								$window = $(window);
								var scrollTop = $window.scrollTop()-con;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val + 'px)');	
								});
						}
						
					});
					
					
					$(window).scroll(function () {
						meht=$('.one').height()+$('.two').height()+250;
						var v=window.scrollY;
						if(v > (meht-700) && v < (meht+700))
						{
							var boxz = $('.four_2 div img'),
							$window = $(window);
							
								var scrollTop = $window.scrollTop()-meht;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val+ 'px)');	
								});
						}
					});
					
					pht3=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height()+500;
					$(window).scroll(function () {
						var w=window.scrollY;
						if(w > (pht3-700) && w < (pht3+700))
						{
							if(w > pht3-270 && w < pht3+$('.four_1').height())
							{
								$('.mystory').addClass('red');
								$('.kruto,.mystory_d,.cocktails,.party').removeClass('red');
								$('.contact').removeClass('active');
							}
							var boxz = $('.four_1 div img'),
							$window = $(window);
								var scrollTop = $window.scrollTop()-pht3;
								boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.four_1 div').css({'margin-top':'0%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
					});
					
					$(window).scroll(function(){
					var w=window.scrollY;
					if(w>cocktailht-10 && w<partyht)
					{
							$('.cocktails').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})	
				
				
				var mapht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height()+100+$('.five').height()-110;
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>locateht-10 && w<mapht)
					{
							$('.locate').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})
				
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>partyht-10 && w<contactht-10)
					{
							$('.party').addClass('red');
							$('.kruto,.mystory_d,.mystory,.cocktails').removeClass('red');
							$('.contact').removeClass('active');
					}
				})	
				
				
				$(window).scroll(function () { 
				//You've scrolled this much:
					pht=$('.one').height()+$('.two').height()+$('.four_2').height()-210;
					var v=window.scrollY;
					if(v > (pht-1000) && v<(pht+1000))
					{
						  var boxez = $('.six .cards img'),$window = $(window);
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						$(function(){
						  var boxez = $('.six .chasefametxt img'),$window = $(window);
						  
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						})
					}	
					
			});
			
			
			$(window).scroll(function () { 
				pht10=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+220;
							var v=window.scrollY;
							if(v > (pht10-700) && v<(pht10+700))
								{
									if(v>(pht10))
									{
										$('.mystory_d').addClass('red');
										$('.kruto,.party,.mystory,.cocktails').removeClass('red');
										$('.contact').removeClass('active');
									}
									var boxz = $('.two_1 div img'),
									$window = $(window);
			
									var scrollTop = $window.scrollTop()-pht10;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.two_1 div').css({'margin-top':'3%'});
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
									
							}
			});
			$(window).scroll(function () { 
			   var tatoogirlht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_2').height()+$('.three').height()-110;
							var v=window.scrollY;
							if(v > (tatoogirlht-700) && (tatoogirlht+700))
								{
									var boxz = $('.six_1 div img'),
									$window = $(window);
									var scrollTop = $window.scrollTop()-tatoogirlht;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.six_1 div').css({'margin-top':'6%'});
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
							}
			});		
			}
			
		
			if(pagewidth <= 1700 && pagewidth >1400)
			{
				$('.two').css({'padding-bottom':'0%'});
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:+(pageht-240)+'px'});	
					var krutoht1=$('.one').height()+20;
					var girl1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height();
					var soulht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height();
					var cocktailht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.four_1').height()+$('.six_1').height();
					var navht1=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height();
					var fameht1=$('.one').height()+$('.two').height()+$('.four_1').height()-10;
					var contactht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()-100;
					var locateht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()+$('.five').height()-100;
					var meht=$('.one').height()+$('.two').height()+40;
					var partyht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()-100;
					
					
					$('.philo').click(function(){
						$('html, body').animate({scrollTop:0}, window.scrollY);
					});
					
					var mystory=$('.one').height()+$('.two').height()+$('.six_11').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height();
					$('.fimg2').click(function(){
						var srllht=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, srllht);
					})
					var  tatoogirlht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height();
					$('.fimg5').click(function(){
						var ctail=Math.abs(tatoogirlht-window.scrollY);
						$('html, body').animate({scrollTop:+tatoogirlht}, ctail);
					})
					$('.me').click(function(){
						//$('html, body').animate({scrollTop:+meht}, 6000);
						var srllht=Math.abs(meht-window.scrollY);
						$('html, body').animate({scrollTop:+meht}, srllht);
					})
					$('.fame').click(function(){
						
						var srllht=Math.abs(fameht1-window.scrollY);
						$('html, body').animate({scrollTop:+fameht1}, srllht);
						
					});
					$('.party').click(function(){
						var par=Math.abs(partyht1-window.scrollY);
						$('html, body').animate({scrollTop:+partyht1}, par);
					})
					$('.contact').click(function(){
						
						var srllht=Math.abs(contactht1-window.scrollY);
						$('html, body').animate({scrollTop:+contactht1}, srllht);
						
					});
					
					$('.fimg4').click(function(){
						var krht=Math.abs(krutoht1-window.scrollY);
						$('html, body').animate({scrollTop:+krutoht1}, krht);
					});
					$('.fimg1').click(function(){
						var baldht=Math.abs(girl1-window.scrollY);
						$('html, body').animate({scrollTop:+girl1}, baldht);
					})
					$('.fimg3').click(function(){
						var srl=Math.abs(soulht1-window.scrollY);
						$('html, body').animate({scrollTop:+soulht1}, srl);
					});
					
					var stat4=0;
					$('.cocktails').click(function(){
						
						var ctail=Math.abs(cocktailht1-window.scrollY);
						$('html, body').animate({scrollTop:+cocktailht1}, ctail);
						
					});
					$('.mystory').click(function(){
						
						var ctail=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, ctail);
						
					});
					$('.locate').click(function(){
						var srllht=Math.abs(locateht1-window.scrollY);
						$('.locate0').fadeOut();
						$('.locate1').fadeIn();
						$('html, body').animate({scrollTop:+locateht1}, srllht);
					});
			
					$('.bottle_img img.cartoonic').mouseenter(function(){
						$('.bottle_img img.real').fadeIn(100);
						$('.bottle_img img.cartoonic').fadeOut(0);
						$('.two').css({'background-color': '#f5f5f5','-webkit-transition': 'background-color 2000ms linear','-moz-transition': 'background-color 2000ms linear','-o-transition': 'background-color 2000ms linear',' -ms-transition':'background-color 2000ms linear','transition':'background-color 2000ms linear'});
					});
					$('.bottle_img img.real').mouseleave(function(){
						$('.bottle_img img.real').fadeOut(100);
						$('.bottle_img img.cartoonic').fadeIn(0);
						$('.two').css({backgroundColor: '#000'},'slow');
					});
					
	$('.bbottle').mouseenter(function(){
		$('.wbottle').fadeIn(500);
	})	
	$('.wbottle').mouseleave(function(){
		$(this).fadeOut(500);
	})
	
	$('.eventholder').mouseenter(function(){
		$('.irsh,.starkill,.cuban').css({display:'block'});
	});
	$('#irishhouse,#cuban1,#starkill1,.ltback,.rtback,#nex,#pre').css({cursor:'pointer'});
	$('#irishhouse').click(function(){
		$('.cuban,.starkill').not('.irsh').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('#cuban1').click(function(){
		$('.irsh,.starkill').not('.cuban').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	
	$('#starkill1').click(function(){
		$('.irsh,.cuban').not('.starkill').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('.rtback,.ltback').click(function(){
		$('.events').animate({'margin-left':'0%'},1000);
		$('.irsh,.starkill,.cuban').fadeIn(1500);
	
	})
	$('.cuban,.starkill,.irsh').mouseleave(function(){
		$('.events').animate({'margin-left':'0%'},1000);
	})
	$('#cuban1,#starkill1,#irishhouse').css({opacity:'1'});
	
	$('#starkill1').mouseenter(function(){
		$(this).animate({width:'22vw',height:'28vh','margin-left':'62.5vw','margin-top':'1vh'},500);
	});
	$('#starkill1').mouseleave(function(){
		$(this).animate({width:'20vw',height:'26vh','margin-left':'63.5vw','margin-top':'2vh'},500);
	});
	
	$('#cuban1').mouseenter(function(){
		$(this).animate({width:'16.3vw',height:'42.5vh','margin-left':'71.5vw','margin-top':'25.5vh'},500);
	});
	$('#cuban1').mouseleave(function(){
		$(this).animate({width:'14.5vw',height:'39.5vh','margin-left':'72.5vw','margin-top':'27vh'},500);
	});
	
	$('#irishhouse').mouseenter(function(){
		$(this).animate({width:'18vw',height:'28vh','margin-left':'69vw','margin-top':'67vh'},500);
	});
	$('#irishhouse').mouseleave(function(){
		$(this).animate({width:'16vw',height:'24vh','margin-left':'70vw','margin-top':'69vh'},500);
	});
	
	
	$('#home').mouseenter(function(){
		$('#homered').show();
	})
	
	var clk=0;
	$('#homered').click(function(){
		clk=1;
		$(this).show();
		$('.kruto').removeClass('red');
	});
	$('#homered').parent('span').siblings().click(function(){
		clk=0;
		$('#homered').hide();
	});
	$('.menu_d_block').click(function(){
		clk=0;
		$('#homered').hide();
	});
	
	$('#homered').mouseleave(function(){
		if(clk==0)
		{
			$(this).hide();
		}
	});
	
	
	var cllk=0;
	$('#locate').mouseenter(function(){
		$('#locatered').show();
	})
	
	
	$('#locatered').click(function(){
		cllk=1;
		$(this).show();
	});
	$('#locatered').parent('span').siblings().click(function(){
		cllk=0;
		$('#locatered').hide();
	});
	$('.menu_d_block').click(function(){
		cllk=0;
		$('#locatered').hide();
	});
	
	$('#locatered').mouseleave(function(){
		if(cllk==0)
		{
			$(this).hide();
		}
	});
	$('#mir a').mouseenter(function(){
		$(this).css({color:'#f00'})
	})
	$('#mir a').mouseleave(function(){
		$(this).css({color:'#fff'})
	})
	
					$(window).scroll(function(){
						var h=window.scrollY;
						if(h==0 || h<=$('.one').height()-20)
						{
							$('#homered').show();
						}
						else
						{
							$('#homered').hide();
						}
					});
					
	
					$(window).scroll(function(){
						var lo=window.scrollY;
						if(lo>=locateht1-5)
						{
							$('#locatered').show();
						}
						else
						{
							$('#locatered').hide();
						}
					});
	
	
					$(window).scroll(function(){
						var v=window.scrollY;
						if(v>$('.one').height()-20 && v<girl1)
						{
							$('.kruto').addClass('red');
							$('.mystory_d,.cocktails,.party,.mystory').removeClass('red');
							$('.contact').removeClass('active');
						}
						else
						{
							$('.kruto').removeClass('red');
						}
					})
					
					pht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height();
					$(window).scroll(function () {
					var v=window.scrollY;
					if(v > (pht1-900) && v < (pht1+700))
						{
							
							$('.three').mouseover(function(){
								$('.zoom img').animate({width:'11%',marginLeft:'32%'},1000);
							});
								var boxz = $('.three div img'),
								$window = $(window);
									var scrollTop = $window.scrollTop()-pht1;
									boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.three div').css({'margin-top':'17%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
						
					});
					
					$(window).scroll(function () {
					var v=window.scrollY;
					con=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()-140;
					
					if(v > (con-700) && v < (con+700))
						{
							if(v > con-10 && v < locateht1)
							{
								$('.contact').addClass('active');
								$('.party').removeClass('red');
								
							}
								var boxz = $('.six_2 div img'),
								$window = $(window);
								var scrollTop = $window.scrollTop()-con;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val + 'px)');	
								});
						}
						
					});
					
					
					
					
					
					$(window).scroll(function () {
						meht=$('.one').height()+$('.two').height();
						var v=window.scrollY;
						if(v > (meht-700) && v < (meht+700))
						{
							var boxz = $('.four_2 div img'),
							$window = $(window);
							
								var scrollTop = $window.scrollTop()-meht;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.four_2 div').css({'margin-top':'5%'});
									$this.css('transform', 'translateY(' + val+ 'px)');	
								});
						}
					});
					
					pht3=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height()+300;
					$(window).scroll(function () {
						var w=window.scrollY;
						if(w > (pht3-700) && w < (pht3+700))
						{
							if(w > pht3-320 && w < cocktailht1)
							{
								$('.mystory').addClass('red');
								$('.kruto,.mystory_d,.cocktails,.party').removeClass('red');
								$('.contact').removeClass('active');
							}
							var boxz = $('.four_1 div img'),
							$window = $(window);
								var scrollTop = $window.scrollTop()-pht3;
								boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.four_1 div').css({'margin-top':'-2%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
					});
					
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>cocktailht1-10 && w<partyht1)
					{
							$('.cocktails').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})	
				
				
				var mapht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height()+100+$('.five').height()-110;
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>locateht1-10 && w<mapht)
					{
							$('.locate').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})
				
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>partyht1-10 && w<contactht1-10)
					{
							$('.party').addClass('red');
							$('.kruto,.mystory_d,.mystory,.cocktails').removeClass('red');
							$('.contact').removeClass('active');
					}
				})		
				
				
				$(window).scroll(function () { 
				//You've scrolled this much:
					pht=$('.one').height()+$('.two').height()+$('.four_2').height()-400;
					var v=window.scrollY;
					if(v > (pht-1000) && v<(pht+1000))
					{
						  var boxez = $('.six .cards img'),$window = $(window);
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						$(function(){
						  var boxez = $('.six .chasefametxt img'),$window = $(window);
						  
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						})
					}	
					
			});
			
			
			$(window).scroll(function () { 
				pht10=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height();
							var v=window.scrollY;
							if(v > (pht10-700) && v<(pht10+700))
								{
									if(v>(pht10-80))
									{
										$('.mystory_d').addClass('red');
										$('.kruto,.party,.mystory,.cocktails').removeClass('red');
										$('.contact').removeClass('active');
									}
									var boxz = $('.two_1 div img'),
									$window = $(window);
			
									var scrollTop = $window.scrollTop()-pht10;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
									
							}
			});
			$(window).scroll(function () { 
			  tatoogirlht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()-150;
							var v=window.scrollY;
							if(v > (tatoogirlht1-700) && (tatoogirlht1+700))
								{
									var boxz = $('.six_1 div img'),
									$window = $(window);
									var scrollTop = $window.scrollTop()-tatoogirlht1;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.six_1 div').css({'margin-top':'5%'});
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
							}
			});
			
			
			}
			
			
			
			if(pagewidth < 1400)
			{
					$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:+(pageht-240)+'px'});	
					var krutoht1=$('.one').height()+150;
					var girl1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+230;
					var soulht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+230;
					var cocktailht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.four_1').height()+$('.six_1').height()+230;
					var navht1=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height()+220;
					var fameht1=$('.one').height()+$('.two').height()+$('.four_1').height()+250;
					var contactht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()+160;
					var locateht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+$('.six_11').height()+$('.five').height()+160;
					var meht=$('.one').height()+$('.two').height()+250;
					var partyht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.four_1').height()+$('.three').height()+$('.six_1').height()+$('.four').height()+150;
					
					
					$('.philo').click(function(){
						$('html, body').animate({scrollTop:0}, window.scrollY);
					});
					
					var mystory=$('.one').height()+$('.two').height()+$('.six_11').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height()+230;
					$('.fimg2').click(function(){
						var srllht=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, srllht);
					})
					var  tatoogirlht=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+230;
					$('.fimg5').click(function(){
						var ctail=Math.abs(tatoogirlht-window.scrollY);
						$('html, body').animate({scrollTop:+tatoogirlht}, ctail);
					})
					$('.me').click(function(){
						//$('html, body').animate({scrollTop:+meht}, 6000);
						var srllht=Math.abs(meht-window.scrollY);
						$('html, body').animate({scrollTop:+meht}, srllht);
					})
					$('.fame').click(function(){
						
						var srllht=Math.abs(fameht1-window.scrollY);
						$('html, body').animate({scrollTop:+fameht1}, srllht);
						
					});
					$('.party').click(function(){
						var par=Math.abs(partyht1-window.scrollY);
						$('html, body').animate({scrollTop:+partyht1}, par);
					})
					$('.contact').click(function(){
						
						var srllht=Math.abs(contactht1-window.scrollY);
						$('html, body').animate({scrollTop:+contactht1}, srllht);
						
					});
					
					$('.fimg4').click(function(){
						var krht=Math.abs(krutoht1-window.scrollY);
						$('html, body').animate({scrollTop:+krutoht1}, krht);
					});
					$('.fimg1').click(function(){
						var baldht=Math.abs(girl1-window.scrollY);
						$('html, body').animate({scrollTop:+girl1}, baldht);
					})
					$('.fimg3').click(function(){
						var srl=Math.abs(soulht1-window.scrollY);
						$('html, body').animate({scrollTop:+soulht1}, srl);
					});
					
					var stat4=0;
					$('.cocktails').click(function(){
						
						var ctail=Math.abs(cocktailht1-window.scrollY);
						$('html, body').animate({scrollTop:+cocktailht1}, ctail);
						
					});
					$('.mystory').click(function(){
						
						var ctail=Math.abs(mystory-window.scrollY);
						$('html, body').animate({scrollTop:+mystory}, ctail);
						
					});
					$('.locate').click(function(){
						var srllht=Math.abs(locateht1-window.scrollY);
						$('.locate0').fadeOut();
						$('.locate1').fadeIn();
						$('html, body').animate({scrollTop:+locateht1}, srllht);
					});
			
					$('.bottle_img img.cartoonic').mouseenter(function(){
						$('.bottle_img img.real').fadeIn(100);
						$('.bottle_img img.cartoonic').fadeOut(0);
						$('.two').css({'background-color': '#f5f5f5','-webkit-transition': 'background-color 2000ms linear','-moz-transition': 'background-color 2000ms linear','-o-transition': 'background-color 2000ms linear',' -ms-transition':'background-color 2000ms linear','transition':'background-color 2000ms linear'});
					});
					$('.bottle_img img.real').mouseleave(function(){
						$('.bottle_img img.real').fadeOut(100);
						$('.bottle_img img.cartoonic').fadeIn(0);
						$('.two').css({backgroundColor: '#000'},'slow');
					});
					
	$('.bbottle').mouseenter(function(){
		$('.wbottle').fadeIn(500);
	})	
	$('.wbottle').mouseleave(function(){
		$(this).fadeOut(500);
	})
	
	$('.eventholder').mouseenter(function(){
		$('.irsh,.starkill,.cuban').css({display:'block'});
	});
	$('#irishhouse,#cuban1,#starkill1,.ltback,.rtback,#nex,#pre').css({cursor:'pointer'});
	$('#irishhouse').click(function(){
		$('.cuban,.starkill').not('.irsh').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('#cuban1').click(function(){
		$('.irsh,.starkill').not('.cuban').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	
	$('#starkill1').click(function(){
		$('.irsh,.cuban').not('.starkill').css({display:'none'});
		$('.events').animate({'margin-left':'-100%'},1000);
	});
	$('.rtback,.ltback').click(function(){
		$('.events').animate({'margin-left':'0%'},1000);
		$('.irsh,.starkill,.cuban').fadeIn(1500);
	
	})
	$('.cuban,.starkill,.irsh').mouseleave(function(){
		$('.events').animate({'margin-left':'0%'},1000);
	})
	$('#cuban1,#starkill1,#irishhouse').css({opacity:'1'});
	
	$('#starkill1').mouseenter(function(){
		$(this).animate({width:'22vw',height:'28vh','margin-left':'62.5vw','margin-top':'1vh'},500);
	});
	$('#starkill1').mouseleave(function(){
		$(this).animate({width:'20vw',height:'26vh','margin-left':'63.5vw','margin-top':'2vh'},500);
	});
	
	$('#cuban1').mouseenter(function(){
		$(this).animate({width:'16.3vw',height:'42.5vh','margin-left':'71.5vw','margin-top':'25.5vh'},500);
	});
	$('#cuban1').mouseleave(function(){
		$(this).animate({width:'14.5vw',height:'39.5vh','margin-left':'72.5vw','margin-top':'27vh'},500);
	});
	
	$('#irishhouse').mouseenter(function(){
		$(this).animate({width:'18vw',height:'28vh','margin-left':'69vw','margin-top':'67vh'},500);
	});
	$('#irishhouse').mouseleave(function(){
		$(this).animate({width:'16vw',height:'24vh','margin-left':'70vw','margin-top':'69vh'},500);
	});
	
	$('#home').mouseenter(function(){
		$('#homered').show();
	})
	
	var clk=0;
	$('#homered').click(function(){
		clk=1;
		$(this).show();
		$('.kruto').removeClass('red');
	});
	$('#homered').parent('span').siblings().click(function(){
		clk=0;
		$('#homered').hide();
	});
	$('.menu_d_block').click(function(){
		clk=0;
		$('#homered').hide();
	});
	
	$('#homered').mouseleave(function(){
		if(clk==0)
		{
			$(this).hide();
		}
	});
	
	
	var cllk=0;
	$('#locate').mouseenter(function(){
		$('#locatered').show();
	})
	
	
	$('#locatered').click(function(){
		cllk=1;
		$(this).show();
	});
	$('#locatered').parent('span').siblings().click(function(){
		cllk=0;
		$('#locatered').hide();
	});
	$('.menu_d_block').click(function(){
		cllk=0;
		$('#locatered').hide();
	});
	
	$('#locatered').mouseleave(function(){
		if(cllk==0)
		{
			$(this).hide();
		}
	});
	$('#mir a').mouseenter(function(){
		$(this).css({color:'#f00'})
	})
	$('#mir a').mouseleave(function(){
		$(this).css({color:'#fff'})
	})
	
					$(window).scroll(function(){
						var h=window.scrollY;
						if(h==0 || h<=$('.one').height())
						{
							$('#homered').show();
						}
						else
						{
							$('#homered').hide();
						}
					});
					
	
					$(window).scroll(function(){
						var lo=window.scrollY;
						if(lo>=locateht1-5)
						{
							$('#locatered').show();
						}
						else
						{
							$('#locatered').hide();
						}
					});
	
	
					$(window).scroll(function(){
						var v=window.scrollY;
						if(v>$('.one').height() && v<girl1)
						{
							$('.kruto').addClass('red');
							$('.mystory_d,.cocktails,.party,.mystory').removeClass('red');
							$('.contact').removeClass('active');
						}
						else
						{
							$('.kruto').removeClass('red');
						}
					})
					
					pht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+200;
					$(window).scroll(function () {
					var v=window.scrollY;
					if(v > (pht1-900) && v < (pht1+700))
						{
							
							$('.three').mouseover(function(){
								$('.zoom img').animate({width:'11%',marginLeft:'32%'},1000);
							});
								var boxz = $('.three div img'),
								$window = $(window);
									var scrollTop = $window.scrollTop()-pht1;
									boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.three div').css({'margin-top':'17%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
						
					});
					
					$(window).scroll(function () {
					var v=window.scrollY;
					con=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+20;
					
					if(v > (con-700) && v < (con+700))
						{
							if(v > con-10 && v < locateht1)
							{
								$('.contact').addClass('active');
								$('.party').removeClass('red');
								
							}
								var boxz = $('.six_2 div img'),
								$window = $(window);
								var scrollTop = $window.scrollTop()-con;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val + 'px)');	
								});
						}
						
					});
					
					
					
					
					
					$(window).scroll(function () {
						meht=$('.one').height()+$('.two').height()+100;
						var v=window.scrollY;
						if(v > (meht-700) && v < (meht+700))
						{
							var boxz = $('.four_2 div img'),
							$window = $(window);
							
								var scrollTop = $window.scrollTop()-meht;
								boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.four_2 div').css({'margin-top':'0%'});
									$this.css('transform', 'translateY(' + val+ 'px)');	
								});
						}
					});
					
					pht3=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height()+$('.six_1').height()+300;
					$(window).scroll(function () {
						var w=window.scrollY;
						if(w > (pht3-700) && w < (pht3+700))
						{
							if(w > pht3-100 && w < cocktailht1)
							{
								$('.mystory').addClass('red');
								$('.kruto,.mystory_d,.cocktails,.party').removeClass('red');
								$('.contact').removeClass('active');
							}
							var boxz = $('.four_1 div img'),
							$window = $(window);
								var scrollTop = $window.scrollTop()-pht3;
								boxz.each(function(){
										var $this = $(this),
										scrollspeed =parseInt($this.attr('data-scroll-speed')),
										val = - scrollTop / scrollspeed;
										$('.four_1 div').css({'margin-top':'2%'});
										$this.css('transform', 'translateY(' + val + 'px)');	
									});
						}
					});
					
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>cocktailht1-10 && w<partyht1)
					{
							$('.cocktails').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})	
				
				
				var mapht=$('.one').height()+$('.two').height()+$('.two_1').height()+$('.four').height()+$('.four_1').height()+$('.four_2').height()+$('.three').height()+$('.six').height()+$('.six_1').height()+$('.six_11').height()+$('.six_2').height()+100+$('.five').height()-110;
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>locateht1-10 && w<mapht)
					{
							$('.locate').addClass('red');
							$('.kruto,.mystory_d,.mystory,.party').removeClass('red');
							$('.contact').removeClass('active');
					}
				})
				
				$(window).scroll(function(){
					var w=window.scrollY;
					if(w>partyht1-10 && w<contactht1-10)
					{
							$('.party').addClass('red');
							$('.kruto,.mystory_d,.mystory,.cocktails').removeClass('red');
							$('.contact').removeClass('active');
					}
				})		
				
				
				$(window).scroll(function () { 
				//You've scrolled this much:
					pht=$('.one').height()+$('.two').height()+$('.four_2').height()-210;
					var v=window.scrollY;
					if(v > (pht-1000) && v<(pht+1000))
					{
						  var boxez = $('.six .cards img'),$window = $(window);
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						$(function(){
						  var boxez = $('.six .chasefametxt img'),$window = $(window);
						  
							var scrollTop = $window.scrollTop()-pht;
							boxez.each(function(){
								var $this = $(this),
								  scrollspeed =parseInt($this.attr('data-scroll-speed')),
								  val = - scrollTop / scrollspeed;
							  $this.css('transform', 'translateY(' + val + 'px)');
							});
						})
					}	
					
			});
			
			
			$(window).scroll(function () { 
				pht10=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+150;
							var v=window.scrollY;
							if(v > (pht10-700) && v<(pht10+700))
								{
									if(v>(pht10-80))
									{
										$('.mystory_d').addClass('red');
										$('.kruto,.party,.mystory,.cocktails').removeClass('red');
										$('.contact').removeClass('active');
									}
									var boxz = $('.two_1 div img'),
									$window = $(window);
			
									var scrollTop = $window.scrollTop()-pht10;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
									
							}
			});
			$(window).scroll(function () { 
			  tatoogirlht1=$('.one').height()+$('.two').height()+$('.four_2').height()+$('.six').height()+$('.two_1').height()+$('.three').height();
							var v=window.scrollY;
							if(v > (tatoogirlht1-700) && (tatoogirlht1+700))
								{
									var boxz = $('.six_1 div img'),
									$window = $(window);
									var scrollTop = $window.scrollTop()-tatoogirlht1;
									boxz.each(function(){
									var $this = $(this),
									scrollspeed =parseInt($this.attr('data-scroll-speed')),
									val = - scrollTop / scrollspeed;
									$('.six_1 div').css({'margin-top':'3%'});
									$this.css('transform', 'translateY(' + val + 'px)');		
									});
							}
			});	
			}
			if(pagewidth <2600)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'1380px'});	
			}
			if(pagewidth <2000)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'1025px'});	
			}
			if(pagewidth <1800)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'900px'});	
			}
			if(pagewidth <1600)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'780px'});	
			}
			if(pagewidth <1400)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'740px'});	
			}
			if(pagewidth <1200)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'550px'});	
			}
			if(pagewidth <1000)
			{
				$('.pics_cntnr div, .fpics_cntnr div, .pics_cntnr div img, .fpics_cntnr div img').css({height:'400px'});	
			}
			
			/*if(pagewidth < 2880 && pagewidth >=1920)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:+pageht-220});
			}
			if(pagewidth < 1920 && pagewidth >= 1366)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'728px'});
			}
			if(pagewidth < 1366 && pagewidth >= 1280)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'700px'});
			}
			if(pagewidth < 1280 && pagewidth >= 1024)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'500px'});
			}
			if(pagewidth < 1024 && pagewidth >= 800)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'430px'});
			}
			if(pagewidth < 800 && pagewidth >= 600)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'320px'});
			}
			if(pagewidth < 600 && pagewidth >= 400)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'218px'});
			}
			if(pagewidth < 400)
			{
				$('.pics_cntnr div,.fpics_cntnr div,.pics_cntnr div img,.fpics_cntnr div img').css({height:'160px'});
			}*/
			
			$('.pics_cntnr div.img4 img, .fpics_cntnr div.fimg4 img').css({width:'50%',height:'80%','margin-top':'15%'});
			$('.fimg1 img').mouseenter(function(){
				$('.fpics_cntnr div.fimg1').animate({opacity:'1'},500);
				$('.fpics_cntnr div.fimg1').animate({width:'50%'},300);
			})
			
			$('.fimg1 img').mouseleave(function(){
				$('.fpics_cntnr div.fimg1').animate({width:'24.8%'},300);
				$('.fpics_cntnr div.fimg1').animate({opacity:'0'});
			})
			$('.fimg2 img').mouseenter(function(){
				$('.fpics_cntnr div.fimg2').animate({opacity:'1'});
				$('.fpics_cntnr div.fimg2').animate({width:'50%'},1000);
			})
			$('.fimg2 img').mouseleave(function(){
				$('.fpics_cntnr div.fimg2').animate({width:'24.8%'},1000);
				$('.fpics_cntnr div.fimg2').animate({opacity:'0'});
			})
			$('.fimg3 img').mouseenter(function(){
				$('.fpics_cntnr div.fimg3').animate({opacity:'1'},500);
				$('.fpics_cntnr div.fimg3').animate({width:'50%'},300);
			})
			$('.fimg3 img').mouseleave(function(){
				$('.fpics_cntnr div.fimg3').animate({width:'24.8%'},300);
				$('.fpics_cntnr div.fimg3').animate({opacity:'0'});
			})
			$('.fimg4 img').mouseenter(function(){
				$('.fpics_cntnr div.fimg4').animate({opacity:'1'},500);
			})
			$('.fimg4 img').mouseleave(function(){
				$('.fpics_cntnr div.fimg4').animate({opacity:'0'});
			})
			$('.fimg5 img').mouseenter(function(){
				$('.fpics_cntnr div.fimg5').animate({opacity:'1'},500);
				$('.fpics_cntnr div.fimg5 img').css({'right':'0%'});
				$('.fpics_cntnr div.fimg5').animate({width:'50%'},300);
				
			})
			$('.fimg5 img').mouseleave(function(){
				$('.fpics_cntnr div.fimg5').animate({width:'24.8%'},300);
				$('.fpics_cntnr div.fimg5').animate({opacity:'0'});
				$('.fpics_cntnr div.fimg5 img').css({'right':'0%'});
			})
		}
		
		$(window).resize(checkWidth).resize();
	
	
});
$(document).ready(function(e) {
	
	
	
	$('#y').mouseenter(function(){
		$('#yc').fadeIn();
	})
	$('#yc').mouseleave(function(){
		$(this).fadeOut();
	})
	$('#t').mouseenter(function(){
		$('#tc').fadeIn();
	})
	$('#tc').mouseleave(function(){
		$(this).fadeOut();
	})
	$('#f').mouseenter(function(){
		$('#fc').fadeIn();
	})
	$('#fc').mouseleave(function(){
		$(this).fadeOut();
	})
	
	
});