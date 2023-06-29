$(function() {
  
  $("#newli").click(function(){
    movebubble($(this));
  });
  movebubble($(".selected"));
  
  
    $("#newli2").click(function(){
    movebubble($(this));
  });
  movebubble($(".selected"));

  
  
 });

function movebubble($item){
  
  $(".selected").removeClass("selected");
    $item.addClass("selected");
    
    $(".bubble").css("left",$item.position().left);
    $(".bubble").css("width","0");

    setTimeout(function () {
      $(".bubble").css("width",$(".selected").width());
      $(".bubble").css("transform","scale(1.3,1.2)");
    }, 120);
   
   setTimeout(function () {
      $(".bubble").css("transform","scale(1,1)");
    }, 250);
   
  }
  
  
   
$(window).resize(function(){
             movebubble($(".selected"));
         $(".bubble").css("width",$(".selected").width());

});
