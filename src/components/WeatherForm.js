import React from 'react';
import './WeatherForm.css'

const WeatherForm = props =>{
    return(
        <div className='WeatherForm'>
            <form onSubmit={props.getWeather}>
                <div className='City'>
                    <input type='text' name='city' placeholder='Your City' autoFocus/>
                </div>
                <div className='Country'>
                    <input type='text' name='country' placeholder='Your Country'/>
                </div>
                <button>
                    Give a Weather
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;