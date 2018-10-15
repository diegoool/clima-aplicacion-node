const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {

        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}

// API KEY
// AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y

// 2458565f921c5c6bd8e7e4718676fa6b