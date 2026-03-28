// JavaScript Document
$(document).ready(function() {
	
	var k=0;
	var pause=0;
	var play=0;
	$('#pause').click(function(){
		$('#pause').fadeOut();
		$('#play').fadeIn();
		$("audio").prop('muted', true); //mute
	})
	$('#play').click(function(){
		$('#play').fadeOut();
		$('#pause').fadeIn();
		$("audio").prop('muted', false); //mute
	})
	share_blinkon();
	function share_blinkon()
	{
		setTimeout(function(){
		$('.share_blink').css({'display':'block'});
		},500)
		setTimeout(function(){
		$('.share_blink').css({'display':'none'});
		},1000)
		setTimeout(function(){
		share_blinkon();
		},1000)
		
	}
	//sky();
	$('.story2_blue,.story2_red').animate({'opacity':'0'});
	$('.story2_red').animate({'opacity':'1'},500);
	
	$('.change_story').mouseenter(function(){
		$('.change_story_button').css({'opacity':'0','transition':'1s'});
		$(this).siblings('.change_story').css({'opacity':'1','transition':'1s'})
	})
	$('.change_story').mouseleave(function(){
		$('.change_story_button').css({'opacity':'.5','transition':'1s'});
		$(this).siblings('.change_story').css({'opacity':'0','transition':'1s'})
	})
	$('.three .story2_blue').mouseenter(function(){
		$('.bluecrow img').animate({'margin-left':'-10vw'},25000);
	});
	$('.two .story1_red').mouseenter(function(){
		$('.story1_red3').css({'margin-left':'100vw','transition':'100s'});
	});
	/*$('.story1_blue,.story2_blue,.story3_blue,.boat').mouseenter(function(){
		$('.redblink').css({'opacity':'1','transition':'1s'});
		setTimeout(function(){$('.redblink').css({'opacity':'0','transition':'1s'});},2000);
	});
	$('.story1_red,.story2_red,.story3_red,.boat').mouseenter(function(){
		$('.blueblink').css({'opacity':'1','transition':'1s'});
		setTimeout(function(){$('.blueblink').css({'opacity':'0','transition':'1s'});},2000);
	});*/
	$('.nine_bar,.nineback_bar').hover(function(){
		$(this).css({'cursor':'pointer'});
	});
	$('.three').mouseenter(function(){
		setTimeout(function(){$('.whiteball').css({'margin-left':'-3.6vw','transition':'.5s'});},500);
		setTimeout(function(){$('.redball').css({'margin-left':'-9vw','margin-top':'2vh','transition':'.5s'});},1000);
		setTimeout(function(){$('.redball').css({'display':'none'});},1550);
		
	});
	$('.bottleo').mouseenter(function(){
		$(this).css({'opacity':'1','transition':'1s'});
		$('.bottlec').css({'opacity':'0','transition':'1s'});
	});
	$('.bottleo').mouseleave(function(){
		$(this).css({'opacity':'0','transition':'1s'});
		$('.bottlec').css({'opacity':'1','transition':'1s'});
	});
	
	//Zoom
	/*var $mouseX = 200, $mouseY = 200;
	var $xp = 0, $yp =0;
	var $startpoint=$('.preview').width();
	$('.boxes img').mousemove(function(e){
		
	$mouseX = e.pageX-($startpoint/2);
	$mouseY = e.pageY-($startpoint/2);    
	});
	
	var $loop = setInterval(function(){
	// change 12 to alter damping higher is slower
	$xp += (($mouseX - $xp)/6);
	$yp += (($mouseY - $yp)/6);
	$(".preview").css({left:$xp +'px', top:$yp +'px'});  
	}, 30);	*/
	//boat shake
	function floating(k)
	{
		if(k==0)
		{
			setTimeout(function(){$('.boat').animate({'margin-top':'0vh'},1000)},100);
			setTimeout(function(){$('.story2_blue4 img').animate({'margin-top':'24vh'},1000)},100);
			setTimeout(function(){$('.boat').animate({'margin-top':'1vh'},1000)},100);
			setTimeout(function(){$('.story2_blue4 img').animate({'margin-top':'25vh'},1000)},100);
			setTimeout(function(){floating(k=0);},100);
		}
		if(k==1)
		{
			$('.boat').animate({'margin-top':'0vh'},1000);
			$('.bluebottle img').animate({'margin-top':'21vh'},1000);
		}
	}
	function sky()
	{
		setTimeout(function(){$('.story2_blue .clouds').animate({'margin-top':'-=1vh'},2000)},100);
		setTimeout(function(){sky();},100);
	}
	if(k==0)
	{
		floating(k);
	}
	
	function checkWidth() {
		//preloader area
		var ht=$(window).height();
		var wt=$(window).width();
		var wayht=$('#way').height();
		var pre_wayTop=((ht/2) - (wayht/2));
		$('#way').css({'margin-top':pre_wayTop});
		$('.preloader_bottle').css({'margin-top':pre_wayTop-30});
		
		$('#drop').css({'margin-top':pre_wayTop});
		//$('#preload_bottle,#preload_bottlegif').css({'margin-top':pre_wayTop+220});
		$('.preloader_bottle_shadow').css({'margin-top':(pre_wayTop+wayht-50)});
		$('#drop,#way,#loading_txt,.preloader_bottle_shadow').fadeIn(500);
		$('#loading_txt').css({'margin-top':pre_wayTop+220});
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+8},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'372px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+32},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'385px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+76},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'410px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-180deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+55},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'500px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+166},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'455px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(180deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+125},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'477px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-180deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+76},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'455px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+100},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'432px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+167},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'385px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+190},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(-90deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-left':'475px'},400)},100);
		setTimeout(function(){$('#drop').animate({'transform':'rotate(0deg)'},400)},100);
		setTimeout(function(){$('#drop').animate({'margin-top':pre_wayTop+1000},400)},100);
		setTimeout(function(){$('#drop').css({'display':'none'})},20000);
		setTimeout(function(){$('#preload_bottle').css({'display':'none'})},18400);
		setTimeout(function(){$('.preloader_bottle,.preloader_bottle_shadow').animate({'opacity':'1','transition':'2s'},100)},18500);
		setTimeout(function(){$('#way,#loading_txt').animate({'opacity':'0','transition':'1s'},100)},18500);
		
		/*setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(10deg)'},100)},18500);
		setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(-10deg)'},100)},18600);
		setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(10deg)'},100)},18700);
		setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(-10deg)'},100)},18800);
		setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(10deg)'},100)},18900);
		setTimeout(function(){$('#preload_bottlegif').animate({'transform':'rotate(0deg)'},100)},19000);*/
		
		
    	//Side bar
		var dotpos=0;
		var i=1;
		var arrow_mid=$('.sidebar_nameboard').height();
		for(i=1; i<=10; i++)
		{
			dotpos=$('#dot'+i).offset();
			$('#dot'+i+'1').css({'margin-top':dotpos.top});
			$('#dot'+i+'11').css({'margin-top':(dotpos.top+(arrow_mid/3.33))});
		}
			
			dotpos=$('#dot011').offset();
			$('#dot0111').css({'margin-top':dotpos.top});
			$('#dot01111').css({'margin-top':(dotpos.top+(arrow_mid/3.33))});
			
			dotpos=$('#dot012').offset();
			$('#dot0121').css({'margin-top':dotpos.top});
			$('#dot01211').css({'margin-top':(dotpos.top+(arrow_mid/3.33))});
			
		$('.sidebar_dots span,.sidebar_dots img').mouseover(function(){
			var sideid=$(this).parent().attr('id');
			$('#'+sideid+'1').css({'width':'15vw','display':'block'});
			//$('#'+sideid+'11').fadeIn(100);
		})
		$('.sidebar_dots span,.sidebar_dots img').mouseout(function(){
			var sideid=$(this).parent().attr('id');
			//$('#'+sideid+'11').fadeOut(400);
			$('#'+sideid+'1').css({'width':'15vw','display':'none'});
		})
		$('.globeh').mouseover(function(){
			$(this).css({'opacity':'1'});
		})
		$('.globeh').mouseout(function(){
			$(this).css({'opacity':'0'});
		})
		$('.homeh').mouseover(function(){
			$(this).css({'opacity':'1'});
		})
		$('.homeh').mouseout(function(){
			$(this).css({'opacity':'0'});
		})
		
		
		//product boxes arrangement
		$('.boxes img').each(function(index, element) {
			$(this).css({'width':'15vw','margin-left':'16.75vw'});
			$(this).css({'position':'absolute','bottom':'0'});
			$(this).siblings('.pricetag').css({'width':'0vw','height':'0vw','margin-left':'30vw','margin-top':'15vh','transition':'2s'});
        });
		
		//Cart page door open
			
		$('.eight').mouseenter(function(){
			$('.leftdoor').css({'margin-left':'-48.5vw','transition': '2s'});
			$('.rightdoor').css({'margin-left':'100vw','transition': '2s'});
			$('.pricetag').css({'width':'10vw','height':'10vw','transition':'2s'});
			setTimeout(function(){$('.arrows img').css({'display':'block','z-index':'25'})},2000);
			
		})
		$('body').mouseleave(function(){
			$('#doormusic').trigger('stop');
			$('.leftdoor').css({'margin-left':'0vw','transition': '2s'});
			$('.rightdoor').css({'margin-left':'48.5vw','transition': '2s'});
			$('.pricetag').css({'width':'0vw','height':'0vw','transition':'2s'});
			$('.arrows img').css({'display':'none','z-index':'0'});
		})
		$('.seven,.nine').mouseover(function(){
			$('.leftdoor').css({'margin-left':'0vw','transition': '2s'});
			$('.rightdoor').css({'margin-left':'48.5vw','transition': '2s'});
			$('.pricetag').css({'width':'0vw','height':'0vw','transition':'2s'});
			$('.arrows img').css({'display':'none','z-index':'0'});
		})
		//nav button
		var lft=0;
		var rgt=2;
		var x=0;
		var y=0;
		var p=1;
		$('#rgt').click(function(){
				rgt-=1;
				lft+=1;
				if(rgt<=2  && rgt>=0)
				{
					x+=40;
					y-=40;
					$('.product_placer').animate({'margin-left':'-=97vw'},1000)
					$('#gearmusic').trigger('play');
					$('.product_boxes_sec').animate({'margin-left':'-=97vw'},1000)
					$('.wheelt1 img,.wheelb1 img,.wheelm2 img,.wheelb3 img,.wheelb4 img').animate({'transform':'rotate('+y+'deg)'},1000);
					$('.wheelt2 img,.wheelb2 img,.wheelm1 img').animate({'transform':'rotate('+x+'deg)'},1000);
				}
				else
				{
					x=1000;
					y=-1000;
					$('.product_placer').animate({'margin-left':'0vw'},1000);
					$('.product_boxes_sec').animate({'margin-left':'0vw'},1000);
					$('.wheelt1 img,.wheelb1 img,.wheelm2 img,.wheelb3 img,.wheelb4 img').animate({'transform':'rotate('+y+'deg)'},1000);
					$('.wheelt2 img,.wheelb2 img,.wheelm1 img').animate({'transform':'rotate('+x+'deg)'},1000);
					lft=0;
					rgt=2;
				}
		})
		
		$('#lft').click(function(){
				rgt+=1;
				lft-=1;
				p-=1;
				x-=40;
				y+=40;
				if(lft>0 && lft<=2)
				{
					$('.product_placer').animate({'margin-left':'+=97vw'},1000);
					$('#gearmusic').trigger('play');
					$('.product_boxes_sec').animate({'margin-left':'+=97vw'},1000);
					$('.wheelt1 img,.wheelb1 img,.wheelm2 img,.wheelb3 img,.wheelb4 img').animate({'transform':'rotate('+y+'deg)'},1000);
					$('.wheelt2 img,.wheelb2 img,.wheelm1 img').animate({'transform':'rotate('+x+'deg)'},1000);
				}
				else
				{
					x=-1000;
					y=-1000;
					$('.product_placer').animate({'margin-left':'0vw'},1000)
					$('.product_boxes_sec').animate({'margin-left':'0vw'},1000)
					$('.wheelt1 img,.wheelb1 img,.wheelm2 img,.wheelb3 img,.wheelb4 img').animate({'transform':'rotate('+y+'deg)'},1000);
					$('.wheelt2 img,.wheelb2 img,.wheelm1 img').animate({'transform':'rotate('+x+'deg)'},1000);
					lft=0;
					rgt=2;
				}
		});
		
		//First page (Philosophy)
		/*var k=0;
		function rotation() {

			var $rota = $('.philo_bottle');
			var clk=0;
			var modc=0;
			var deg=0;
			var p=0;
			$rota.click(function(){
				clk=clk+1;
				modc=clk%2;
				deg=Math.random()*10000;
				if(modc==1)
				{
					$('.philo_bottle').animate({'transform':'rotate('+deg+'deg)'},14000);
					p=Math.floor(deg/180);
					if(p%2==0)
					{
						//alert('red');
						setTimeout(function(){$('#red_bottle').fadeIn();
						$('.original_frnt').css({'opacity':'1'});
						$('.flawless_frnt').css({'opacity':'0'});
						$('.change_story').css({'color':'#1b7bbf'});
						$('.original').fadeOut();
						$('.flawless').fadeIn();
						$('#blue_bottle').fadeOut();$('#front_bottle').fadeOut();
						//$('.original').css({'opacity':'1'});$('.flawless').css({'opacity':'0'});
						$('.story2_blue').animate({'opacity':'0'},1000);
						$('.story2_red').animate({'opacity':'1'},1000);
						$('.blue_story').fadeOut();$('.red_story').fadeIn();
						$('.change_story span').html('FLAWLESS');},14000);
						
						
						setTimeout(function(){$('#blue_music').trigger('pause');
						$('#red_music').trigger('play');},14000);
						$('#boatmusic').trigger('pause');
						
					}
					else
					{
						//alert('blue');
						setTimeout(function(){$('#red_bottle').fadeOut();
						$('.original_frnt').css({'opacity':'0'});
						$('.flawless_frnt').css({'opacity':'1'});
						$('.change_story').css({'color':'#dd3832'});
						$('.original').fadeIn();
						$('.flawless').fadeOut();
						$('#blue_bottle').fadeIn();$('#red_bottle').fadeOut();$('#front_bottle').fadeOut();
						//$('.flawless').css({'opacity':'1'});$('.original').css({'opacity':'0'});
						$('.story2_red').animate({'opacity':'0'},1000);
						$('.story2_blue').animate({'opacity':'1'},1000);
						$('.blue_story').fadeIn();$('.red_story').fadeOut();
						$('.change_story span').html('ORIGINAL');
						$('#boatmusic').trigger('play');},14000);
						
						
						setTimeout(function(){$('#blue_music').trigger('play');
						$('#red_music').trigger('pause');},14000);
					}
					$('.hold_rotate').animate({'opacity':0});
					
					setTimeout(function(){$('.hold_rotate').animate({'opacity':1})},14200);
					
				}
				if(modc==0)
				{
					$('#red_bottle').fadeOut();
					$('#blue_bottle').fadeOut();
					$('#front_bottle').fadeIn();
					$('.philo_bottle').animate({'transform':'rotate('+0+'deg)'},2000);
				}
			});
			
			
		}*/
		//rotation();
		$('.change_story').click(function(){
			var storyname=$(this).children('span').html();
			var res = storyname.split(" ");
			if(res=='ORIGINAL')
			{
				$('.original').fadeOut();
				$('.flawless').fadeIn();
				$(this).css({'color':'#1b7bbf'});
				setTimeout(function(){$('.story2_red').animate({'opacity':'1'},1000);
				$('.story2_blue').animate({'opacity':'0'},1000)},0);
				$('.blue_story').fadeOut();
				$('.red_story').fadeIn();
				$('.change_story span').html('FLAWLESS');
				//$(this).css({'background':'url(../images/original.png)','background-size':'contain'});
				$('#red_music').trigger('play');
				$('#blue_music').trigger('pause');
				$('#boatmusic').trigger('pause');
				$('.lighton').css({'display':'none'});
			}
			else
			{
				$('.original').fadeIn();
				$('.flawless').fadeOut();
				$(this).css({'color':'#dd3832'});
				setTimeout(function(){$('.story2_blue').animate({'opacity':'1'},1000);
				$('.story2_red').animate({'opacity':'0'},1000)},0);
				$('.blue_story').fadeIn();$('.red_story').fadeOut();
				$('.change_story span').html('ORIGINAL');
				//$(this).css({'background':'url(../images/flawless.png)','background-size':'contain'});
				$('#red_music').trigger('pause');
				$('#blue_music').trigger('play');
				$('#boatmusic').trigger('play');
			}
		});
		$('.original_frnt').click(function(){
			$(this).css({'opacity':'1'});
			$('.flawless_frnt').css({'opacity':'0'});
			$('.original').fadeOut();
			$('.flawless').fadeIn();
			setTimeout(function(){$('.story2_red').animate({'opacity':'1'},1000);
			$('.story2_blue').animate({'opacity':'0'},1000)},0);
			$('.blue_story').fadeOut();
			$('.red_story').fadeIn();
			$('.change_story span').html('FLAWLESS');
			$('#red_music').trigger('play');
			$('#blue_music').trigger('pause');
			$('#boatmusic').trigger('pause');
			$('.lighton').css({'display':'none'});
			$('html, body').animate({
				scrollTop: $('.two').offset().top
				}, 1000);
		});
		$('.flawless_frnt').click(function(){
			$(this).css({'opacity':'1'});
			$('.original_frnt').css({'opacity':'0'});
			$('.original').fadeIn();
			$('.flawless').fadeOut();
			setTimeout(function(){$('.story2_blue').animate({'opacity':'1'},1000);
			$('.story2_red').animate({'opacity':'0'},1000)},0);
			$('.blue_story').fadeIn();$('.red_story').fadeOut();
			$('.change_story span').html('ORIGINAL');
			$('#red_music').trigger('pause');
			$('#blue_music').trigger('play');
			$('#boatmusic').trigger('play');
			$('html, body').animate({
				scrollTop: $('.two').offset().top
				}, 1000);
		});
		//smoke
		(function () {
				var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
				window.requestAnimationFrame = requestAnimationFrame;
			})();
			
			var canvas = document.getElementById("canvas"),
				ctx = canvas.getContext("2d");
			if (navigator.userAgent.search("Chrome") >= 0) {
				
			canvas.height = $(window).height()*12;
			}
			else
			{
				canvas.height = document.body.offsetHeight;
			}
			//alert(canvas.height);
			canvas.width = 300;
			
			var parts = [],
				minSpawnTime = 40,
				lastTime = new Date().getTime(),
				maxLifeTime = Math.min(5000, (canvas.height/(1.5*60)*1000)),
				emitterX = canvas.width / 2,
				emitterY = canvas.height - 10,
				smokeImage = new Image();
			
			function spawn() {
				if (new Date().getTime() > lastTime + minSpawnTime) {
					lastTime = new Date().getTime();
					parts.push(new smoke(emitterX, emitterY));
				}
			}
			
			function render() {
				var len = parts.length;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			
				while (len--) {
					if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
						parts.splice(len, 1);
					} else {
						parts[len].update();
			
						ctx.save();
						var offsetX = -parts[len].size/1.8,
							offsetY = -parts[len].size/1.8;
					 
						ctx.translate(parts[len].x-offsetX, parts[len].y-offsetY);
						ctx.rotate(parts[len].angle / 180 * Math.PI);
						ctx.globalAlpha  = parts[len].alpha;
						ctx.drawImage(smokeImage, offsetX,offsetY, parts[len].size, parts[len].size);
						ctx.restore();
					}
				}
				spawn();
				requestAnimationFrame(render);
			}
			
			function smoke(x, y, index) {
				this.x = x;
				this.y = y;
			
				this.size = 1;
				this.startSize = 32;
				this.endSize = 40;
			
				this.angle = Math.random() * 359;
			
				this.startLife = new Date().getTime();
				this.lifeTime = 0;
			
				this.velY = -1 - (Math.random()*0.5);
				this.velX = Math.floor(Math.random() * (-6) + 3) / 10;
			}
			
			smoke.prototype.update = function () {
				this.lifeTime = new Date().getTime() - this.startLife;
				this.angle += 0.2;
				
				var lifePerc = ((this.lifeTime / maxLifeTime) * 100);
			
				this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * .1);
			
				this.alpha = 1 - (lifePerc * .01);
				this.alpha = Math.max(this.alpha,0);
				
				this.x += this.velX;
				this.y += this.velY;
			}
			
			smokeImage.src = "http://www.steadface.com/client/krutous/images/smoke.png";
			smokeImage.onload = function () {
				render();
			}
			
			
			window.onresize = resizeMe;
			window.onload = resizeMe;
			function resizeMe() {
			   canvas.height = document.body.offsetHeight;
			}
			
		
		
		// Snow
		$(".snow").each(function() {
			snowEffectBind();
		});
		
		//cocktail page
		//blinking effect
		blink();
		function blink(){
			setTimeout(function(){$('#red_bar_txt_shadowr').css({'display':'none'})},100);
			setTimeout(function(){$('#blink1').css({'opacity':'1'});$('#blink1').siblings('#blink2,#blink3').css({'opacity':'0.5'});},200);
			setTimeout(function(){$('#blink2').css({'opacity':'1'});$('#blink2').siblings('#blink1,#blink3').css({'opacity':'0.5'});},400);
			setTimeout(function(){$('#blink3').css({'opacity':'1'});$('#blink3').siblings('#blink1,#blink2').css({'opacity':'0.5'});},600);
			setTimeout(function(){$('#red_bar_txt_shadowr').css({'display':'block'})},400);
			setTimeout(function(){blink();},600);
			
		}
		var pre=0;
		var nxt=0;
		$('#blue_cocktail_nxt').click(function(){
			nxt=1;
			pre=0;
			$('#cocktail_book_writeup2').fadeIn();
			$('#cocktail_book_writeup1').fadeOut();
		});
		$('#blue_cocktail_pre').click(function(){
			pre=1;
			nxt=0;
			$('#cocktail_book_writeup2').fadeOut();
			$('#cocktail_book_writeup1').fadeIn();
		});
		//Scrolling area
		$('.ArrowHead').css({'transform':'rotate(180deg)'});
		$('.sidebar_dots span,.sidebar_dots img').click(function(){
			$('.ArrowHead').fadeOut();
		});
		
		$('#dot1 img').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.one').offset().top
				}, 1000);
		});
		$('#dot2 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.two').offset().top
				}, 1000);
		});
		$('#dot3 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.three').offset().top
				}, 1000);
		});
		$('#dot4 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.four').offset().top
				}, 1000);
		});
		$('#dot5 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.five').offset().top
				}, 1000);
		});
		$('#dot6 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.six').offset().top
				}, 1000);
		});
		$('#dot7 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.seven').offset().top
				}, 1000);
		});
		$('#dot8 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.eight').offset().top
				}, 1000);
		});
		$('#dot9 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.nine').offset().top
				}, 1000);
		});
		$('#dot10 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.ten').offset().top
				}, 1000);
		});
		$('#dot011 span').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.eleven').offset().top
				}, 1000);
		});
		$('#dot012 img').click(function(){
				var sideid=$(this).parent().attr('id');
				$('#'+sideid+'11').fadeIn(100);
			    $('html, body').animate({
				scrollTop: $('.twelve').offset().top
				}, 1000);
		});
		
		//up and down arrow key actions
		var dwn=0;
		$(window).keypress(function(event)
		{
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '40')
			{
				var scrllpage=Math.floor(window.scrollY/ht);
				dwn=scrllpage+1;
				if(dwn>=12)
				{
					dwn=11;
				}
				$('html, body').animate({
				scrollTop: (dwn*ht)
				}, 1000,'easeOutCirc');
			}
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '38')
			{
				var scrllpage=Math.ceil(window.scrollY/ht);
				dwn=scrllpage-1;
				if(dwn<1)
				{
					dwn=0;
				}
				$('html, body').animate({
				scrollTop: (dwn*ht)
				}, 1000,'easeOutCirc');
			}
		});
		
		//prevent x scrolling
		var ar=new Array(37,39);

		$(document).keydown(function(e) {
			 var key = e.which;
			  //console.log(key);
			  //if(key==35 || key == 36 || key == 37 || key == 39)
			  if($.inArray(key,ar) > -1) {
				  e.preventDefault();
				  return false;
			  }
			  return true;
		});
		
		//Events page
		$('.nine_1').click(function(){
			$(this).css({'width':'80vw','transition':'2s'});
			$(this).siblings('.nine_1').not(this).css({'width':'4vw','transition':'2s'});
		});
		$('.nine').mouseleave(function(){
			$('.nine_1').css({'width':'23vw','transition':'2s'})
		});
		$('.nine_bar').click(function(){
			$('.event_slider').css({'margin-left':'-97vw','transition':'1s'});
			setTimeout(function(){$('.container').css({'display':'block'});},1200);
			
		});
		$('.nineback_bar').click(function(){
			$('.event_slider').css({'margin-left':'0vw','transition':'1s'});
			$('.container').css({'display':'none'});
		});
		//cocltail page
		//blue page
		
		
		$('.wrapper_blue').mousemove(function(){
			$('.lighton').css({'display':'block'});
			$('#switch').trigger('play');
		});
		
		//parallax area
		
		//Story 1
		$(window).scroll(function () {
			var stry1=$('.two').offset().top;
			var boxz1 = $('.two div div img'),
			$window = $(window);
			var scrollTop = $window.scrollTop()-stry1;
			boxz1.each(function(){
				var $this = $(this),
				scrollspeed =parseInt($this.attr('data-scroll-speed')),
				val = - scrollTop / scrollspeed;
				$this.css('transform', 'translateY(' + val + 'px)');	
			});
		});
		
		//Story 2
		$(window).scroll(function () {
			var stry2=$('.three').offset().top;
			var boxz = $('.three div div img'),
			$window = $(window);
			var scrollTop = $window.scrollTop()-stry2;
			boxz.each(function(){
				var $this = $(this),
				scrollspeed =parseInt($this.attr('data-scroll-speed')),
				val = - scrollTop / scrollspeed;
				$this.css('transform', 'translateY(' + val + 'px)');	
			});
		});
		
		
		//Story 3
		$(window).scroll(function () {
			var stry3=$('.four').offset().top;
			var boxz = $('.four div div img,.four div canvas'),
			$window = $(window);
			var scrollTop = $window.scrollTop()-stry3;
			boxz.each(function(){
				var $this = $(this),
				scrollspeed =parseInt($this.attr('data-scroll-speed')),
				val = - scrollTop / scrollspeed;
				$this.css('transform', 'translateY(' + val + 'px)');	
			});
		});
		
		//contact page
		$(window).scroll(function () {
			var con=$('.ten').offset().top;
			var boxz = $('.ten div img'),
			$window = $(window);
			var scrollTop = $window.scrollTop()-con;
			boxz.each(function(){
				var $this = $(this),
				scrollspeed =parseInt($this.attr('data-scroll-speed')),
				val = - scrollTop / scrollspeed;
				$this.css('transform', 'translateY(' + val + 'px)');	
			});
		});
		
		//Awards page
		$(window).scroll(function () {
			var con1=$('.six').offset().top;
			var boxz = $('.six div img'),
			$window = $(window);
			var scrollTop = $window.scrollTop()-con1;
			boxz.each(function(){
				var $this = $(this),
				  scrollspeed =parseInt($this.attr('data-scroll-speed')),
				  val = - scrollTop / scrollspeed;
			  $this.css('transform', 'translateY(' + val + 'px)');
			});
		});
		
		
		//Products page
		$(window).scroll(function () {
			var con2=$('.five').offset().top;
			var boxz = $('.five div img'),
			$window = $(window);
			
				var scrollTop = $window.scrollTop()-con2;
				boxz.each(function(){
					var $this = $(this),
					scrollspeed =parseInt($this.attr('data-scroll-speed')),
					val = - scrollTop / scrollspeed;
					$this.css('transform', 'translateY(' + val+ 'px)');	
				});
			});
			
			//Events page
			$(window).scroll(function () {
			var con2=$('.nine').offset().top;
			var boxz = $('.nine div'),
			$window = $(window);
			
				var scrollTop = $window.scrollTop()-con2;
				boxz.each(function(){
					var $this = $(this),
					scrollspeed =parseInt($this.attr('data-scroll-speed')),
					val = - scrollTop / scrollspeed;
					$this.css('transform', 'translateY(' + val+ 'px)');	
				});
			});
			
			//share page
			$(window).scroll(function () {
			var con3=$('.eleven').offset().top;
			var boxz = $('.eleven div img'),
			$window = $(window);
			
				var scrollTop = $window.scrollTop()-con3;
				boxz.each(function(){
					var $this = $(this),
					scrollspeed =parseInt($this.attr('data-scroll-speed')),
					val = - scrollTop / scrollspeed;
					$this.css('transform', 'translateY(' + val+ 'px)');	
				});
			});
			
			
			//Menu highlight
			$(window).scroll(function () {
				var v=window.scrollY;
				if(v>=0)
				{
					$(".sidebar_dots span").css({'background':'#707070'});
					$('#dot1 img.homeh').css({'opacity':'1'})
				}
				if(v>=$('.two').offset().top)
				{
					$('#dot2 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot2 span')).css({'background':'#707070'});
					$('#dot1 img.homeh').css({'opacity':'0'})
				}
				if(v>=$('.three').offset().top)
				{
					$('#dot3 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot3 span')).css({'background':'#707070'});
				}
				if(v>=$('.four').offset().top)
				{
					$('#dot4 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot4 span')).css({'background':'#707070'});
				}
				if(v>=$('.five').offset().top)
				{
					$('#dot5 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot5 span')).css({'background':'#707070'});
				}
				if(v>=$('.six').offset().top)
				{
					$('#dot6 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot6 span')).css({'background':'#707070'});
				}
				if(v>=$('.seven').offset().top)
				{
					$('#dot7 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot7 span')).css({'background':'#707070'});
				}
				if(v>=$('.eight').offset().top)
				{
					$('#dot8 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot8 span')).css({'background':'#707070'});
				}
				if(v>=$('.nine').offset().top)
				{
					$('#dot9 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot9 span')).css({'background':'#707070'});
				}
				if(v>=$('.ten').offset().top)
				{
					$('#dot10 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot10 span')).css({'background':'#707070'});
				}
				if(v>=$('.eleven').offset().top)
				{
					$('#dot011 span').css({'background':'#fff'});
					$(".sidebar_dots span").not($('#dot011 span')).css({'background':'#707070'});
				}
				if(v>=$('.twelve').offset().top)
				{
					$(".sidebar_dots span").css({'background':'#707070'});
					$('#dot012 img.globeh').css({'opacity':'1'})
				}
			});
			
	}
	$(window).resize(checkWidth).resize();
});