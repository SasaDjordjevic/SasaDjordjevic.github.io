window.addEventListener('scroll', function(){
    var headerBg = document.getElementById('home')
    headerBg.style.opacity = 1 - +window.pageYOffset/650+''
    headerBg.style.top = +window.pageYOffset+'';
    headerBg.style.backgroundPositionY = - +window.
    pageYOffset/2+'px';
  });
  