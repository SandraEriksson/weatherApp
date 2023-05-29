let city = document.querySelector('#city');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.weather-description');
let pressure = document.querySelector('.pressure');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');


fetch('http://api.openweathermap.org/data/2.5/weather?id=2664454&units=metric&appid=ff8026ab97b7f4d14aa6b8af9b95210b') // hämta ifrån url
.then(res => { 
    let json = res.json();
    return json;
})