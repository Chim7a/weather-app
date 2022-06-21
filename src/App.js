import './App.css';

function App() {

  // const url =`https://api.openweathermap.org/data/2.5/weather?lat=52.9212617&lon=-1.4761491&appid=a18f5888e9dd084dc9b6b74971cdcc2c`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="location">
            <h1>60F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
              <p className="bold">65F</p>
              <p>Feels Like</p>
          </div>
          <div className="humidity">
              <p className="bold">20%</p>
              <p>Humidity%</p>
          </div>
          <div className="wind">
              <p className="bold">12MPH</p>
              <p>Speed</p>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
