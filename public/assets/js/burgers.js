// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newburg").val(),
      devoured: $("[name=eaten]:checked").val().trim()
    };
console.log(newBurger);

    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      });
  });


  $(".btn-danger").on("click", function(event) {
    var id = $(this).attr("id");
console.log(id);
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger id: ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".addback").on("click", function(event) {
    var iduse = $(this).attr("id");
    var neweaten = {
      id:iduse
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + iduse, {
      type: "PUT",
      data: neweaten
    })
    .then(
      function() {
        console.log("changed", neweaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});