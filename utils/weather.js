const axios = require("axios")

// Using axios to get weather from weather api
module.exports = async (location) => {
    let result

    try{
        result = await axios({
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country_name}&APPID=a0c70a119e6b92071c4b8aba90a122cd`
    
        })    

    }catch(error){
        console.error(error)
    }
    return result.data
}
    