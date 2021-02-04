const button = document.querySelector('#button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const city = document.querySelector('#city').value
    const Bring = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=9bea4fffe3d51d2da210f4269fa3a525`)
        const data = await response.json();
        console.log(data);
        const body = document.querySelector('body')
        const showWeather = document.createElement('div')
        showWeather.id = "ShowWeather"
        showWeather.innerHTML = `<p> <strong> Cidade :${data.name} </strong></p> <p><strong>Temperatura : ${Math.floor(data.main.temp)}º </strong></p> <p> <strong> <strong> ${data.weather.map(item => item.description)} </strong></p> `
        body.append(showWeather);
        const rain = (data.clouds.all);
        console.log(rain);

        if (rain >= 60){
        body.style.background="url('https://a-static.besthdwallpaper.com/menina-com-guarda-chuva-papel-de-parede-2560x1600-26699_7.jpg')"
        body.style.backgroundPosition="center"
        }
        else {
            body.style.background="url('https://wallpapercave.com/wp/wp4077236.jpg')"
        }
    }
    Bring();
})


