function getForecast(response) {
  console.log(response.data);
  let cityName = response.data.name;
  let cityElement = document.querySelector("#city");
  let cityTempC = Math.round(response.data.main.temp);
  let tempCElement = document.querySelector("#current-temp");
  cityElement.innerHTML = cityName;
  tempCElement.innerHTML = `${cityTempC}℃`;
}

function submitCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let unit = "metric";
  let apiKey = "120813c35ed58ddba478b72f03dd1a3e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(getForecast);
}

function myLocation(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let units = "metric";
  let apiKey = "120813c35ed58ddba478b72f03dd1a3e";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(getForecast);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myLocation);
}
let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", submitCity);
let button = document.querySelector("#current-location-element");
button.addEventListener("click", getCurrentPosition);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let today = document.querySelector("#today");
today.innerHTML = `${day} ${hours}:${minutes}`;
