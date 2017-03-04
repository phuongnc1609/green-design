/*  EVENT OBJECT  */
$("*").on("click", function(e) {
  console.log(e.target);
  console.log("The event type is: " + e.type);
  console.log("The X-cordinate of the event is: " + e.pageX);
  console.log("The Y-cordinate of the event is: " + e.pageY);
  e.stopPropagation();
});