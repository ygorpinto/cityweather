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
        showWeather.innerHTML = `<p> <strong> Cidade :${data.name} </strong></p> <p><strong>Temperatura : ${Math.floor(data.main.temp)}º </strong></p>`
        body.append(showWeather);
    }

    Bring();
})


