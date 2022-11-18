function reverseString(str) {
  return str.split("-").reverse().join("/");
}

$(document).ready(() => {
  var titleValue
  var dateValue

  $("#myInput").on("keyup", function () {
    titleValue = $(this).val().toLowerCase();
    $(".row .wine-card").filter(function () {
      if (dateValue) { 
      $(this).toggle(
        ($(this).find(".card-title").text().toLowerCase().indexOf(titleValue) > -1) &&
        ($(this).find(".date-title").text().indexOf(dateValue) > -1))
    } else {
      $(this).toggle($(this).find(".card-title").text().toLowerCase().indexOf(titleValue) > -1)
    }
    });
  });

  $("#startDate").on("input", function () {
    dateValue = reverseString(this.value);
    $(".row .wine-card").filter(function () {
      if (titleValue) { 
        $(this).toggle(
          ($(this).find(".card-title").text().toLowerCase().indexOf(titleValue) > -1) &&
          ($(this).find(".date-title").text().indexOf(dateValue) > -1))
      } else {
        $(this).toggle($(this).find(".date-title").text().indexOf(dateValue) > -1)
      }
    });
  });
});
