document.getElementById("addblog").onsubmit = function () {
  myFunction();
};

function myFunction() {
  let error_message = "";

  const title = document.getElementById("title").value;
  if (title.length < 2 && title.length > 0) {
    error_message += "title: Minimum allowed length is 2\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (title.length > 50) {
    error_message += "title: Maximum allowed length is 50 \n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (text.length < 10 && text.length > 0) {
    error_message += "text: Minimum allowed length is 10\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (text.length > 1000) {
    error_message += "text: Maximum allowed length is 1000 \n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (error_message) alert(error_message);
}
