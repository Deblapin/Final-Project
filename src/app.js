function displayTemperature(response) {console.log(response.data)};

let apiKey = "bae35d99184617162bd406c1c6a7489e";
let apiUrl =
 `https://api.openweathermap.org/data/2.5/weather?q=Tel Aviv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);