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
.then(data => {
    console.log(data);
    let cityValue = data ['name'];
    let tempValue = Math.round(data['main']['temp']);
    let pressValue = data['main']['pressure'];
    let humValue = data ['main']['humidity'];
    let windValue = data ['wind'] ['speed'];
    let descValue = data ['weather'][0]['main'];

    city.innerHTML = cityValue;
    temp.innerHTML =  tempValue + "°c";
    pressure.innerHTML = "Lufttryck <br>" + pressValue + " hPa";
    humidity.innerHTML = "Luftfuktighet <br>" + humValue + " %";
    wind.innerHTML = "Vindhastighet <br>" + windValue + " km/h";
    desc.innerHTML = descValue;
});  