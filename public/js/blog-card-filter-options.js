function reverseString(str) {
    return str.split("-").reverse().join("/");
}

$(document).on(() => {
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".row .wine-card").filter(function() {
        $(this).toggle($(this).find(".card-title").text().toLowerCase().indexOf(value) > -1)
      });
    });

    $("#startDate").on("input", function() {
        var value = reverseString(this.value)
        $(".row .wine-card").filter(function() {
          $(this).toggle($(this).find(".date-title").text().indexOf(value) > -1)
        });
      });
  });

  

  