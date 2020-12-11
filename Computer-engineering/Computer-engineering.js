
function detectMob() {
  return ( ( window.innerWidth <= 992 ) );
}


$(window).scroll(function() {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 450) {
      $('.navbar').removeClass('bg-transparent');
      $('.navbar').addClass('bg-dark');
      $('.navbar').addClass('affix');
    } 
    else {
      $('.navbar').addClass('bg-transparent');
      $('.navbar').removeClass('bg-dark');
      $('.navbar').removeClass('affix');
    }
  });