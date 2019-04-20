const ora = require("ora")
const getWeather = require("../utils/weather")
const getLocation = require("../utils/location")

module.exports = async (args) => {
    const spinner = ora().start()
    
    try{
        const location = args.location || args.l || await getLocation()
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`Location: ${location.city}, ${location.country_name}. \nCurrent Weather Conditions:`)
        console.log(`\n\tDate: ${location.time_zone}`)        
        console.log(`\tDescription: ${weather.weather[0].description} \n\tTemperature: ${(weather.main.temp - 273.15)}°C`)
    }catch(error){
        console.error(error);
    }
}
