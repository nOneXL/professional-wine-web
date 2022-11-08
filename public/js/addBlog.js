document.getElementById("addblog").onsubmit = function () {
  myFunction();
};

function myFunction() {
  let error_message = "";
  const title = document.getElementById("title").value;
  const titleRGEX = /^[a-z A-Z]+$/;
  const titleResult = titleRGEX.test(title);
  if (titleResult === false) {
    error_message += "title: allow letters only / Can't be empty\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (title.length < 2 && title.length > 0) {
    error_message += "name: Minimum allowed length is 2\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (title.length > 20) {
    error_message += "name: Maximum allowed length is 2 \n";
    event.preventDefault();
    event.stopPropagation();
  }

  const text = document.getElementById("text").value;
  const textRGEX = /^[a-z A-Z0-9]+$/;
  const textResult = textRGEX.test(text);
  if (textResult === false) {
    error_message += "text: allow letters only / Can't be empty\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (text.length < 10 && text.length > 0) {
    error_message += "text: Minimum allowed length is 10\n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (text.length > 100) {
    error_message += "text: Maximum allowed length is 100 \n";
    event.preventDefault();
    event.stopPropagation();
  }

  if (error_message) alert(error_message);
}
