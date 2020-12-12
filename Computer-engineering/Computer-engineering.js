
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

  jQuery(document).ready(function($) {

  $('.tabgroup > div').hide();
        $('.tabgroup > div:first-of-type').show();
        $('.tabs a').click(function(e){
          e.preventDefault();
            var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
      
    })
  });