import * as View from './view.js'
import * as Model from './model.js'

//weather tab
const main = document.getElementById("main");
const search = document.getElementById("search");

function init() {


    // pre-check data from localStore weather tab
    let checkLocal = Model.checkLocal();
    if (checkLocal === 1) {
        let storedCity = Model.readDataLocalStore('city');
        console.log(storedCity);
        if (storedCity !== null) {
            View.addCityInput(storedCity)
            Model.getWeatherByLocation(storedCity);
        }
    }



    // weather tab
    const form = document.getElementById("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = search.value;
        if (city) {
            Model.getWeatherByLocation(city);
        }
    });

}


init()


