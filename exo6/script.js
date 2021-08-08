// $('#green').mouseenter(function() {
//     $('#texte').css('color','green');
//     });
//   $('#red').mouseenter(function() {
//     $('#texte').css('color','red');
//   });
//   $('#blue').mouseenter(function() {
//     $('#texte').css('color','blue');
//   });
//   $("div").mouseleave(function(){
//     $('#texte').css('color','black');
//   });

  $('#red, #blue, #green').mouseenter(function() {
    var divColor = $(this).attr('id');
    $('#texte').css('color', divColor);
    });
    
    $('#red, #blue, #green').mouseout(function() {
    $('#texte').css('color','black');
});
  

$('#red, #blue, #green').on('mouseenter mouseleave', function() {
  var divColor = $(this).attr('id');
  $('#texte').toogleClass(divColor);
  });
