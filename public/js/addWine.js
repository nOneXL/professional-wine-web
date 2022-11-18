$(() => {
  document.getElementById("addWine").onsubmit = function (event) {
    myFunction();
  };

  function myFunction() {
    let error_massege = "";
    const name = document.getElementById("name").value;
    const nameRGEX = /^[a-z A-Z 0-9]+$/;
    const nameResult = nameRGEX.test(name);
    if (nameResult === false) {
      error_massege += "name: allow letters or numbers only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }

    if (name.length < 2 && name.length > 0) {
      error_massege += "name: Minimum allowed length is 2\n";
      event.preventDefault();
      event.stopPropagation();
    }

    if (name.length > 20) {
      error_massege += "name: Maximum allowed length is 2 \n";
      event.preventDefault();
      event.stopPropagation();
    }

    const country = document.getElementById("country").value;
    const countryRGEX = /^[a-z A-Z]+$/;
    const countryResult = countryRGEX.test(country);
    if (countryResult === false) {
      error_massege += "country: allow letters only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }

    const region = document.getElementById("region").value;
    const regionRGEX = /^[a-z A-Z]+$/;
    const regionResult = regionRGEX.test(region);
    if (regionResult === false) {
      error_massege += "region: allow letters only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }

    var winery = document.getElementById("winery").value;
    var wineryRGEX = /^[a-z A-Z0-9]+$/;
    var wineryResult = wineryRGEX.test(winery);
    if (wineryResult == false) {
      error_massege += "winery: allow letters only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }

    var atLeastOnTypeChecked = Math.max(...Array.from($('.grapes')).map(elem => elem.checked))
    if (atLeastOnTypeChecked == false) {
      error_massege += "grapes: Check at least one grape\n";
      event.preventDefault();
      event.stopPropagation();
    }

    var Year = document.getElementById("year").value;
    var YearRGEX = /^\d+$/;
    var YearResult = YearRGEX.test(Year);
    if (YearResult == false) {
      error_massege += "Year: allow numbers only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }

    if (Year < 1900 && Year > 0) {
      error_massege += "Year: Minimum value is 1900\n";
      event.preventDefault();
      event.stopPropagation();
    }

    if (Year > 2022) {
      error_massege += "Year: Maximum value is: 2022\n";
      event.preventDefault();
      event.stopPropagation();
    }

    var rate = document.getElementById("rate").value;
    var rateRGEX = /^[0-9]\d*(\.\d+)?$/;
    var rateResult = rateRGEX.test(rate);
    if (rateResult == false) {
      error_massege += "rate: allow numbers only / Can't be empty\n";
      event.preventDefault();
      event.stopPropagation();
    }
    if (rate > 5 || rate < 1) {
      error_massege += "rate: allow number is between 1-5\n";
      event.preventDefault();
      event.stopPropagation();
    }

    if (error_massege) alert(error_massege);
  }
});
