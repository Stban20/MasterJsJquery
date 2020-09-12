$(document).ready(function () {
  console.log("The page is ready");

  //--------Draggable
  //To move element in the page
  $(".divElement1").draggable();

  //---------Resizable
  //To resize the elements
  $(".divElement1").resizable();

  //---------Selectable
  //To select the elements
  //$(".ulListSelect").selectable();

  //---------Sortable
  //To sort the elements
  $(".ulListSelect").sortable({
    update: function (e, ui) {
      console.log("the list changed");
    },
  });

  //---------Droppable
  //To drop the elements
  $("#divElementMove").draggable();
  $("#divArea").droppable({
    drop: function () {
      console.log("You dop something in teh area");
    },
  });

  //------Efects
  // different new effects to apply to the html elements
  $("#buttonEfectShow").click(function () {
    $(".divBoxEfects").toggle("blind", { default: "left" }, "slow"); //effects: explode, blind, slide, drop, fold, puff, scale, shake,
  });

  //-------Tooltip
  $("a").tooltip();

  //--------Dialog
  $("#buttonSendPopUp").click(function () {
    $("#divPopUp").dialog();
  });

  //---Datepicker -----Calendar
  $("#inputCalendar").datepicker();

  //-------Tabs
  $("#divTabs").tabs();
});
