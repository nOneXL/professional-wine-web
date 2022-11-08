function reverseString(str) {
    return str.split("-").reverse().join("/");
}

$(document).ready(() => {
    $("#NameInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(" .wine-card").filter(function() {
        $(this).toggle($(this).find(".card-title").text().toLowerCase().indexOf(value) > -1)
      });
    });


    $("#WineryInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(" .wine-card").filter(function() {
          $(this).toggle($(this).find(".card-winery").text().toLowerCase().indexOf(value) > -1)
        });
      });
    $("#CountrySearch").on("keyup", function() {
        var value = reverseString(this.value)
        $(".wine-card").filter(function() {
          $(this).toggle($(this).find(".card-country").text().toLowerCase().indexOf(value) > -1)
        });
      });
  });