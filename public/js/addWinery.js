    function myFunction() {
        var error_massege="";
        var Name = document.getElementById('Name').value;
        var NameRGEX = /^[a-z A-Z]+$/;
        var NameResult = NameRGEX.test(Name);
        if (NameResult == false) {
            error_massege+= "Name: allow letters only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
          
        }
     
        var Country = document.getElementById('Country').value;
        var CountryRGEX = /^\d+$/;
        var CountryResult = CountryRGEX.test(Country);
        if (CountryResult == false) {
            error_massege+="Country: allow numbers only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
        }

        var Lat = document.getElementById('Lat').value;
        var LatRGEX = /^\d{0,9}(\.\d{1,6})+$/;
        var LatResult = LatRGEX.test(Lat);
        if (LatResult == false) {
            error_massege+="Lat: allow numbers only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
        }

        var Lon = document.getElementById('Lon').value;
        var LonRGEX = /^\d{0,9}(\.\d{1,6})+$/;
        var LonResult = LonRGEX.test(Lon);
        if (LonResult == false) {
            error_massege+="Lon: allow numbers only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
        }

        

                      
        var website=document.getElementById('website').value;
        var websiteRGEX = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        var websiteResult=websiteRGEX.test(website);
        if (websiteResult == false) {
            error_massege+="website: allow avalid URL only / Can't be empty\n";
            event.preventDefault();
            event.stopPropagation();
        }
        
        if (error_massege)
            alert(error_massege);
    }