async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "954d5b9970f22f3675c5e3f48cabe8f1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} km/h</p>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML = "City not found";

    }
}