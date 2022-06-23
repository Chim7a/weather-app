import React, {useState} from 'react';
import axios from 'axios';
import SearchInput from '../../components/searchInput/SearchInput';
import WeatherData from '../../components/weatherData/WeatherData';
import SubWeatherData from '../../components/subWeatherData/SubWeatherData';
import './Home.css';

const Home = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
  
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a18f5888e9dd084dc9b6b74971cdcc2c`
    
    const searchLocation = (Event) => {
      if (Event.key === 'Enter') {
        axios.get(url).then((res) => {
          setData(res.data)
        })
        setLocation('')
      }

    }

  return (
    <div className="home">
        <div className="subWeatherData">
            <SubWeatherData data={data}/>
        </div>

        <div className="weatherData">
            {data.name === undefined && 
            <div className="welcome__msg">
              <h2>Welcome to my Open Weather App</h2>
              <p>Developed by Chima Ikegbulam.</p>
            </div>
            }
            <WeatherData data={data} />
        </div>

        <div className="searchInput">
            <SearchInput 
                searchLocation={searchLocation}
                setLocation={setLocation}
                location={location}
            />
        </div>
    </div>
  )
}

export default Home;