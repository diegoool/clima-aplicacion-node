const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2458565f921c5c6bd8e7e4718676fa6b`)


    return {

        clima: resp.data.main.temp
    }
}
module.exports = {
    getClima
}