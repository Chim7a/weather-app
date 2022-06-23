import React from 'react';

const WeatherData = ({data}) => {
  return (
    <div>
        <div>
            <div>
                <div>
                    <p style={{fontSize:"3.5rem", fontWeight:"bolder"}}>{data.name}</p>
                </div>

                <div>
                    {data.main ? <h1>{data.main.temp.toFixed()}<span style={{fontSize:"2.5rem"}}>°C|°F</span></h1> : null}
                </div>
                
                <div>
                {data.weather ? <p style={{textAlign:"center", fontWeight:"bolder"}}>{data.weather[0].main}</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherData;