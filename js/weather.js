function onGeoOk(position) {
  const API_KEY = "a5e5ee4265bb2182f314278ff98e6db4";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let weatherIcon = {
        "01": "fas fa-sun",
        "02": "fas fa-cloud-sun",
        "03": "fas fa-cloud",
        "04": "fas fa-cloud-meatball",
        "09": "fas fa-cloud-sun-rain",
        10: "fas fa-cloud-showers-heavy",
        11: "fas fa-poo-storm",
        13: "far fa-snowflake",
        50: "fas fa-smog",
      };
      const weather = document.querySelector(".first_child");
      const city = document.querySelector(".second_child");
      const temp = document.querySelector(".third_child");
      const weatherP = document.querySelector(".fourth_child");

      weatherP.innerText = `${data.sys.country} Weather`;
      weatherP.classList.add("weather");
      weather.innerText = `${data.weather[0].main} `;
      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}℃`;

      const icon = document.createElement("i");
      icon.className = weatherIcon[data.weather[0].icon.slice(0, 2)];
      weather.appendChild(icon);
      console.log(data);
    });
}
function onGeoError() {
  alert("can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
