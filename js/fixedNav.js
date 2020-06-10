$(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('header').addClass('fixed-top');
    }
    else{
      $('header').removeClass('fixed-top');
    }
  })