$(function(){
    $('.f-p').hide().fadeIn(3000); 
  });///ロード中ブラウザ

  $(window).on('load', function() {
    $('.loa').hide();
  });///ロード後

  $(document).ready(function() {
    $('body').hide().fadeIn(2000);
  });///

  $('.header-a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    }, 500);
  })
  $('.nav-link').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    }, 500);
  })
//totop
  jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn(200);
        } else {
            pagetop.fadeOut(200);
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});




