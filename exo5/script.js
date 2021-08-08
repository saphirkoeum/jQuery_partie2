$(document).ready(function(){
    $('input').focusin(function(){
      $(this).css('border', '4px solid #008000');
    });

    $('input').focusout(function(){
        $(this).css('border', '4px solid #FF0000');
    });
  });
  