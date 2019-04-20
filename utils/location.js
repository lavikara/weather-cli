const axios = require("axios")

// Using axios to get location from location api
module.exports = async () => {
    const results = await axios({
        method: "get",
        url: "https://api.ipdata.co?api-key=ff38b67eaf9e0c4abde9d443c6fbec7fabe22dc7b89aaf53d6e93111"
    })
    
    const { time_zone, country_name, city } = results.data
    return {
        city: city,
        country_name: country_name,
        time_zone: time_zone.current_time 
    }
}