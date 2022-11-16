
    document.getElementById("addblog").onsubmit = function (evant) { myFunction(evant) };

    function myFunction (evant) {

        var error_massege="";
        var title = document.getElementById('title').value;
        var titleRGEX = /^[a-z A-Z]+$/;
        var titleResult = titleRGEX.test(title);
        if (titleResult == false) {
            error_massege+="title: allow letters only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
          
        }
      

        if (title.length < 2 && (title.length>0)) {
            error_massege+="name: Minimum allowed length is 2\n";
            event.preventDefault();
            event.stopPropagation();
        }
        

        if (title.length > 20) {
            error_massege+="name: Maximum allowed length is 2 \n";
            event.preventDefault();
            event.stopPropagation();
        }

        var text = document.getElementById('text').value;
        var textRGEX = /^[a-z A-Z 0-9]+$/;
        var textResult = textRGEX.test(text);
        if (textResult == false) {
            error_massege+= "text: allow letters only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
          
        }

        if (text.length < 10 && (text.length>0)) {
            error_massege+="text: Minimum allowed length is 10\n";
            event.preventDefault();
            event.stopPropagation();
        }
        

        if (text.length > 100) {
            error_massege+="text: Maximum allowed length is 100 \n";
            event.preventDefault();
            event.stopPropagation();
        }

        
        if (error_massege)
            alert(error_massege);
    }



