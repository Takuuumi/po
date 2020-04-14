// $(function(){
//     $('.f-p').hide().fadeIn(3000); 
//   });///ロード中ブラウザ

  $(window).on('load', function() {
    $('.loa').hide();
  });///ロード後

  $(document).ready(function() {
    $('body').hide().fadeIn(2000);
  });///
  



  $(window).scroll(function (){
	$("section").each(function(){
	  let position = $(this).offset().top; //ページの一番上から要素までの距離を取得
	  let scroll = $(window).scrollTop(); //スクロールの位置を取得
	  let windowHeight = $(window).height(); //ウインドウの高さを取得
	  if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
	    $(this).addClass('active'); //クラス「active」を与える
	  }
	});
});

