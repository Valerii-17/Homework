const API_KEY = '77778e59ee1b3b01d25bd624646837cb';

function getWeather() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.988&lon=36.233&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {

            console.log(data);

            const iconCode = data.weather[0].icon;

            document.querySelector('.city').textContent = data.name;

            document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;

            document.querySelector('.humidity').textContent = (data.main.humidity);

            document.querySelector('.pressure').textContent = (data.main.pressure);

            document.querySelector('.wind').textContent = `${Math.round(data.wind.speed * 3.6)}`;

            document.querySelector('.description').textContent = data.weather[0].description;

            document.querySelector('.feels').textContent = `${Math.round(data.main.feels_like)}°C`;


        })
        .catch(error => {
            console.log(error);
        });

}

getWeather();


const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
    refreshBtn.classList.add('rotate');

    getWeather();

    setTimeout(() => {
        refreshBtn.classList.remove('rotate');
    }, 700);

});

function updateDateTime() {

    const now = new Date();

    const time =
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

    const date =
        now.toLocaleDateString('en-UK', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });


    const weekday =
        now.toLocaleDateString('en-UK', {
            weekday: 'short'
        });

    document.querySelector('.time').textContent = time;

    document.querySelector('.date').textContent =
        `${weekday}, ${date}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);