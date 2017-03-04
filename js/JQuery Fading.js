/*  JQUERY FADING ANIMATIONS  */

$("section > h2").click(function() {
  // $(this).fadeOut(1000).fadeIn();
  $(this).fadeTo(200, 0.3).fadeTo(200, 0.8).fadeTo(200, 0.3).fadeTo(200, 0.8).fadeTo(200, 0.3).fadeTo(200, 0.8);
});