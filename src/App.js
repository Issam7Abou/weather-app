import './App.css';

import WeatherForm from './components/WeatherForm/weather-form.component';
import WeatherDisplay from './components/WeatherDisplay/weather-display.component';

import { useDataContext } from './DataContext/DataContext';

function App() {
  const { weatherData } = useDataContext();

  return (
    <div className="App">
      {/* Conditionally render WeatherForm or WeatherDisplay based on the weatherData*/}
      {weatherData !== null ? <WeatherDisplay /> : <WeatherForm />}
    </div>
  );
}

export default App;