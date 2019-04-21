const ora = require("ora")
const getWeather = require("../utils/weatherForcast")
const getLocation = require("../utils/location")

module.exports = async (args) => {
    const spinner = ora().start()
    
    try{
        const location = args.location || args.l || await getLocation()
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`Location: ${location.city}, ${location.country_name}. \nTomorrow Forcast:`)
        console.log(`\n\tDate&Time: ${weather.list[8].dt_txt}`)
        console.log(`\tDescription: ${weather.list[8].weather[0].description}\n\tTemperature: ${(weather.list[8].main.temp - 273.15).toFixed(1)}°C`)

    }catch(error){
        console.error(error);
    }
}
