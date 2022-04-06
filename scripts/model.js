import * as View from './view.js'                               //Import view functions
const localStorage = window.localStorage;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

const apiKey = "b957cdb14d71e81f1936858034934b04";
const url = (city)=>`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


//check if brower suopports or not
export function checkLocal() {
    if (typeof (Storage) !== "undefined") {
        return 1;
    }
    return 0;
}

// read the local store if it have a date time before
export function readDataLocalStore(item) {
    return localStorage.getItem(item);
}

// save the data to localStore
export function saveDataLocalStore(item, value) {
    localStorage.setItem(item,value);
}


// function change from K to C
export function KtoC(K){
    return Math.floor(K-273.15);
}



// weather tab
// get weather
export async function getWeatherByLocation(city){
    saveDataLocalStore('city',city);
    const resp = await fetch(url(city),{origin: "cors"});
    const respData = await resp.json();

    console.log(respData);

    View.addWeatherToPages(respData);
}