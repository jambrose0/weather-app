var key = "480554773b84ca0bbe144db4c1fb5c42";
var searchEl = $("#get-city");

function citySearch() {
  var cityName = searchEl.val();
  var search = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  fetch(search)
    .then(function (response) {
      if (200 !== response.status) {
        console.log("There's a problem.  Status:" + response.status);
      }
      return response.json();
    })
    .then(function (response) {
      var place = response.coord;
      getForecast(place.lat, place.lon, place.temp, cityName);
    });
}
function getForecast(lat, lon, cityName) {
  var cityWeather = `https:api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=imperial&appid=480554773b84ca0bbe144db4c1fb5c42`;
  fetch(cityWeather)
    .then(function (response) {
      if (200 !== response.status) {
        console.log("There's a problem.  Status:" + response.status);
      }
      return response.json();
    })
    .then(function (response) {
      var cities = citySearch.cityName;
      var codeIcon = response.current.weather[0].icon;
      var iconEl = `http://openweathermap.org/img/wn/${codeIcon}.png`;
      var tempEl = response.current.temp;
      var windEl = response.current.wind_speed;
      var uvEl = response.current.uvi;
      var humEl = response.current.humidity;
      var dateEl = response.current.dt;
      var showDate = new Date(dateEl * 1000).toLocaleDateString("en-US");

      //today info
      //add city name
      $("#city-weather").append(`<img src=${iconEl}></img>`);
      $("#city-weather").append($("<li>").addClass("details").text(showDate));
      $("#city-weather").append(
        $("<li>")
          .addClass("details")
          .text("Temp: " + tempEl)
      );
      $("#city-weather").append(
        $("<li>")
          .addClass("details")
          .text("Wind: " + windEl)
      );
      $("#city-weather").append(
        $("<li>")
          .addClass("details")
          .text("Humidity: " + humEl)
      );
      $("#city-weather").append(
        $("<li>")
          .addClass("details")
          .text("UV Index: " + uvEl)
      );
      //5day, date, icon, temp, wind, humidity
    });
}

$("#searchBtn").click(function () {
  citySearch();
});
