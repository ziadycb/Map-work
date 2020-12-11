
function detectMob() {
  return ( ( window.innerWidth <= 992 ) );
}


$(window).scroll(function() {
    /* affix after scrolling 100px */
    if ($(document).scrollTop() > 450) {
      $('.navbar').removeClass('bg-transparent');
      $('.navbar').addClass('bg-custom');
      $('.navbar').addClass('affix');
    } 
    else {
      $('.navbar').addClass('bg-transparent');
      $('.navbar').removeClass('bg-custom');
      $('.navbar').removeClass('affix');
    }
  });