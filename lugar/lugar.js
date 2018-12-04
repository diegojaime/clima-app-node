const axios = require('axios')

const getLugarLatLng = (direccion) => {

    let encodedUrl = encodeURI(direccion)
        //console.log(encodedUrl)

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
        .then(resp => {
            let location = resp.data.results[0]

            console.log('Direccion: ', location.formatted_address)
            console.log('Latitud: ', location.geometry.location.lat);
            console.log('Longitud: ', location.geometry.location.lng);

            //console.log(JSON.stringify(resp.data, undefined, 2))
            //console.log(resp.status)
        })
        .catch(e => console.log('Error!!!! ', e))

}

module.exports = {
    getLugarLatLng
}