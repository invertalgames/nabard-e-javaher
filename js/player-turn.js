$(function ($) {
	//It's the player's turn
	$.fn.player_turn = function(){
		//who is who?
		$('.player-battle-ground').addClass('attacker');
		$('.opponent-battle-ground').addClass('defender');
		$('.player-battle-ground').removeClass('defender');
		$('.opponent-battle-ground').removeClass('attacker');
		//detect which columns are playable. empty columns are not playable.
		$('.col-v').removeClass('playable');
		$('.cell .card').parent().parent().addClass('playable');
		//when the attacker selects one of his columns
		$('.attacker .playable').addClass('select-a-column');
		$('body').on('click', '.attacker .select-a-column, .attacker .select-a-column .card', function(){
			$('.attacker .playable').removeClass('selected-column');
			$(this).addClass('selected-column');
			//when the attacker selects one of his opponent's columns
			$('.defender .playable').addClass('select-a-column');
			$('body').on('click', '.opponent-battle-ground.defender .select-a-column, .opponent-battle-ground.defender .select-a-column .card', function(){
				$('.defender .playable').removeClass('selected-column');
				$(this).addClass('selected-column');
				//create an attack button
				if($('.attack').hasClass('attack')){
					//if there is already an attack button, do nothing.
				}
				else{
				$('<button class="btn btn-primary action-btn attack">ATTACK</button>').appendTo('.player-mine');
				$('.attack').fadeIn(500);
				$('.attack').click(function(){
					if($('.attacker .selected-column .attack-line .card').hasClass('gem-breaker') && $('.defender .selected-column .attack-line .card').hasClass('gem-breaker')){
						alert("You can't attack this column. Both columns' attack-lines have Gem Breakers.");
					}
					else{
						$('.attack').fadeOut(500);
						$('.container-fluid').addClass('pointer-events-none');
						setTimeout(function(){
							$('.attack').remove();
							attack();
						}, 500);
					}
				});
				}
			});
		});
	};
});