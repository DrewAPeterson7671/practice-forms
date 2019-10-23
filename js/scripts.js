$(document).ready(function() {
  $("form#input").submit(function(event) {
    var alcohol = $("#alcohol").val();
    var movie = $("input:radio[name=movie]:checked").val();
    var birth = $("#birth").val();
    var color = $("#color").val();



    $(".alcohol").text(alcohol);
    $(".movie").text(movie);
    $(".birth").text(birth);
    $(".color").text(color);

    event.preventDefault();

  });





});
