const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7810c26e3b24b9fc3c4ae3dac6618c21`)

    console.log(resp.status)
        //console.log(resp)

    if (resp.status === 200) {
        return {
            temperatura: resp.data.main.temp
        }
    } else {
        throw new Error(`Status: ${resp.status}, statusText: ${resp.statusText}`)
    }
}

module.exports = {
    getClima
}