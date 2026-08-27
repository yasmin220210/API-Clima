async function getWeather() {
    //Conectar com API de CLIMA

    let resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131')

    let tempCelsius = resposta.data.main.temp
        
    console.log(tempCelsius)

    //Front-End
    document.getElementById('temperatura').innerHTML = `A temperatura atual de Mogi das Cruzes é: ${tempCelsius.toFixed(0)} °C`
}

//Chamar a Função
getWeather();