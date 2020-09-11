//JQuery
//Selector
//$ and JQuery there are an object and everything inside the parentheses () is the selector and after that is the method
$(document).ready(function () {
  // selector document, method ready
  console.log("JQuery and the page are ready!");

  // ID Selector
  // Select the html elements by id with the character #
  let red = $("#red").css("background", "red").css("color", "white");

  let yellow = $("#yellow").css("background", "yellow").css("color", "black");

  let green = $("#green").css("background", "green").css("color", "white");

  //Class Selector
  // Select the html elements by Class with the character '.'
  let zebraClass = $(".zebra");
  zebraClass.css("padding", "3px");

  $(".without_border").click(function () {
    //method click for the html elements with class 'without_border'
    $(this).addClass("zebra"); //method to add a class
  });
  console.log(zebraClass);

  //Label selector
  //

  let p = $("p").css("cursor", "pointer");
  p.click(function () {
    let that = $(this);

    if (!that.hasClass("big")) {
      that.addClass("big");
    } else {
      that.removeClass("big zebra");
    }
  });

  //Atribute Selector
  // Select the html elements by atribute with the characters '[]'

  $('[title="Google"]').css("background", "#ccc");
  $('[title="Facebook"]').css("background", "blue");

  //Others
  //addition to more than one html element by label
  $("p, a").addClass("marginSuperior");

  //Search elements in tree so bigs

  let search = $("#divBox").find(".remarker");
  console.log(search);

  //Method parent() that helps to move back one step in the elements html
  let search1 = $(".remarker").parent().parent().find('[title="Google"]');
  console.log(search1);
});
