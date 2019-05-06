import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      temperature: '16',
      description: '',
      humidity: '',
      wind_speed: '',
      city:'Mendoza',
      country: 'Argentina'
    }
    this.getWeather = this.getWeather.bind(this)
  }
  async getWeather(e){
    e.preventDefault();
    const {city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=846c59221e4e72e17608f1bec93996ef&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();

    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      city: data.name,
      country: data.sys.country
    })
    
  }
  
  render(){
    return (
      <div className="App">
        <WeatherForm getWeather={this.getWeather}/>
        <WeatherInfo {...this.state}/>
      </div>
    );
  }
}

export default App;
