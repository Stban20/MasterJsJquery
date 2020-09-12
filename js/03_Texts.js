$(document).ready(function () {
  console.log("The page is ready");

  reloadLInks()
  
  $("#buttonText").click(function () {
    let addText = $("#addLinks");
    let newLink = addText.val();
    console.log(newLink);
    $("#ulListLinks").append(` <li> <a href='${newLink}'></a></li>`);
    reloadLInks()
  });

  console.log($("a").length);

  function reloadLInks() {
    $("a").each(function (index) {
      let aRef = $(this);
      let links = aRef.attr("href");
      aRef.text(links);
    });
  }
});
