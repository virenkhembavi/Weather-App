import axios from 'axios'

const ID = "fe76b79253bb187e0770847e4e07ed40"

export const Wheather = (data) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${ID}`)
}