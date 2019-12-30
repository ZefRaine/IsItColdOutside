function myFunction() {
    var element, name, arr;
    element = document.getElementById("spinner");
    name = "spinning";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    } else element.className -= " " + name;
}

function isitCold() {}
window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    const temperatureSection = document.querySelector('.temperature-section');
    const temperatureSpan = document.querySelector('.temperature-section span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/850c368d3350078f8de9eb606bb72207/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {
                        temperature,
                        summary,
                        icon
                    } = data.currently;
                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    // CELSIUS FORMULA
                    let celsius = (temperature - 32) * (5 / 9);
                    //Set Icons
                    setIcons(icon, document.querySelector(".icon"));
                    // Change temperature to Fahrenheit/Celsius
                    temperatureSection.addEventListener('click', function () {
                        if (temperatureSpan.textContent === "°F") {
                            temperatureSpan.textContent = "°C"
                            temperatureDegree.textContent = Math.floor(celsius);
                        } else {
                            temperatureSpan.textContent = "°F"
                            temperatureDegree.textContent = temperature;
                        }
                    });
                });
        });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "white"
        });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});