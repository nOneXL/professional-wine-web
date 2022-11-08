function myFunction() {
  var error_massege = "";
  var user = document.getElementById("user").value;
  var userRGEX = /^[a-z A-Z]+$/;
  var userResult = userRGEX.test(user);
  if (userResult == false) {
    error_massege += "Shop name: allow letters only / Can't be empty\n";
    event.preventDefault();
    event.stopPropagation();
  }

  var price = document.getElementById("price").value;
  var priceRGEX = /^\d+$/;
  var priceResult = priceRGEX.test(price);
  if (priceResult == false) {
    error_massege += "Price: allow numbers only / Can't be empty\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (price < 0) {
    error_massege += "pice: must be bigger then 0\n";
    event.preventDefault();
    event.stopPropagation();
  }

  var website = document.getElementById("website").value;
  var websiteRGEX =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  var websiteResult = websiteRGEX.test(website);
  if (websiteResult == false) {
    error_massege += "website: allow avalid URL only / Can't be empty\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (error_massege) alert(error_massege);
}
