/*  EVENT HELPERS
    .click(), .dblclick(), etc.
*/

$("#lead-banner").dblclick(function() {
  alert("You clicked me!");
  $(this).off("dblclick");
});