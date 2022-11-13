$(() => {

    document.getElementById("addWine").onsubmit = function (evant) { myFunction(evant) };

    function myFunction (evant) {
        //     var gr = [];
        //     var arr = document.querySelectorAll(".form-check-input");
        //     for (let i = 0; i < 10; i++) { if (arr[i].checked) { gr.push(arr[i].id) } }
        //     alert(gr)

        var name = document.getElementById('name').value;
        var nameRGEX = /^[a-zA-Z]+$/;
        var nameResult = nameRGEX.test(name);
        if (nameResult == false) {
            alert("name: allow letters only / Can't be empty");
            event.preventDefault();
            event.stopPropagation();
        }

        if (name.length < 2) {
            alert("name: Minimum allowed length is 2");
            event.preventDefault();
            event.stopPropagation();
        }
        

        if (name.length > 20) {
            alert("name: Maximum allowed length is 2 ");
            event.preventDefault();
            event.stopPropagation();
        }

        var country = document.getElementById('country').value;
        var countryRGEX= require('country-regex');
        var countryResult = countryRGEX.test(country);
        if (countryResult == false) {
            alert("country: allow country name only");
            event.preventDefault();
            event.stopPropagation();
        }

        var Year = document.getElementById('Year').value;
        var YearRGEX = /^\d+$/;
        var YearResult = YearRGEX.test(Year);
        if (YearResult == false) {
            alert("Year: allow numbers only / Can't be empty");
            event.preventDefault();
            event.stopPropagation();
        }

        if (Year < 1900) {
            alert("Year: Minimum value is 1900");
            event.preventDefault();
            event.stopPropagation();
        }

        if (Year > 2022) {
            alert("Year: Maximum value is: 2022");
            event.preventDefault();
            event.stopPropagation();
        }

        var type=document.getElementById('type').value; 
        var typeRGEX = /^[a-zA-Z]+$/;
        var typeResult=typeRGEX.test(type);

        if(typeResult==false){
            alert("type: select one option");
            event.preventDefault();
            event.stopPropagation();
        }
        
        var rate=document.getElementById('rate').value;
        var rateRGEX = /^\d+$/;
        var rateResult=rateRGEX.test(rate);
        if (rateResult == false) {
            alert("rate: allow numbers only / Can't be empty");
            event.preventDefault();
            event.stopPropagation();
        }
        if(rate>5 ||rate<1){
            alert("rate: allow number is between 1-5");
            event.preventDefault();
            event.stopPropagation();
        }



    }

});