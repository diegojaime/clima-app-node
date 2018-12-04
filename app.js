const argv = require('./config/yargs').argv
const axios = require('axios')
const lugar = require('./lugar/lugar2')
const clima = require('./clima/clima')

console.log(argv.direccion)

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion)
        console.log(`Lat: ${coordenadas.lat}, Lon: ${coordenadas.lng}`);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng)

        return (`El clima en ${coordenadas.direccion} es de ${temp.temperatura} °C`)
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))


// El código de arriba sustituye al de abajo pero haciendo las llamadas con async y await
/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp)
    })
    .catch(e => console.log(e))


clima.getClima(20.6719563, -103.416501)
    .then(resp => {
        console.log(resp)
    })
    .catch(e => console.log(e))
    */