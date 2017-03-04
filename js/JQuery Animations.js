/*  JQUERY ANIMATIONS  */
$("section > h2").click(function() {
  $(this).animate({
    width: "500px",
    height: "100px"
  }, 1000, "linear", function() {
    alert("Animation completed!");
  });
});
