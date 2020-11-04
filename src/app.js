function displayTemperature(response) {
    console.log(response.data);

    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let visibilityElement = document.querySelector("#visibility");



    temperatureElement.innerHTML= Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
    visibilityElement.innerHTML=response.data.sys.visibility;



}

let apiKey = "bae35d99184617162bd406c1c6a7489e";
let apiUrl =
 `https://api.openweathermap.org/data/2.5/weather?q=Tel Aviv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);