$(document).ready(function () {
  console.log("Document is ready");

  //-------Load
  //Request AJAX and charge it
  //-------Load
  //method loads data from a server and puts the returned data into the selected element.
  //$('#divBox1').load('https://reqres.in/')

  //-------Get requests
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    console.log(response);

    response.data.forEach((element, index) => {
      $("#divBox1").append(
        `<p> ${element.first_name} ${element.last_name} </p>`
      );
    });
  });

  //-----------Post requests
  //Send information to a remote server
  /*
let user = {
    first_name: 'Sergio',
    last_name: ' Acosta'
}
$.post('https://reqres.in/api/users', user, function(response){
    console.log(response)
})
*/
    //action submit from the form1 to sent the create user
  $("#form1").submit(function (e) {
    e.preventDefault(); //prevent the default behavior of the page
    let user = {
      first_name: $('input[name="fistName"]').val(),
      last_name: $('input[name="lastName"]').val(),
    };
    console.log(user);

    // $.post($(this).attr('action'), user, function(response){
    //     console.log(response)
    // })

    //-- Post request with the method ajax. Help us to control other parameter of the requests

    $.ajax({
      //Specifies the type of request. (GET or POST)
      type: "POST",
      //Specifies the URL to send the request to. Default is the current page
      url: $(this).attr("action"),
      //Specifies data to be sent to the server
      data: user,
      //A function to run before the request is sent
      beforeSend: function () {
        console.log("Sending data");
      },
      //A function to be run when the request succeeds
      success: function (response) {
        console.log(response);
      },
      //A function to run if the request fails.
      error: function () {
        console.log("Something got wrong");
      },
      //The local timeout (in milliseconds) for the request, after this time will be an error
      timeout: 1000,
    });
    return false;
  });
});
