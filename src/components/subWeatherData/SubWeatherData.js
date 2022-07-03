import React from 'react';
import './SubWeatherData.css';

const SubWeatherData = ({data}) => {
  return (
    <div>
        {data.name !== undefined && 
          <div className="subData">
              <div>
                    {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
                    <p>Feels Like</p>
              </div>
      
              <div>
                    {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                    <p>Humidity</p>
              </div>
      
              <div>
                    {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p> : null}
                    <p>Wind Speed</p>
              </div>
            </div>
        }
    </div>
  )
}

export default SubWeatherData;