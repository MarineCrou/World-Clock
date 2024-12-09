let getCity = (e) => {
  console.log(e.target.value);
  let cityValue = e.target.value;

  let featureCityDateHTML = "";

  if (cityValue != "") {
    const cities = {
      sydney: "Australia/Sydney",
      paris: "Europe/Paris",
      london: "Europe/London",
      "new-york": "America/New_York",
    };

    console.log();
    let time = moment.tz(cities[cityValue]).format("hh:mm:ss");
    let date = moment.tz(cities[cityValue]).format("MMMM Do YYYY");
    let city = cityValue;

    let featureCity = document.querySelector(".city");
    featureCity.innerHTML = city;
    let featureCityDate = document.querySelector(".date");
    featureCityDate.innerHTML = date;
    let featureCityTime = document.querySelector(".time");
    featureCityTime.innerHTML = time;

    // alert(`this is ${date} & ${time} in ${cityValue}`);
  } else {
    console.log("please select a city");
  }
};

let cityDisplayed = document.querySelector("#select-form");
cityDisplayed.addEventListener("change", getCity);

const worldClockCities = [];

// display all cities :
