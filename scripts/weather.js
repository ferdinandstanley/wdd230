const apiKey = '83e1522e4a950ded0e4c33888da46ce0'; 
const city = 'Lagos';
const units = 'metric'; // Use 'imperial' for Fahrenheit
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw new Error('Weather data not found');
    const data = await response.json();

    // Extract necessary data
    const temperature = data.main.temp.toFixed(1);
    const condition = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Update the HTML
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('condition').textContent = `Condition: ${condition}`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', condition);

  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

getWeather();
