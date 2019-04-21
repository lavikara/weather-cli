const ora = require("ora")
const getWeather = require("../utils/weatherForcast")
const getLocation = require("../utils/location")

module.exports = async (args) => {
    const spinner = ora().start()
    
    try{
        const location = args.location || args.l || await getLocation()
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`Location: ${location.city}, ${location.country_name}. \nFive Day Forcast:`)
        weather.list.forEach(element => {
            console.log(`\nDate&Time: ${element.dt_txt}`)
            console.log(`Description: ${element.weather[0].description} \nTemperature: ${(element.main.temp - 273.15).toFixed(1)}°C`)
        });
    }catch(error){
        console.error(error);
    }
}
