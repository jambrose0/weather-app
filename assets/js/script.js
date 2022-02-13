//url for lat and long

var key = "480554773b84ca0bbe144db4c1fb5c42";
var searchEl = $("#get-city");

function citySearch() {
  var cityName = searchEl.val();
  var search = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  fetch(search)
    .then(function (response) {
      if (200 !== response.status) {
        console.log("There's a problem dude.  Status:" + response.status);
      }
      return response.json();
    })
    .then(function (response) {
      var place = response.coord;
      getForecast(place.lat, place.lon, place.temp);
      // console.log(getForecast);
    });
}
function getForecast(lat, lon) {
  var cities = citySearch.cityName;
  var cityWeather = `https:api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=imperial&appid=480554773b84ca0bbe144db4c1fb5c42`;
  fetch(cityWeather)
    .then(function (response) {
      if (200 !== response.status) {
        console.log("There's a problem.  Status:" + response.status);
      }
      return response.json();
    })
    .then(function (response) {
      var tempEl = response.current.temp;
      // var windEl = response.wind_speed;  how to get wind speed?
      var uvEl = response.current.uvi;
      var humEl = response.current.humidity;
      console.log(response);
      //display city and date
      `<h3>${cities}</h3>`;
      //display temp
      //display wind
      //display humidity
      //display uv index

      //check docs or console log for info that i need
    });
}
//template literal approach- more modern way

$("#searchBtn").click(function () {
  citySearch();
});
// function getForecast() {
//   var weatherLink =
("https:api.openweathermap.org/data/2.5/onecall?lat=35.582420347215304&lon=-82.55717434127367&exclude=hourly,minutely&alerts&appid=480554773b84ca0bbe144db4c1fb5c42");
//   var forecastEl = document.getElementsByClassName("forecast");

//   fetch(weatherLink)
//     .then(function (response) {
//       if (200 !== response.status) {
//         console.log("There's a problem dude.  Status:" + response.status);
//         return;
//       }
//       forecastEl[0].classList.add("loaded");
//       response.json().then(function (data) {
//         var fday = "";
//         data.daily.forEach((value, index) => {
//           if (index > 0) {
//             var weekDay = new Date(value.dt * 1000).toLocaleDateString("en", {
//               weekday: "long",
//             });
//             var icon = value.weather[0].icon;
//             var temp = value.temp.day.toFixed(0);
//             fday = `<div class="forecast-day"> <p>${weekDay}</p> <p><span class="ico-${icon}"title="${icon}"></span></p><div class='forecast-day--temp">${temp}<sup>°F</sup></div></div>`;
//             forecastEl[0].insertAdjacentHTML("beforeend", fday);
//           }
//         });
//       });
//     })
//     .catch(function (err) {
//       console.log("Fetch erro :-S", err);
//     });
// }
// document.addEventListener("DOMContentLoaded", function () {
//   var weather;
//   if ("InstersectionObserver" in window) {
//     weather = document.querySelectorAll(".weather");
//     var weatherObserver = new IntersectionObserver(
//       function (entries, observer) {
//         entries.forEach(function (entry) {
//           if (entry.isIntersecting) {
//             if (entry.target.classList.contains("weather")) {
//               fetchForecast();
//             }
//           }
//         });
//       },
//       {
//         rootMargin: "0px 0px-120px 0px",
//       }
//     );
//     weather.forEach(function (s) {
//       weatherObserver.observe(s);
//     });
//   }
// });

// // var searchBtn = $("#searchBtn");
