$(document).ready(function () {
  console.log("Events JS ready");

  //Events mouse over and Mouse out

  let divBox1 = $("#divBox1");

  /*
divBox1.mouseover(function(){
    $(this).css('background', 'cornflowerblue')
})

divBox1.mouseout(function(){
    $(this).css('background', 'red')
})
*/
  function changeBlue() {
    divBox1.css("background", "cornflowerblue");
  }

  function changeRed() {
    divBox1.css("background", "red");
  }
  // Hover
  // this method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
  divBox1.hover(changeBlue, changeRed);

  //Click and doble Click

  divBox1.click(function () {
    $(this).css("background", "#ccc").css("color", "white");
  });

  divBox1.dblclick(function () {
    $(this).css("background", "brown").css("color", "blue");
  });

  //Focus
  //method attaches an event handler function to an HTML form field
  let name = $('#name')
  let divData = $('#divData')
  name.focus(function(){
        $(this).css('border', '2px solid orange')
  })
  //blur
  //method attaches an event handler function to an HTML form field.
  name.blur(function(){
    $(this).css('border', '2px solid green')
    divData.text($(this).val()).show()
    })
    
    //Mousedown
    divData.mousedown(function(){
        $(this).css('border', '5px solid black')
    })

     //Mouseup
     divData.mouseup(function(){
        $(this).css('border', '2px solid orange')
    })

    //Mousemove
    $(document).mousemove(function (){
        console.log(`In X ${event.clientX} and Y ${event.clientY}`)
        $('body').css('cursor', 'none')
        $('#divFollowMe').css('left', event.clientX).css('top', event.clientY)
    })



});
