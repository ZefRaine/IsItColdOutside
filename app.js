function myFunction() {
    var element, name, arr;
    element = document.getElementById("spinner");
    name = "spinning";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    } else element.className -= " " + name;
}

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(position);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/850c368d3350078f8de9eb606bb72207/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {
                        temperature,
                        summary
                    } = data.currently;

                    data.currently.temperature
                });
        });
    }
});