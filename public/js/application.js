$(document).ready(function () {
  $("form").on("submit", function( event ){


    event.preventDefault();
    var roll = (Math.floor(Math.random() * 6) + 1);
    var rollJson = { "value": roll };
    console.log( roll );
    console.log( rollJson );

    $.post("/rolls", rollJson, function( response ){
      $( "#die" ).empty().append( response );
    });





    // post

    // edit DOM thing



  })
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});



// function submitRoll(){
//   $().post(url, data, editDOM( response ));
// };
// function editDOM();
