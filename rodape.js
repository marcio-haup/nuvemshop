//retirar o quado de newsletter
$('#newsletter').parent().css('display', 'none');

$('#single-product.row').append($('#full-description'));

// imagem do vídeo
setInterval(function(){
	if($('.js-video-image img').length > 0 && $('.js-video-image img').attr('src') != '//d26lpennugtm8s.cloudfront.net/stores/001/125/116/rte/Anotação 2020-04-09 094947.png'){
		console.log('arrumando video');
		$('.js-video-image img').attr('src', '//d26lpennugtm8s.cloudfront.net/stores/001/125/116/rte/Anotação 2020-04-09 094947.png');
		$('.js-video-image img').attr('data-src', '//d26lpennugtm8s.cloudfront.net/stores/001/125/116/rte/Anotação 2020-04-09 094947.png');
	}
}, 500)
$('.js-video-image img').css('margin-left', '-50%');
$('.js-video-image').css('padding-left', '50%');
