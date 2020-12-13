function detectMob() {
    return window.innerWidth <= 992;
  }
  
  $(window).scroll(function () {
  
    /* affix after scrolling 450px */
    if ($(document).scrollTop() > 450) 
    {
      $(".navbar").removeClass("bg-transparent");
      $(".navbar").addClass("bg-custom");
      $(".navbar").addClass("affix");
    }
  
    else 
    {
      $(".navbar").addClass("bg-transparent");
      $(".navbar").removeClass("bg-custom");
      $(".navbar").removeClass("affix");
    }
  
  });
  
  jQuery(document).ready(function ($) {
  
    $(".tabgroup > div").hide();
    $(".tabgroup > div:first-of-type").show();
  
    $(".tabs a").click(function (e) {
      e.preventDefault();
  
      (tabgroup = "#" + $(this).parents(".tabs").data("tabgroup")),     //Gets the section always
      (others = $(this).closest("li").siblings().children("a")),        //Gets all the other imgs
      (target = $(this).attr("href"));           //Gets the ID of the div img from the button href
  
      console.log(tabgroup);
  
      others.removeClass("active");
      $(this).addClass("active");
      $(tabgroup).children("div").hide();
      $(target).show();
  
    });
  
  
  });
  
  $(document).ready(function () {
    if (
      window.location.pathname + window.location.hash ==
      "/Applications/Applications.html#services"
    ) {
      console.log("Viewing contact form");
    }
  });
  
  console.log(window.location.pathname + window.location.hash);
  