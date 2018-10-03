$(function(){
  $(".tabs li").on('click', function(){
    $("li.active").removeClass("active");
    $(this).addClass("active");
    
    var toShow = $(this).attr("rel");
    
    $(".panel.active").slideUp(300, function(){
      $(this).removeClass("active");
      
      $('#' + toShow).slideDown(300, function(){
        $(this).addClass("active");
      });
    });
    
  });
});