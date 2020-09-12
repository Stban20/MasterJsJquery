$(document).ready(function () {
  console.log("The page is ready");
  let divBox1 = $("#divBox1");
  divBox1.hide();

  //--------To Show and To Hide
  
  $("#buttonShow").click(function () {
    $(divBox1).show('normal', function(){
        console.log('Showed Box')
    });
  });

  $("#buttonHide").click(function () {
    $(divBox1).hide('fast', function(){
        console.log('Hided Box')
    });
  });
  

  /*
//------FadeIn and FadeOut
  $("#buttonShow").click(function () {
    $(divBox1).fadeIn('normal');
  });

  $("#buttonHide").click(function () {
    $(divBox1).fadeOut('slow');
  });
*/
  /*
  //------Fadeto
  $("#buttonShow").click(function () {
    $(divBox1).fadeTo('normal',1);
  });

  $("#buttonHide").click(function () {
    $(divBox1).fadeTo('slow', 0);
  });
*/
  /*
  //------SlideDown and SlideUp
  $("#buttonShow").click(function () {
    $(divBox1).slideDown("normal");
  });

  $("#buttonHide").click(function () {
    $(divBox1).slideUp("slow");
  });
*/
  /*
//---------Toggle
  $('#divButtonAll').click(function(){
    $(divBox1).toggle('slow');
  })
*/

  /*
//---------FadeToggle
  $('#divButtonAll').click(function(){
    $(divBox1).fadeToggle('slow');
  })
*/
  /*
//---------SlideToggle
  $('#divButtonAll').click(function(){
    $(divBox1).slideToggle('fast');
  })
*/

//------Animate
//Animation to add new attributes to the html element and give it movement
  $("#buttonAnimate").click(function () {
    divBox1.show();
    divBox1.animate(
      {
        marginLeft: '300px',
        fontSize: '40px',
        height: '110px',
      },'normal')
      .animate({
        borderRadius: '900px',
        marginTop: '100px',
    },'normal')
    .animate({
        borderRadius: '0px',
        marginLeft: '0px',
    },'slow')
    .animate({
        borderRadius: '900px',
        marginTop: '0px',
    },'normal')
  });
});
