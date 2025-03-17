var runtimes;
runtimes = 0;
var timer;
var minertimer;
function settimers(){
	if(runtimes == 0){
		timer = 1000;
		minertimer = 0;
	}
	else if(runtimes != 0){
		timer = 2000;
		minertimer = 1000;
	}
}
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

	//When the attacker attacks
	function attack(){
		$('.card').css({'opacity':'0'});
		$('.motion-card').addClass('motion-effect');
		motions();
		//a counter for attack_bonus
		var i = 1;
		//a timer in milliseconds
		if(runtimes == 0){
			timer = 0;
		}
		else if(runtimes != 0){
			timer = 1000;
		}
		//add the attack bonus to attecker's selected column attack-line card
		var attack_bonus = parseFloat($('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + i/10;
		$('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point', attack_bonus);
		//prevent fighting with unmined miner
		//if attacker's attack-line is a miner
		if ($('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('miner')){
			settimers();
			setTimeout(function(){
			//shuffle the mine
			$('.attacker').randomize('.mine');
			//shuffle the mine
			$('.defender').randomize('.mine');
			$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
			$('.attacker .mine .card:nth-child(1)').insertAfter('.attacker .selected-column .attack-line .insert-after');
			$('.attacker .selected-column .attack-line .insert-after').remove();
			var attacker_miner_bonus = parseFloat($('.attacker .selected-column .attack-line .miner').attr('data-point'));
			var attacker_mined_point = parseFloat($('.attacker .selected-column .attack-line .gem:nth-child(1)').attr('data-special'));
			$('.attacker .selected-column .attack-line .gem:nth-child(1)').attr('data-point', attacker_mined_point + attacker_miner_bonus);
			motions();
			}, minertimer);
		}
		//if defender's attack-line is a miner
		if ($('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('miner')){
			settimers();
			setTimeout(function(){
			//shuffle the mine
			$('.attacker').randomize('.mine');
			//shuffle the mine
			$('.defender').randomize('.mine');
			
			$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
			$('.defender .mine .card:nth-child(1)').insertAfter('.defender .selected-column .attack-line .insert-after');
			$('.defender .selected-column .attack-line .insert-after').remove();
			var defender_miner_bonus = parseFloat($('.defender .selected-column .attack-line .miner').attr('data-point'));
			var defender_mined_point = parseFloat($('.defender .selected-column .attack-line .gem:nth-child(1)').attr('data-special'));
			$('.defender .selected-column .attack-line .gem:nth-child(1)').attr('data-point', defender_mined_point + defender_miner_bonus);
			motions();
			}, minertimer);
		}
		setTimeout(function(){
		if ($('.attacker .selected-column .card').hasClass('card') && $('.defender .selected-column .card').hasClass('card') && !$('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('miner') && !$('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('miner')){
			//define attack points of both players
			var attacker_attack_point = parseFloat($('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point'));
			var defender_attack_point = parseFloat($('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point'));
			//Gem Battle
			//which card is stronger? send the weaker to the mine
			if (attacker_attack_point > defender_attack_point && $('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('gem') && $('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('gem')){
				//defender attack-line is defeated and sent to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.defender .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.defender .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//defender trap comes forward
				$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
				$('.defender .selected-column .trap-line .card').insertAfter('.defender .selected-column .attack-line .insert-after');
				$('.defender .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to defender's selected column attack-line card
				var defender_trap_bonus1 = parseFloat($('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + 0.1 + i/10;
				$('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point', defender_trap_bonus1);
				
			}
			else if (attacker_attack_point < defender_attack_point && $('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('gem') && $('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('gem')){
				//attacker attack-line is defeated and sent to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.attacker .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.attacker .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//attacker trap comes forward
				$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
				$('.attacker .selected-column .trap-line .card').insertAfter('.attacker .selected-column .attack-line .insert-after');
				$('.attacker .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to defender's selected column attack-line card
				var attacker_trap_bonus1 = parseFloat($('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + i/10;
				$('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point', attacker_trap_bonus1);
			}
			else if (attacker_attack_point == defender_attack_point && $('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('gem') && $('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('gem')){
				console.log("Equality Error:\ndefender attack-line:" + $('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point') + "\ndefender attack-line: " + $('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point'));
			}
			//Gem & Gem-Breaker Battle
			//if there is a gem-breaker in attacker's attack-line and it faces with a gem
			else if ($('.attacker .selected-column .attack-line .card').hasClass('gem-breaker') && $('.defender .selected-column .attack-line .card').hasClass('gem')){
				//attacker's gem-breaker goes to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.attacker .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.attacker .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//attacker trap comes forward
				$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
				$('.attacker .selected-column .trap-line .card').insertAfter('.attacker .selected-column .attack-line .insert-after');
				$('.attacker .selected-column .attack-line .insert-after').remove();
				//defender attack-line is defeated and sent to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.defender .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.defender .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//defender trap comes forward
				$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
				$('.defender .selected-column .trap-line .card').insertAfter('.defender .selected-column .attack-line .insert-after');
				$('.defender .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to defender's selected column attack-line card
				var defender_trap_bonus2 = parseFloat($('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + 0.1 + i/10;
				$('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point', defender_trap_bonus2);
			}
			//if there is a gem-breaker in defender's attack-line and it faces with a gem
			else if ($('.defender .selected-column .attack-line .card').hasClass('gem-breaker') && $('.attacker .selected-column .attack-line .card').hasClass('gem')){
				//defender's gem-breaker goes to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.defender .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.defender .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//defender's trap comes forward
				$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
				$('.defender .selected-column .trap-line .card').insertAfter('.defender .selected-column .attack-line .insert-after');
				$('.defender .selected-column .attack-line .insert-after').remove();
				//attacker attack-line is defeated and sent to the mine
				//if it is a opponent's card
				$('<div class="insert-after"></div>').prependTo('.opponent-mine');
				$('.attacker .selected-column .attack-line .opponent-card').insertAfter('.opponent-mine .insert-after');
				$('.opponent-mine .insert-after').remove();
				//if it is a player's card
				$('<div class="insert-after"></div>').prependTo('.player-mine');
				$('.attacker .selected-column .attack-line .player-card').insertAfter('.player-mine .insert-after');
				$('.player-mine .insert-after').remove();
				//attacker trap comes forward
				$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
				$('.attacker .selected-column .trap-line .card').insertAfter('.attacker .selected-column .attack-line .insert-after');
				$('.attacker .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to attacker's selected column attack-line card
				var attacker_trap_bonus2 = parseFloat($('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + i/10;
				$('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point', attacker_trap_bonus2);
			}
			//Gem-Thief Battle
			//if there is a gem-thief in attacker's attack-line
			else if ($('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('gem-thief')){
				//and steals the defender's card
				$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
				$('.defender .selected-column .attack-line .card').insertAfter('.attacker .selected-column .attack-line .insert-after');
				$('.attacker .selected-column .attack-line .insert-after').remove();
				//defender trap comes forward
				$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
				$('.defender .selected-column .trap-line .card').insertAfter('.defender .selected-column .attack-line .insert-after');
				$('.defender .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to defender's selected column attack-line card
				var defender_trap_bonus3 = parseFloat($('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + 0.1 + i/10;
				$('.defender .selected-column .attack-line .card:nth-child(1)').attr('data-point', defender_trap_bonus3);
			}
			//if there is a gem-thief in defender's attack-line
			else if ($('.defender .selected-column .attack-line .card:nth-child(1)').hasClass('gem-thief') && !$('.attacker .selected-column .attack-line .card:nth-child(1)').hasClass('gem-thief')){
				//and steals the attacker's card
				$('<div class="insert-after"></div>').prependTo('.defender .selected-column .attack-line');
				$('.attacker .selected-column .attack-line .card').insertAfter('.defender .selected-column .attack-line .insert-after');
				$('.defender .selected-column .attack-line .insert-after').remove();
				//attacker's trap comes forward
				$('<div class="insert-after"></div>').prependTo('.attacker .selected-column .attack-line');
				$('.attacker .selected-column .trap-line .card').insertAfter('.attacker .selected-column .attack-line .insert-after');
				$('.attacker .selected-column .attack-line .insert-after').remove();
				//counter incresement
				i++;
				//add the trap bonus to attacker's selected column attack-line card
				var attacker_trap_bonus3 = parseFloat($('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point')) + i/10;
				$('.attacker .selected-column .attack-line .card:nth-child(1)').attr('data-point', attacker_trap_bonus3);
			}
			//to clear all bonus
			//- of opponent mine
			var number_of_opponent_mine_cards = $('.opponent-mine .card').length;
			for (i=1;i<=number_of_opponent_mine_cards;i++){
				var x;
				x = Math.floor(parseFloat($('.opponent-mine .card:nth-child(' + i + ')').attr('data-point')));
				$('.opponent-mine .card:nth-child(' + i + ')').attr('data-point', x);
			}
			//- of player mine
			var number_of_player_mine_cards = $('.player-mine .card').length;
			for (i=1;i<=number_of_player_mine_cards;i++){
				var y;
				y = Math.floor(parseFloat($('.player-mine .card:nth-child(' + i + ')').attr('data-point')));
				$('.player-mine .card:nth-child(' + i + ')').attr('data-point', y);
			}
			//shuffle the mine
			$('.attacker').randomize('.mine');
			//shuffle the mine
			$('.defender').randomize('.mine');
			runtimes++;
			attack();
		}
		else{
			after_attack();
			if(($('.attacker .playable .card').hasClass('royal') || $('.attacker .playable .card').hasClass('special')) && ($('.defender .playable .card').hasClass('royal') || $('.defender .playable .card').hasClass('special'))){
				if ($('.attacker').hasClass('opponent-battle-ground')){
					$('html').player_turn();
					runtimes = 0;
				}
				else if ($('.attacker').hasClass('player-battle-ground')){
					$('html').opponent_turn();
					runtimes = 0;
				}
			}
			else{
				alert('End of the Round');
				if($('.attacker .playable .card').hasClass('royal')){
					$('.attacker .playable .royal').each(function(){
						var prize = parseFloat($(this).attr('data-point'));
						var old_score = parseFloat($('.attacker').attr('data-score'));
						$('.attacker').attr('data-score', prize + old_score);
						$(this).css({'top':'-100vmin'});
						motions();
						$(this).remove();
					});
				}
				else if($('.defender .playable .card').hasClass('royal')){
					$('.defender .playable .royal').each(function(){
						var prize = parseFloat($(this).attr('data-point'));
						var old_score = parseFloat($('.defender').attr('data-score'));
						$('.defender').attr('data-score', prize + old_score);
						$(this).css({'top':'-100vmin'});
						motions();
						$(this).remove();
					});
				}
				alert('Player Score: ' + $('.player-battle-ground').attr('data-score') + '\nOpponent Score: ' + $('.opponent-battle-ground').attr('data-score'));
				if($('.player-battle-ground').attr('data-score') >= 25){
					alert('+25 Scores! You Won!');
					confetti_js();
				}
				if($('.opponent-battle-ground').attr('data-score') >= 25){
					alert('Opponent has +25 scores. Game Over...');
				}
				if($('.opponent-battle-ground').attr('data-score') < 25 && $('.player-battle-ground').attr('data-score') < 25){
					$('body').removeClass('started');
					after_attack()
					$('.playable').removeClass('playable');
					//clear the house after the party
					//for the oppnent
					$('<div class="insert-after"></div>').prependTo('.opponent-mine');
					$('.card.opponent-card').insertAfter('.opponent-mine .insert-after');
					$('.opponent-mine .insert-after').remove();
					//for the player
					$('<div class="insert-after"></div>').prependTo('.player-mine');
					$('.card.player-card').insertAfter('.player-mine .insert-after');
					$('.player-mine .insert-after').remove();
					//new set of the game
					$('html').opponent_hand();
					$('html').player_hand();
					//show cards
					$('.card').css({'opacity':'1'});
					//hide motion cards
					$('.motion-card').css({'opacity':'0'});
					motions();
				}
			}
		}
		}, timer);
	}
	function after_attack(){
		//clear all bonus of battle cards
		//if it there is a card in attacker's selected-column attack-line
		if ($('.attacker .selected-column .attack-line .card').hasClass('card')){
		var clear_bonus_1;
			clear_bonus_1 = Math.floor(parseFloat($('.attacker .selected-column .attack-line .card').attr('data-point')));
			$('.attacker .selected-column .attack-line .card').attr('data-point', clear_bonus_1);
		}
		//if it there is a card in defender's selected-column attack-line
		if ($('.defender .selected-column .attack-line .card').hasClass('card')){
			var clear_bonus_2;
			clear_bonus_2 = Math.floor(parseFloat($('.defender .selected-column .attack-line .card').attr('data-point')));
			$('.defender .selected-column .attack-line .card').attr('data-point', clear_bonus_2);
		}
		$('.container-fluid').removeClass('pointer-events-none');
		$('.selected-column').removeClass('selected-column');
		$('.select-a-column').removeClass('select-a-column');
		$('.miner').attr('data-point',0);
		$('.gem-thief').attr('data-point',0);
	}
