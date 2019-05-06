import React from 'react';
import './WeatherInfo.css'

const WeatherInfo = props => {
    console.log(props);
    return(
        <div className='WeatherInfo'>
            <div className='Location'>
                <p>{props.city}, {props.country}</p>
            </div>
            <div className='Temperature'>
                <h1>{props.temperature}</h1>
                <span>°C</span>
            </div>
            {props.wind_speed}
        </div>
    )
}

export default WeatherInfo;