$(function ($) {
	$.fn.opponent_hand = function(){
	//prepare opponent's hand
		//create the special container
	$('<div class="special-container"></div>').prependTo('.opponent-hand');
	$('<div class="insert-after"></div>').prependTo('.opponent-hand .special-container');
	$('.opponent-mine .special').insertAfter('.opponent-hand .special-container .insert-after');
	$('.opponent-hand .special-container .insert-after').remove();
		//create the regular container
	$('<div class="regular-container"></div>').prependTo('.opponent-hand');
	$('<div class="insert-after"></div>').prependTo('.opponent-hand .regular-container');
	$('.opponent-mine .regular').insertAfter('.opponent-hand .regular-container .insert-after');
	$('.opponent-hand .regular-container .insert-after').remove();
		//create the royal container
	$('<div class="royal-container"></div>').prependTo('.opponent-hand');
	$('<div class="insert-after"></div>').prependTo('.opponent-hand .royal-container');
	$('.opponent-mine .royal').insertAfter('.opponent-hand .royal-container .insert-after');
	$('.opponent-hand .royal-container .insert-after').remove();
		//shuffle royals
	$('.opponent-hand').randomize('.royal-container');
		//shuffle regulars
	$('.opponent-hand').randomize('.regular-container');
		//shuffle specials
	$('.opponent-hand').randomize('.special-container');
		//keep the first royal and send the rest to the opponent-mine
	$('<div class="insert-after"></div>').prependTo('.opponent-mine');
	$('.opponent-hand .royal-container .card:nth-child(2),.opponent-hand .royal-container .card:nth-child(3),.opponent-hand .royal-container .card:nth-child(4)').insertAfter('.opponent-mine .insert-after');
	$('.opponent-mine .insert-after').remove();
		//keep the first-4 regulars and send the rest to the opponent-mine
	$('<div class="insert-after"></div>').prependTo('.opponent-mine');
	$('.opponent-hand .regular-container .card:nth-child(5),.opponent-hand .regular-container .card:nth-child(6)').insertAfter('.opponent-mine .insert-after');
	$('.opponent-mine .insert-after').remove();
		//take cards out of their containers
	$('<div class="insert-after"></div>').prependTo('.opponent-hand');
	$('.opponent-hand .card').insertAfter('.opponent-hand .insert-after');
	$('.opponent-hand .insert-after').remove();
	$('.opponent-hand .royal-container').remove();
	$('.opponent-hand .regular-container').remove();
	$('.opponent-hand .special-container').remove();
		//shuffle the 8 battlecards
	$('body').randomize('.opponent-hand');
	
	//shuffle opponent-mine
	$('.opponent-battle-ground').randomize('.opponent-mine');
	
	//prepare opponent-battle-ground
	$('<div class="insert-after"></div>').prependTo('.opponent-a-trap');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-a-trap .insert-after');
	$('.opponent-a-trap .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-a-attack');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-a-attack .insert-after');
	$('.opponent-a-attack .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-b-trap');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-b-trap .insert-after');
	$('.opponent-b-trap .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-b-attack');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-b-attack .insert-after');
	$('.opponent-b-attack .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-c-trap');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-c-trap .insert-after');
	$('.opponent-c-trap .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-c-attack');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-c-attack .insert-after');
	$('.opponent-c-attack .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-d-trap');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-d-trap .insert-after');
	$('.opponent-d-trap .insert-after').remove();
	$('<div class="insert-after"></div>').prependTo('.opponent-d-attack');
	$('.opponent-hand .card:nth-child(1)').insertAfter('.opponent-d-attack .insert-after');
	$('.opponent-d-attack .insert-after').remove();
	};
	$('html').opponent_hand();
});