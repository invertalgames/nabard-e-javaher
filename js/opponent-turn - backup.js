$(function ($) {
	//It's the player's turn
	$.fn.opponent_turn = function(){
		//who is who?
		$('.player-battle-ground').addClass('defender');
		$('.opponent-battle-ground').addClass('attacker');
		$('.player-battle-ground').removeClass('attacker');
		$('.opponent-battle-ground').removeClass('defender');
		//detect which columns are playable. empty columns are not playable.
		$('.col-v').removeClass('playable');
		$('.cell .card').parent().parent().addClass('playable');
		//when the attacker selects one of his columns
		$('.attacker .playable').addClass('select-a-column');
		//calculate the sum of the opponent's column powers
		var opponent_a_attack_point = parseFloat($('.opponent-a-attack .card').attr('data-point')) || 0,
			opponent_b_attack_point = parseFloat($('.opponent-b-attack .card').attr('data-point')) || 0,
			opponent_c_attack_point = parseFloat($('.opponent-c-attack .card').attr('data-point')) || 0,
			opponent_d_attack_point = parseFloat($('.opponent-d-attack .card').attr('data-point')) || 0,
			opponent_a_trap_point = parseFloat($('.opponent-a-trap .card').attr('data-point')) || 0,
			opponent_b_trap_point = parseFloat($('.opponent-b-trap .card').attr('data-point')) || 0,
			opponent_c_trap_point = parseFloat($('.opponent-c-trap .card').attr('data-point')) || 0,
			opponent_d_trap_point = parseFloat($('.opponent-d-trap .card').attr('data-point')) || 0,
			
			opponent_a_attack_special = parseFloat($('.opponent-a-attack .card').attr('data-special')) || 0,
			opponent_b_attack_special = parseFloat($('.opponent-b-attack .card').attr('data-special')) || 0,
			opponent_c_attack_special = parseFloat($('.opponent-c-attack .card').attr('data-special')) || 0,
			opponent_d_attack_special = parseFloat($('.opponent-d-attack .card').attr('data-special')) || 0,
			opponent_a_trap_special = parseFloat($('.opponent-a-trap .card').attr('data-special')) || 0,
			opponent_b_trap_special = parseFloat($('.opponent-b-trap .card').attr('data-special')) || 0,
			opponent_c_trap_special = parseFloat($('.opponent-c-trap .card').attr('data-special')) || 0,
			opponent_d_trap_special = parseFloat($('.opponent-d-trap .card').attr('data-special')) || 0,
			
			opponent_a_column = opponent_a_attack_point + opponent_a_attack_special + opponent_a_trap_point + opponent_a_trap_special,
			
			opponent_b_column = opponent_b_attack_point + opponent_b_attack_special + opponent_b_trap_point + opponent_b_trap_special,
			
			opponent_c_column = opponent_c_attack_point + opponent_c_attack_special + opponent_c_trap_point + opponent_c_trap_special,
			
			opponent_d_column = opponent_d_attack_point + opponent_d_attack_special + opponent_d_trap_point + opponent_d_trap_special,
			
		//calculate the sum of the player's column powers
			player_a_attack_point = parseFloat($('.player-a-attack .card:nth-child(1)').attr('data-point')) || 0,
			player_b_attack_point = parseFloat($('.player-b-attack .card:nth-child(1)').attr('data-point')) || 0,
			player_c_attack_point = parseFloat($('.player-c-attack .card:nth-child(1)').attr('data-point')) || 0,
			player_d_attack_point = parseFloat($('.player-d-attack .card:nth-child(1)').attr('data-point')) || 0,
			player_a_trap_point = parseFloat($('.player-a-trap .card:nth-child(1)').attr('data-point')) || 0,
			player_b_trap_point = parseFloat($('.player-b-trap .card:nth-child(1)').attr('data-point')) || 0,
			player_c_trap_point = parseFloat($('.player-c-trap .card:nth-child(1)').attr('data-point')) || 0,
			player_d_trap_point = parseFloat($('.player-d-trap .card:nth-child(1)').attr('data-point')) || 0,
			
			player_a_attack_special = parseFloat($('.player-a-attack .card:nth-child(1)').attr('data-special')) || 0,
			player_b_attack_special = parseFloat($('.player-b-attack .card:nth-child(1)').attr('data-special')) || 0,
			player_c_attack_special = parseFloat($('.player-c-attack .card:nth-child(1)').attr('data-special')) || 0,
			player_d_attack_special = parseFloat($('.player-d-attack .card:nth-child(1)').attr('data-special')) || 0,
			player_a_trap_special = parseFloat($('.player-a-trap .card:nth-child(1)').attr('data-special')) || 0,
			player_b_trap_special = parseFloat($('.player-b-trap .card:nth-child(1)').attr('data-special')) || 0,
			player_c_trap_special = parseFloat($('.player-c-trap .card:nth-child(1)').attr('data-special')) || 0,
			player_d_trap_special = parseFloat($('.player-d-trap .card:nth-child(1)').attr('data-special')) || 0,
			
			player_a_column = player_a_attack_point + player_a_attack_special + player_a_trap_point + player_a_trap_special,
			
			player_b_column = player_b_attack_point + player_b_attack_special + player_b_trap_point + player_b_trap_special,
			
			player_c_column = player_c_attack_point + player_c_attack_special + player_c_trap_point + player_c_trap_special,
			
			player_d_column = player_d_attack_point + player_d_attack_special + player_d_trap_point + player_d_trap_special;
			
			//sort the oppoinent's columns by power
			var opponent_columns_array = [opponent_a_column, opponent_b_column, opponent_c_column, opponent_d_column];
			opponent_columns_array.sort(function(a, b) {
			  return b - a;
			});
			
			//sort the player's columns by power
			var player_columns_array = [player_a_column, player_b_column, player_c_column, player_d_column];
			player_columns_array.sort(function(a, b) {
			  return b - a;
			});
			
			setTimeout(function(){
			//if opponent has the strongest column
			if(player_columns_array[0] <= opponent_columns_array[0] || opponent_columns_array[1] == 0){
				//opponent selects his strongest column
				var opponent_chosen_column;
				if (opponent_columns_array[0] == opponent_a_column){
					opponent_chosen_column = opponent_a_column;
					$('.attacker .col-a').click();
				}
				else if (opponent_columns_array[0] == opponent_b_column){
					opponent_chosen_column = opponent_b_column;
					$('.attacker .col-b').click();
				}
				else if (opponent_columns_array[0] == opponent_c_column){
					opponent_chosen_column = opponent_c_column;
					$('.attacker .col-c').click();
				}
				else if (opponent_columns_array[0] == opponent_d_column){
					opponent_chosen_column = opponent_c_column;
					$('.attacker .col-d').click();
				}
				//and decides to attack player's strongest column
				if (player_columns_array[0] == player_a_column){
					$('.player-battle-ground.defender .col-a').click();
				}
				else if (player_columns_array[0] == player_b_column){
					$('.player-battle-ground.defender .col-b').click();
				}
				else if (player_columns_array[0] == player_c_column){
					$('.player-battle-ground.defender .col-c').click();
				}
				else if (player_columns_array[0] == player_d_column){
					$('.player-battle-ground.defender .col-d').click();
				}
			}
			//if opponent doesn't have the strongest column
			else if (player_columns_array[0] > opponent_columns_array[0] && opponent_columns_array[1] != 0){
				//opponent selects his second strongest column
				var opponent_second_choice;
				if (opponent_columns_array[1] == opponent_a_column){
					opponent_second_choice = opponent_a_column;
					$('.attacker .col-a').click();
				}
				else if (opponent_columns_array[1] == opponent_b_column){
					opponent_second_choice = opponent_b_column;
					$('.attacker .col-b').click();
				}
				else if (opponent_columns_array[1] == opponent_c_column){
					opponent_second_choice = opponent_c_column;
					$('.attacker .col-c').click();
				}
				else if (opponent_columns_array[1] == opponent_d_column){
					opponent_second_choice = opponent_c_column;
					$('.attacker .col-d').click();
				}
				//and decides to attack player's strongest column. why? you will see why. just play.
				if (player_columns_array[0] == player_a_column){
					$('.player-battle-ground.defender .col-a').click();
				}
				else if (player_columns_array[0] == player_b_column){
					$('.player-battle-ground.defender .col-b').click();
				}
				else if (player_columns_array[0] == player_c_column){
					$('.player-battle-ground.defender .col-c').click();
				}
				else if (player_columns_array[0] == player_d_column){
					$('.player-battle-ground.defender .col-d').click();
				}
			}
		}, 1000);
		setTimeout(function(){
			$('.attack').click();
		}, 1500);
		$('body').on('click', '.attacker .select-a-column, .attacker .select-a-column .card', function(){
			$('.attacker .playable').removeClass('selected-column');
			$(this).addClass('selected-column');
			//when the attacker selects one of his opponent's columns
			$('.defender .playable').addClass('select-a-column');
			$('body').on('click', '.player-battle-ground.defender .select-a-column, .player-battle-ground.defender .select-a-column .card', function(){
				$('.defender .playable').removeClass('selected-column');
				$(this).addClass('selected-column');
				//create an attack button
				if($('.attack').hasClass('attack')){
					//if there is already an attack button, do nothing.
				}
				else{
				$('<button class="btn btn-primary action-btn attack">ATTACK</button>').appendTo('.opponent-mine');
				//$('.attack').fadeIn(500);
				$('.attack').click(function(){
					if($('.attacker .selected-column .attack-line .card').hasClass('gem-breaker') && $('.defender .selected-column .attack-line .card').hasClass('gem-breaker')){
						console.log("Both columns' attack-lines have Gem Breakers. Opponent chooses another column.");
						shuffle(player_columns_array);
						//and decides to attack player's random column
						if (player_columns_array[0] == player_a_column && player_columns_array[0] != 0){
							$('.player-battle-ground.defender .col-a').click();
							$('.attack').click();
						}
						else if (player_columns_array[0] == player_b_column && player_columns_array[0] != 0){
							$('.player-battle-ground.defender .col-b').click();
							$('.attack').click();
						}
						else if (player_columns_array[0] == player_c_column && player_columns_array[0] != 0){
							$('.player-battle-ground.defender .col-c').click();
							$('.attack').click();
						}
						else if (player_columns_array[0] == player_d_column && player_columns_array[0] != 0){
							$('.player-battle-ground.defender .col-d').click();
							$('.attack').click();
						}
						else{
							shuffle(player_columns_array);
							$('.attack').click();
						}
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
	function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
});