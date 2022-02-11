var searchBtn = $("#searchBtn");

$("#searchBtn").click(function () {
  alert("AWOOOO");
});

//
Promise.all([
  fetch(
    "https:api.openweathermap.org/data/2.5/onecall?lat=insert LAT here&lon=insertLON here&exclude={part}&appid=480554773b84ca0bbe144db4c1fb5c42"
  ),
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=480554773b84ca0bbe144db4c1fb5c42"
  ),
]);

fetch(
  "https:api.openweathermap.org/data/2.5/onecall?lat=insert LAT here&lon=insertLON here&exclude={part}&appid=480554773b84ca0bbe144db4c1fb5c42"
).then(
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=480554773b84ca0bbe144db4c1fb5c42"
);
