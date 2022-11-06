var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var humidity = document.querySelector('.humidity');
var pressure = document.querySelector('.pressure');
var wind_speed = document.querySelector('.wind');



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['main']['humidity'];
  var pressureValue = data['main']['pressure'];
  var windValue = data['wind']['speed'];


  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+Math.ceil(tempValue - 273.15)+" Celcius";
  humidity.innerHTML = "Humidity - "+humidityValue+" %";
  pressure.innerHTML = "Pressure - "+pressureValue+" hPa";
  wind_speed.innerHTML = "Wind - "+windValue+" m/s";

  input.value ="";

})
.catch(err => alert("Wrong city name!"));
})



