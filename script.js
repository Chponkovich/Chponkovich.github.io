MassQuote =['Умер? И лежи!',
			'Что он тут взялся!?',
			'Если ты сдох, то ты умер',
			'Ну как там с деньгами?',
			'Если ты не сдох, то ты живой',
			'Переходный пешеход',
			'Из оружия у меня только серп и яйца',
			'Сосну с елью',
			'Сплю в озере'];

function WaitNextQuote() {
		$('.QuoteForm').addClass('AnimNextForm');
  		setTimeout(NextQuote,1050);
		
}
function NextQuote() {
		$('.QuoteForm').addClass('AnimNextForm');
  		var rand = Math.floor(Math.random() * MassQuote.length);
		document.getElementById("Quote").textContent = MassQuote[rand];
		document.getElementById("Quote").innerText = MassQuote[rand];
		document.getElementById('Quote').innerHTML = MassQuote[rand];
		
}
function ClickNext() {
/*
//Анимация слов
	if ($('.Quote').hasClass('AnimNext')==true) {
		$('.Quote').toggleClass('AnimNext');
		setTimeout(WaitNextQuote,5);
	} else {
		$('.Quote').toggleClass('AnimNext');
		setTimeout(WaitNextQuote,5);
	}
*/
//Анимация формы


	if ($('.QuoteForm').hasClass('AnimNextForm')==true) {
		$('.QuoteForm').toggleClass('AnimNextForm');
		setTimeout(WaitNextQuote,5);
	} else {
		$('.QuoteForm').toggleClass('AnimNextForm');
		setTimeout(WaitNextQuote,5);
	}
}
