/*  EVENT BINDING
    .on() binds an event on matched element(s)
    .off() unbinds event on matched element(s)
*/

var myList = $("#points-of-sale li");
myList.on("click", function() {
  $(this).css({
    background: "pink"
  });
  myList.off("click");
});