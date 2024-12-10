# World Clock App 🌍⏰

**A responsive web app that displays the current time for cities worldwide!**  
This project is a World Clock Application that dynamically displays the current time and date for a list of cities. Users can view all cities simultaneously or select a specific city to display only its time and date. The time updates in real-time every second.
https://world-clock-fr.netlify.app/

---

## 🚀 Features

- **Real-Time Clocks:** Displays the current time for multiple cities in real-time, updating dynamically.
- **City Selection:** Users can select a city from a dropdown menu to view its time and date exclusively.
  - Users can select a city from a dropdown menu to view its time and date exclusively.
  - Selecting `Select a City` in the dropdown menu (select input) displays the time and date for that city.
  - Selecting `Current Location` will display the user's date & time, if timezone is in existing seeded list.
- **Timezone Conversion:** Handles complex timezone differences using the **Moment.js** library, including Daylight Saving Time adjustments.

---

## 💪 Project Requirements

Project should include the following functionalities:

- 3 different dates and times of different locations in different time zones
- A select element with at least 3 different locations
- Bonus: A way to connect the homepage when displaying the location another city
- Bonus 2: The ability to see the date and time of the user's current location

I did this project in a day, give or take. The challenge was created by SheCodes.io. The design was inspired by SheCodes.io

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Time Handling:** [Moment.js](https://momentjs.com/) library for managing timezones and formatting, using cnd links for both time and timezones
- **Styling Frameworks:** CSS Flexbox and Media Queries for a more responsive design.
- **Dataset:** City names and timezone information are manually curated in a local dataset.

---

## How It Works

### Core Functions

1. `getAllCities()`:

- Displays the time and date for all predefined cities.
- Updates every second when no specific city is selected.

2. `displaySelectedCity()`:

- Displays the time and date for the currently selected city.
- Updates every second when a specific city is selected.

3. `getCity(event)`:

- Handles the dropdown menu selection.
- If a city is selected, switches to display only that city.
- If "Select a city" is chosen, switches back to displaying all cities.

4. `onLoadCities()`:

- Initializes the app by displaying all cities and setting an interval for real-time updates.

### Cities Included

- Auckland: Pacific/Auckland
- Sydney: Australia/Sydney
- Paris: Europe/Paris
- London: Europe/London
- New York: America/New_York

---

## 📂 Project Structure

```markdown
.
├── index.html # Main HTML file
├── style.css # Styling for the app
├── app.js # Core JavaScript logic
├── assets/ # Icons and other assets
└── README.md # Project documentation
```

---

## Code Overview

### Key Variables

- `cities`: An object containing city names as keys and their respective timezones as values.
- `selectedCity`: Tracks the currently selected city (or null for all cities).
- `intervalId`: Stores the ID of the current interval to manage updates effectively.

### Key Event Listeners

- `window.addEventListener("load", onLoadCities);`
  Runs onLoadCities() to display all cities on page load.
- `cityDisplayed.addEventListener("change", getCity);`
  Updates the displayed city or reverts to all cities based on user selection.

---

## Installation & Setup

1. Clone the Repository:

```bash
Copy code
git clone https://github.com/MarineCrou/World-Clock.git
```

2. Open the Project: Open index.html in your browser.
3. Run Locally: Use a live server (e.g., VSCode Live Server) to test the app with real-time updates.
4. Add as many new cities as you'd like, in the HTML options. Be sure to add them as well to the `cities` objects in the index.js file and assign them a timezone, thank to moment.js framework.

## Future Enhancements

1. Add More Cities: Expand the list of cities for broader global coverage or more realistically, use an API.
2. Interactive Design: Include animations or transitions for a more dynamic user interface.
3. Additional Features:
   Allow users to add custom cities by inputting timezones.
   Integrate a weather API for city-specific weather details.
