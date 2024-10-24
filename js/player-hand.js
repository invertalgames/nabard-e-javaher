$(function ($) {
	$.fn.player_hand = function(){
	//prepare player's hand
		//create the special container
	$('<div class="special-container"></div>').prependTo('.player-hand');
	$('<div class="insert-after"></div>').prependTo('.player-hand .special-container');
	$('.player-mine .special').insertAfter('.player-hand .special-container .insert-after');
	$('.player-hand .special-container .insert-after').remove();
		//create the regular container
	$('<div class="regular-container"></div>').prependTo('.player-hand');
	$('<div class="insert-after"></div>').prependTo('.player-hand .regular-container');
	$('.player-mine .regular').insertAfter('.player-hand .regular-container .insert-after');
	$('.player-hand .regular-container .insert-after').remove();
		//create the royal container
	$('<div class="royal-container"></div>').prependTo('.player-hand');
	$('<div class="insert-after"></div>').prependTo('.player-hand .royal-container');
	$('.player-mine .royal').insertAfter('.player-hand .royal-container .insert-after');
	$('.player-hand .royal-container .insert-after').remove();
		//shuffle royals
	$('.player-hand').randomize('.royal-container');
		//shuffle regulars
	$('.player-hand').randomize('.regular-container');
		//shuffle specials
	$('.player-hand').randomize('.special-container');
		//keep the first royal and send the rest to the player-mine
	$('<div class="insert-after"></div>').prependTo('.player-mine');
	$('.player-hand .royal-container .card:nth-child(2),.player-hand .royal-container .card:nth-child(3),.player-hand .royal-container .card:nth-child(4)').insertAfter('.player-mine .insert-after');
	$('.player-mine .insert-after').remove();
		//keep the first-4 regulars and send the rest to the player-mine
	$('<div class="insert-after"></div>').prependTo('.player-mine');
	$('.player-hand .regular-container .card:nth-child(5),.player-hand .regular-container .card:nth-child(6)').insertAfter('.player-mine .insert-after');
	$('.player-mine .insert-after').remove();
		//take cards out of their containers
	$('<div class="insert-after"></div>').prependTo('.player-hand');
	$('.player-hand .card').insertAfter('.player-hand .insert-after');
	$('.player-hand .insert-after').remove();
	$('.player-hand .royal-container').remove();
	$('.player-hand .regular-container').remove();
	$('.player-hand .special-container').remove();
		//shuffle the 8 battlecards
	$('body').randomize('.player-hand');
	
	//shuffle player-mine
	$('.player-battle-ground').randomize('.player-mine');
	
	//drag and drop cards to cells
	$('.player-hand .card').addClass('draggable');
	$(".draggable").mousedown(function(){
		if ($(this).hasClass('draggable')){
			$(this).removeClass('left0');
		}
	});
	$(".draggable").draggable({
		revert: true
	});
	$(".player-battle-ground .cell, .player-hand").droppable({
		accept: '.draggable',
		drop: function(event, ui) {
			//check if the cell is empty or it's the player's hand
			if ($.trim($(this).html())=='' || $(this).hasClass('player-hand')){
				$(this).append($(ui.draggable));
				ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
				$('.player-battle-ground .card').addClass('left0');
				//remove the start button if the player's hand is not empty
				if ($('.player-hand').children().length > 0){
					$('.start').fadeOut(500);
					setTimeout(function(){$('.start').remove();}, 500);
				}
				//appear the start button if the player's hand is empty
				else{
					$('<button class="btn btn-primary action-btn start" onclick="$(this).start();">START</button>').appendTo('.player-mine');
					$('.start').fadeIn(500);
				}
			}
			else{
			}
		}
	});
	};
	$('html').player_hand();
});