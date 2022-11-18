function checkToggle(element, valueOne, valueTwo, valueThree,
                     valueOneClass, valueTwoClass, valueThreeClass) {
  if (valueOne && valueTwo && valueThree) { 
    return element.toggle(
      (element.find(valueOneClass).text().toLowerCase().indexOf(valueOne) > -1) &&
      (element.find(valueTwoClass).text().toLowerCase().indexOf(valueTwo) > -1) &&
      (element.find(valueThreeClass).text().toLowerCase().indexOf(valueThree) > -1))
  } else if (!valueOne && valueTwo && valueThree) {
    return element.toggle(
      (element.find(valueTwoClass).text().toLowerCase().indexOf(valueTwo) > -1) &&
      (element.find(valueThreeClass).text().toLowerCase().indexOf(valueThree) > -1))
  } else if (valueOne && !valueTwo && valueThree) {
    return element.toggle(
      (element.find(valueOneClass).text().toLowerCase().indexOf(valueOne) > -1) &&
      (element.find(valueThreeClass).text().toLowerCase().indexOf(valueThree) > -1))
  } else if (valueOne && valueTwo && !valueThree) {
    return element.toggle(
      (element.find(valueOneClass).text().toLowerCase().indexOf(valueOne) > -1) &&
      (element.find(valueTwoClass).text().toLowerCase().indexOf(valueTwo) > -1))
  } else if (!valueOne && !valueTwo && valueThree) {
    return element.toggle(
      (element.find(valueThreeClass).text().toLowerCase().indexOf(valueThree) > -1))
  } else if (!valueOne && valueTwo && !valueThree) {
    return element.toggle(
      (element.find(valueTwoClass).text().toLowerCase().indexOf(valueTwo) > -1))
  } else {
    return element.toggle(
      (element.find(valueOneClass).text().toLowerCase().indexOf(valueOne) > -1))
  }
}

$(document).ready(() => {
  var nameValue
  var wineryValue
  var countryValue


  $("#NameInput").on("keyup", function () {
    nameValue = $(this).val().toLowerCase();
    $(" .wine-card").filter(function () {
      checkToggle($(this), nameValue, wineryValue, countryValue, ".card-title", ".card-winery", ".card-country")
    });
  });

  $("#WineryInput").on("keyup", function () {
    wineryValue = $(this).val().toLowerCase();
    $(" .wine-card").filter(function () {
      checkToggle($(this), nameValue, wineryValue, countryValue, ".card-title", ".card-winery", ".card-country")
    });
  });
  $("#CountrySearch").on("keyup", function () {
    countryValue = $(this).val().toLowerCase();
    $(".wine-card").filter(function () {
      checkToggle($(this), nameValue, wineryValue, countryValue, ".card-title", ".card-winery", ".card-country")
    });
  });
});
