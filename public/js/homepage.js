

const Temp = document.querySelector("#temp");
const Bestwine = document.querySelector("#bestwine");
const Pic = document.querySelector("#Pic");
const city = document.querySelector("#city");
const input = document.querySelector("#input");
const loc = document.querySelector("#loc");
const best = document.querySelector("#best");
input.onsubmit = (e) => {
  e.preventDefault();
  weatherUpdate(city.value);
  city.value = "";
};
weatherUpdate = (city) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      
      if( data.main.temp > 293.15){
        loc.innerHTML = "The weather in your location is:"
        Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        best.innerHTML = "The best wine for this weather will be:"
        Bestwine.innerHTML = "White";
        Pic.innerHTML = "<img src='/images/Whitewine.png' style='width:2%' >";
      }
      else{
        loc.innerHTML = "The weather in your location is:"
        Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        best.innerHTML = "The best wine for this weather will be:"
        Bestwine.innerHTML = "Red";
        Pic.innerHTML = "<img src='/images/Redwine.png' style='width:2%' >";
        
      }
    }
  };
};
