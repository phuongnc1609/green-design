/*  SHOW AND HIDE ELEMENTS
    .show()
    .hide()
    .toggle()
*/

$("img[alt=Map]").click(function() {
  // $(this).hide(1000).show(1000);
  $("section h2").toggle(1000);
});