const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

  // smooth scroll and pageup
$(window).scroll(function() {
      if($(this).scrollTop() > 200 ) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    // script smooth
$("a[href^='#']").click (function() {
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

