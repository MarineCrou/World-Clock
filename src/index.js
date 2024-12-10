const cities = {
  auckland: "Pacific/Auckland",
  sydney: "Australia/Sydney",
  paris: "Europe/Paris",
  london: "Europe/London",
  "new-york": "America/New_York",
};

let selectedCity = null;
let intervalId = null;

let getAllCities = () => {
  let featuredCityHTML = "";
  for (let city in cities) {
    let time = moment.tz(cities[city]).format("HH:mm");
    let date = moment.tz(cities[city]).format("MMMM Do YYYY");

    featuredCityHTML =
      featuredCityHTML +
      `     <div class="city-sub-container">
      <div id="city-data">
            <h2 class="city">${city}</h2>
            <p class="date">${date}</p>
          </div>
          <div class="time">${time}</div>
      </div>    
         <hr /> `;
  }

  let displayAllCitiesOnLoad = document.querySelector(".city-time-container");
  displayAllCitiesOnLoad.innerHTML = featuredCityHTML;
};

let displaySelectedCity = () => {
  if (selectedCity === "current") {
    area = moment.tz.guess();
    cityName = area.replace("_", " ").split("/")[1];
    selectedCity = cityName.toLowerCase();
  }

  let time = moment.tz(cities[selectedCity]).format("HH:mm");
  let date = moment.tz(cities[selectedCity]).format("MMMM Do YYYY");

  let featureCityData = document.querySelector(".city-time-container");
  featureCityData.innerHTML = `     <div class="city-sub-container">
          <div id="city-data">
          <h2 class="city">${selectedCity}</h2>
          <p class="date">${date}</p>
          </div>
          <div class="time">${time}</div>
          </div>    `;
};

let getCity = (e) => {
  selectedCity = e.target.value || null;
  clearInterval(intervalId);

  if (selectedCity === null) {
    intervalId = setInterval(getAllCities, 5000);
    getAllCities();
  } else {
    intervalId = setInterval(displaySelectedCity, 5000);
    displaySelectedCity();
  }
};

let onLoadCities = () => {
  getAllCities();
  intervalId = setInterval(getAllCities, 5000);
};

let cityDisplayed = document.querySelector("#select-form");
cityDisplayed.addEventListener("change", getCity);
window.addEventListener("load", onLoadCities);
