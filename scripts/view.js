import * as Model from './model.js'

// weather tab
export function addWeatherToPages(data){
    const temp=  Model.KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML= `        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
    <small>${data.weather[0].main}</small> <h2>${data.name}<\h2>`;

    //clean
    //main.innerHTML="";
    main.appendChild(weather);
}

export function addCityInput(city){
    search.value = city;
}