const APIKEY = '366e5f70d9e70e45364730cb9a4f0221';

let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr
`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
          "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
        document.querySelector('#humidity').innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
        document.querySelector('#wind').innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
        document.querySelector(
          'footer'
        ).innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='temps'> Meteo`;
      })
    )
    .catch((err) => console.log('Erreur : ' + err));
};


document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});
apiCall('Lyon');
