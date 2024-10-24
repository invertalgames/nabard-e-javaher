$(function ($) {
function motions(){
	//card cords
	var o01 = $('.card.opponent-card.special.miner').offset() || $('body').offset() - 100;
	var o02 = $('.card.opponent-card.special.gem-breaker').offset() || $('body').offset() - 100;
	var o03 = $('.card.opponent-card.special.gem-thief').offset() || $('body').offset() - 100;
	var o1 = $('.card.opponent-card.regular.talc.gem').offset() || $('body').offset() - 100;
	var o2 = $('.card.opponent-card.regular.amber.gem').offset() || $('body').offset() - 100;
	var o3 = $('.card.opponent-card.regular.pearl.gem').offset() || $('body').offset() - 100;
	var o4 = $('.card.opponent-card.regular.rhodochrosite.gem').offset() || $('body').offset() - 100;
	var o5 = $('.card.opponent-card.regular.apatite.gem').offset() || $('body').offset() - 100;
	var o6 = $('.card.opponent-card.regular.jade.gem').offset() || $('body').offset() - 100;
	var o7 = $('.card.opponent-card.royal.amethyst.gem').offset() || $('body').offset() - 100;
	var o8 = $('.card.opponent-card.royal.alexandrite.gem').offset() || $('body').offset() - 100;
	var o9 = $('.card.opponent-card.royal.ruby.gem').offset() || $('body').offset() - 100;
	var o10 = $('.card.opponent-card.royal.diamond.gem').offset() || $('body').offset() - 100;
	var p01 = $('.card.player-card.special.miner').offset() || $('body').offset() - 100;
	var p02 = $('.card.player-card.special.gem-breaker').offset() || $('body').offset() - 100;
	var p03 = $('.card.player-card.special.gem-thief').offset() || $('body').offset() - 100;
	var p1 = $('.card.player-card.regular.talc.gem').offset() || $('body').offset() - 100;
	var p2 = $('.card.player-card.regular.amber.gem').offset() || $('body').offset() - 100;
	var p3 = $('.card.player-card.regular.pearl.gem').offset() || $('body').offset() - 100;
	var p4 = $('.card.player-card.regular.rhodochrosite.gem').offset() || $('body').offset() - 100;
	var p5 = $('.card.player-card.regular.apatite.gem').offset() || $('body').offset() - 100;
	var p6 = $('.card.player-card.regular.jade.gem').offset() || $('body').offset() - 100;
	var p7 = $('.card.player-card.royal.amethyst.gem').offset() || $('body').offset() - 100;
	var p8 = $('.card.player-card.royal.alexandrite.gem').offset() || $('body').offset() - 100;
	var p9 = $('.card.player-card.royal.ruby.gem').offset() || $('body').offset() - 100;
	var p10 = $('.card.player-card.royal.diamond.gem').offset() || $('body').offset() - 100;
	//card face-down visibility
	var o01op = $('.card.opponent-card.special.miner').parent().hasClass('attack-line');
	var o02op = $('.card.opponent-card.special.gem-breaker').parent().hasClass('attack-line');
	var o03op = $('.card.opponent-card.special.gem-thief').parent().hasClass('attack-line');
	var o1op = $('.card.opponent-card.regular.talc.gem').parent().hasClass('attack-line');
	var o2op = $('.card.opponent-card.regular.amber.gem').parent().hasClass('attack-line');
	var o3op = $('.card.opponent-card.regular.pearl.gem').parent().hasClass('attack-line');
	var o4op = $('.card.opponent-card.regular.rhodochrosite.gem').parent().hasClass('attack-line');
	var o5op = $('.card.opponent-card.regular.apatite.gem').parent().hasClass('attack-line');
	var o6op = $('.card.opponent-card.regular.jade.gem').parent().hasClass('attack-line');
	var o7op = $('.card.opponent-card.royal.amethyst.gem').parent().hasClass('attack-line');
	var o8op = $('.card.opponent-card.royal.alexandrite.gem').parent().hasClass('attack-line');
	var o9op = $('.card.opponent-card.royal.ruby.gem').parent().hasClass('attack-line');
	var o10op = $('.card.opponent-card.royal.diamond.gem').parent().hasClass('attack-line');
	var p01op = $('.card.player-card.special.miner').parent().hasClass('attack-line');
	var p02op = $('.card.player-card.special.gem-breaker').parent().hasClass('attack-line');
	var p03op = $('.card.player-card.special.gem-thief').parent().hasClass('attack-line');
	var p1op = $('.card.player-card.regular.talc.gem').parent().hasClass('attack-line');
	var p2op = $('.card.player-card.regular.amber.gem').parent().hasClass('attack-line');
	var p3op = $('.card.player-card.regular.pearl.gem').parent().hasClass('attack-line');
	var p4op = $('.card.player-card.regular.rhodochrosite.gem').parent().hasClass('attack-line');
	var p5op = $('.card.player-card.regular.apatite.gem').parent().hasClass('attack-line');
	var p6op = $('.card.player-card.regular.jade.gem').parent().hasClass('attack-line');
	var p7op = $('.card.player-card.royal.amethyst.gem').parent().hasClass('attack-line');
	var p8op = $('.card.player-card.royal.alexandrite.gem').parent().hasClass('attack-line');
	var p9op = $('.card.player-card.royal.ruby.gem').parent().hasClass('attack-line');
	var p10op = $('.card.player-card.royal.diamond.gem').parent().hasClass('attack-line');
	//motions of position
	$('.motion-card.opponent-card.special.miner').css({'top': o01.top + 'px', 'left': o01.left });
	$('.motion-card.opponent-card.special.gem-breaker').css({'top': o02.top + 'px', 'left': o02.left });
	$('.motion-card.opponent-card.special.gem-thief').css({'top': o03.top + 'px', 'left': o03.left });
	$('.motion-card.opponent-card.regular.talc.gem').css({'top': o1.top + 'px', 'left': o1.left });
	$('.motion-card.opponent-card.regular.amber.gem').css({'top': o2.top + 'px', 'left': o2.left });
	$('.motion-card.opponent-card.regular.pearl.gem').css({'top': o3.top + 'px', 'left': o3.left });
	$('.motion-card.opponent-card.regular.rhodochrosite.gem').css({'top': o4.top + 'px', 'left': o4.left });
	$('.motion-card.opponent-card.regular.apatite.gem').css({'top': o5.top + 'px', 'left': o5.left });
	$('.motion-card.opponent-card.regular.jade.gem').css({'top': o6.top + 'px', 'left': o6.left });
	$('.motion-card.opponent-card.royal.amethyst.gem').css({'top': o7.top + 'px', 'left': o7.left });
	$('.motion-card.opponent-card.royal.alexandrite.gem').css({'top': o8.top + 'px', 'left': o8.left });
	$('.motion-card.opponent-card.royal.ruby.gem').css({'top': o9.top + 'px', 'left': o9.left });
	$('.motion-card.opponent-card.royal.diamond.gem').css({'top': o10.top + 'px', 'left': o10.left });
	$('.motion-card.player-card.special.miner').css({'top': p01.top + 'px', 'left': p01.left });
	$('.motion-card.player-card.special.gem-breaker').css({'top': p02.top + 'px', 'left': p02.left });
	$('.motion-card.player-card.special.gem-thief').css({'top': p03.top + 'px', 'left': p03.left });
	$('.motion-card.player-card.regular.talc.gem').css({'top': p1.top + 'px', 'left': p1.left });
	$('.motion-card.player-card.regular.amber.gem').css({'top': p2.top + 'px', 'left': p2.left });
	$('.motion-card.player-card.regular.pearl.gem').css({'top': p3.top + 'px', 'left': p3.left });
	$('.motion-card.player-card.regular.rhodochrosite.gem').css({'top': p4.top + 'px', 'left': p4.left });
	$('.motion-card.player-card.regular.apatite.gem').css({'top': p5.top + 'px', 'left': p5.left });
	$('.motion-card.player-card.regular.jade.gem').css({'top': p6.top + 'px', 'left': p6.left });
	$('.motion-card.player-card.royal.amethyst.gem').css({'top': p7.top + 'px', 'left': p7.left });
	$('.motion-card.player-card.royal.alexandrite.gem').css({'top': p8.top + 'px', 'left': p8.left });
	$('.motion-card.player-card.royal.ruby.gem').css({'top': p9.top + 'px', 'left': p9.left });
	$('.motion-card.player-card.royal.diamond.gem').css({'top': p10.top + 'px', 'left': p10.left });
	//motions of opacity
	if(o01op==false){$('.motion-card.opponent-card.special.miner').addClass('face-down');} else{$('.motion-card.opponent-card.special.miner').removeClass('face-down');}
	if(o02op==false){$('.motion-card.opponent-card.special.gem-breaker').addClass('face-down');} else{$('.motion-card.opponent-card.special.gem-breaker').removeClass('face-down');}
	if(o03op==false){$('.motion-card.opponent-card.special.gem-thief').addClass('face-down');} else{$('.motion-card.opponent-card.special.gem-thief').removeClass('face-down');}
	if(o1op==false){$('.motion-card.opponent-card.regular.talc.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.talc.gem').removeClass('face-down');}
	if(o2op==false){$('.motion-card.opponent-card.regular.amber.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.amber.gem').removeClass('face-down');}
	if(o3op==false){$('.motion-card.opponent-card.regular.pearl.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.pearl.gem').removeClass('face-down');}
	if(o4op==false){$('.motion-card.opponent-card.regular.rhodochrosite.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.rhodochrosite.gem').removeClass('face-down');}
	if(o5op==false){$('.motion-card.opponent-card.regular.apatite.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.apatite.gem').removeClass('face-down');}
	if(o6op==false){$('.motion-card.opponent-card.regular.jade.gem').addClass('face-down');} else{$('.motion-card.opponent-card.regular.jade.gem').removeClass('face-down');}
	if(o7op==false){$('.motion-card.opponent-card.royal.amethyst.gem').addClass('face-down');} else{$('.motion-card.opponent-card.royal.amethyst.gem').removeClass('face-down');}
	if(o8op==false){$('.motion-card.opponent-card.royal.alexandrite.gem').addClass('face-down');} else{$('.motion-card.opponent-card.royal.alexandrite.gem').removeClass('face-down');}
	if(o9op==false){$('.motion-card.opponent-card.royal.ruby.gem').addClass('face-down');} else{$('.motion-card.opponent-card.royal.ruby.gem').removeClass('face-down');}
	if(o10op==false){$('.motion-card.opponent-card.royal.diamond.gem').addClass('face-down');} else{$('.motion-card.opponent-card.royal.diamond.gem').removeClass('face-down');}
	if(p01op==false){$('.motion-card.player-card.special.miner').addClass('face-down');} else{$('.motion-card.player-card.special.miner').removeClass('face-down');}
	if(p02op==false){$('.motion-card.player-card.special.gem-breaker').addClass('face-down');} else{$('.motion-card.player-card.special.gem-breaker').removeClass('face-down');}
	if(p03op==false){$('.motion-card.player-card.special.gem-thief').addClass('face-down');} else{$('.motion-card.player-card.special.gem-thief').removeClass('face-down');}
	if(p1op==false){$('.motion-card.player-card.regular.talc.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.talc.gem').removeClass('face-down');}
	if(p2op==false){$('.motion-card.player-card.regular.amber.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.amber.gem').removeClass('face-down');}
	if(p3op==false){$('.motion-card.player-card.regular.pearl.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.pearl.gem').removeClass('face-down');}
	if(p4op==false){$('.motion-card.player-card.regular.rhodochrosite.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.rhodochrosite.gem').removeClass('face-down');}
	if(p5op==false){$('.motion-card.player-card.regular.apatite.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.apatite.gem').removeClass('face-down');}
	if(p6op==false){$('.motion-card.player-card.regular.jade.gem').addClass('face-down');} else{$('.motion-card.player-card.regular.jade.gem').removeClass('face-down');}
	if(p7op==false){$('.motion-card.player-card.royal.amethyst.gem').addClass('face-down');} else{$('.motion-card.player-card.royal.amethyst.gem').removeClass('face-down');}
	if(p8op==false){$('.motion-card.player-card.royal.alexandrite.gem').addClass('face-down');} else{$('.motion-card.player-card.royal.alexandrite.gem').removeClass('face-down');}
	if(p9op==false){$('.motion-card.player-card.royal.ruby.gem').addClass('face-down');} else{$('.motion-card.player-card.royal.ruby.gem').removeClass('face-down');}
	if(p10op==false){$('.motion-card.player-card.royal.diamond.gem').addClass('face-down');} else{$('.motion-card.player-card.royal.diamond.gem').removeClass('face-down');}
}
motions();
	//when you push the start button
    $.fn.start = function() {
		motions();
		//hide cards
		$('.card').css({'opacity':'0'});
		//set class of start
		$('body').addClass('started');
		//show motion cards
		$('.motion-card').css({'opacity':'1'});
		//motions
		motions();
		//disable the drag effect
		$('.draggable').draggable({
		  disabled: true
		});
		//disable the cards
		$('.card').addClass('pointer-events-none');
		//remove the draggable class
		$('.draggable').removeClass('draggable');
		//remove the start button
		$('.start').fadeOut(500);
		setTimeout(function(){$('.start').remove();}, 500);
		setTimeout(function(){
		//calculate the sum of the opponent's attack points
		var opponent_a_attack_point = parseFloat($('.opponent-a-attack .card').attr('data-point')),
			opponent_b_attack_point = parseFloat($('.opponent-b-attack .card').attr('data-point')),
			opponent_c_attack_point = parseFloat($('.opponent-c-attack .card').attr('data-point')),
			opponent_d_attack_point = parseFloat($('.opponent-d-attack .card').attr('data-point')),
			opponent_attack_point = opponent_a_attack_point + opponent_b_attack_point + opponent_c_attack_point + opponent_d_attack_point,
		//calculate the sum of the player's attack points
			player_a_attack_point = parseFloat($('.player-a-attack .card').attr('data-point')),
			player_b_attack_point = parseFloat($('.player-b-attack .card').attr('data-point')),
			player_c_attack_point = parseFloat($('.player-c-attack .card').attr('data-point')),
			player_d_attack_point = parseFloat($('.player-d-attack .card').attr('data-point'));
			player_attack_point = player_a_attack_point + player_b_attack_point + player_c_attack_point + player_d_attack_point;
		
		//alert the results
		alert('Opponent Attack Points = ' + opponent_attack_point + '\nPlayer Attack Points = ' + player_attack_point);
		
		//check if the opponent attacks first
		if(opponent_attack_point > player_attack_point){
			alert("Your opponent has the higher attack points. He attacks first.");
			$('html').opponent_turn();
		}

		//check if the player attacks first
		if(opponent_attack_point < player_attack_point){
			alert("You have the higher attack points. You attack first.");
			$('html').player_turn();
		}
		
		//check if they are draw
		if(opponent_attack_point == player_attack_point){
			//alert("Same Attack Points!");
			
			//sort the oppoinent's attack points
			var opponent_attack_point_array = [opponent_a_attack_point, opponent_b_attack_point, opponent_c_attack_point, opponent_d_attack_point];
			opponent_attack_point_array.sort(function(a, b) {
			  return b - a;
			});
			
			//sort the player's attack points
			var player_attack_point_array = [player_a_attack_point, player_b_attack_point, player_c_attack_point, player_d_attack_point];
			player_attack_point_array.sort(function(a, b) {
			  return b - a;
			});
			
			//alert the results
			alert('Opponent Strongest Gem = ' + opponent_attack_point_array[0] + '\nPlayer Strongest Gem = ' + player_attack_point_array[0]);

			//check if the opponent attacks first
			if(opponent_attack_point_array[0] > player_attack_point_array[0]){
				alert("Your opponent has the strongest card in the attack line. He attacks first.");
				$('html').opponent_turn();
			}
			//check if the player attacks first
			if(opponent_attack_point_array[0] < player_attack_point_array[0]){
				alert("You have the strongest card in the attack line. You attack first.");
				$('html').player_turn();
			}
			
			//check if they are draw
			if(opponent_attack_point_array[0] == player_attack_point_array[0]){
				alert("Same Gems!");
				//check if the opponent attacks first
				if(opponent_attack_point_array[1] > player_attack_point_array[1]){
					alert("But your opponent has stronger cards in the attack line. He attacks first.");
					$('html').opponent_turn();
				}
				//check if the player attacks first
				if(opponent_attack_point_array[1] < player_attack_point_array[1]){
					alert("But you have stronger cards in the attack line. You attack first.");
					$('html').player_turn();
				}
				if(opponent_attack_point_array[1] == player_attack_point_array[1]){
					if(opponent_attack_point_array[2] > player_attack_point_array[2]){
						alert("But your opponent has stronger cards in the attack line. He attacks first.");
						$('html').opponent_turn();
					}
					//check if the player attacks first
					if(opponent_attack_point_array[2] < player_attack_point_array[2]){
						alert("But you have stronger cards in the attack line. You attack first.");
						$('html').player_turn();
					}
					
					//check if the player they are draw
					if(opponent_attack_point_array[2] == player_attack_point_array[2]){
						//choose the attacker randomly
						alert("Let's choose the attacker randomly.");
						var randomAttacker = 1 + Math.floor(Math.random() * 2);
						if (randomAttacker == 1){
							alert("Your opponent attacks first.");
							$('html').opponent_turn();
						}
						else{
							alert("You attack first.");
							$('html').player_turn();
						}
					}
				}
			}
		}
		}, 1000);
    };
});