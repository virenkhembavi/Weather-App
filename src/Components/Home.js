import React, { useState } from 'react'
import { Wheather } from '../api/Api'
import './Home.css'
import Loading from '../Img/icons8-loading-circle.gif'

function Home() {
    const [data, setData] = useState([]);
    const [weather, setWheather] = useState([])
    const [FormData, setFormData] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Wheather(FormData)
            setData(response.data)
            setWheather(response.data.weather)
        } catch (err) {
            console.log(err)
        }
    }

    let cityPressure = data.main

    return (
        <div className='HeadWapper'>
            <div className='Main'>
                <form className='Main2' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search..' name='search' value={FormData} onChange={(e) => setFormData(e.target.value)} className='inputbox' />
                    <button type="submit" className='buttonbox' >Search</button>
                </form>
            </div>
            <div className='Card'>
                {data.cod === 200 ?
                    <>
                        <h2>{data.name}</h2>
                        {weather.map((item) => {
                            return (
                                <p key={item.id}>{item.main}</p>
                            )
                        })}
                        <div className='cardButtom'>
                            <div>
                                <h4 style={{ marginBottom: "-10px" }}>Humidity</h4>
                                <p>{cityPressure.humidity}</p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: "-10px" }}>Pressure</h4>
                                <p>{cityPressure.pressure}</p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: "-10px" }}>Temp</h4>
                                <p>{cityPressure.temp}</p>
                            </div>
                        </div>
                    </>
                    :
                    <div className="loading">
                        <img src={Loading} alt="loading" width="80px" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Home