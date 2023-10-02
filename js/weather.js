const API_KEY = config.apikey;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // &units=metric : 섭씨 온도로 바꿈
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data)=>{
            // 날씨 icon 추가
            const weatherIcon = document.createElement("img");
            weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.alt="icon";
            const weatherRow = document.querySelector("#weather li:first-child");
            weatherRow.appendChild(weatherIcon);

            const weather = document.querySelector("#weather li:first-child span");
            const city = document.querySelector("#weather li:last-child span");
            city.innerText = data.name;
            // 날씨 온도 올림
            weather.innerText = `${Math.ceil(data.main.temp)}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
