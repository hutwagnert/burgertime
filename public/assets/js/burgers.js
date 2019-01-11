// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#newburg").val(),
      devoured: $("[name=eaten]:checked").val().trim()
    };
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
    var id = $(this).attr("id");
    var ajjja="/api/burgers/"+id;
  

    var newDevoured = {
      devoured: 0};
    // Send the PUT request.
    $.ajax(ajjja, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".eatme").on("click", function(event) {
    var id = $(this).attr("id");
    var ajjja="/api/burgers/update/"+id;
    var newDevoured = {
      devoured: 1};
    // Send the PUT request.
    $.ajax(ajjja, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});