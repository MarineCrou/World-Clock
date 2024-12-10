const cities = {
  auckland: "Pacific/Auckland",
  sydney: "Australia/Sydney",
  paris: "Europe/Paris",
  london: "Europe/London",
  "new-york": "America/New_York",
};

let selectedCity = null;

let getAllCities = () => {
  let featuredCityHTML = "";
  for (let city in cities) {
    let time = moment.tz(cities[city]).format("HH:mm:ss");
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

let getCity = (e) => {
  selectedCity = e.target.value;

  let time = moment.tz(cities[selectedCity]).format("HH:mm:ss");
  let date = moment.tz(cities[selectedCity]).format("MMMM Do YYYY");

  let featureCityData = document.querySelector(".city-time-container");
  featureCityData.innerHTML = `     <div class="city-sub-container">
        <div id="city-data">
        <h2 class="city">${selectedCity}</h2>
        <p class="date">${date}</p>
        </div>
        <div class="time">${time}</div>
        </div>    `;
  return time;
};

// let onLoadCities = () => {
//   if (selectedCity === null) {
//     getAllCities();
//   } else {
//     getCity(selectedCity);
//   }
// };

let cityDisplayed = document.querySelector("#select-form");
cityDisplayed.addEventListener("change", getCity);

window.addEventListener("load", onLoadCities);
