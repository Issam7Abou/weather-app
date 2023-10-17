import './App.scss';

import WeatherForm from './components/WeatherForm/weather-form.component';
import WeatherDisplay from './components/WeatherDisplay/weather-display.component';

import { useDataContext } from './DataContext/DataContext';
import { useButtonContext } from './DataContext/ButtonContext';

function App() {
  const { weatherData } = useDataContext();
  const { buttonActive } = useButtonContext();

  console.log('Is HOME Button active?:', buttonActive)

  return (
    <div className="App">
      {buttonActive ? (<WeatherForm />) 
        : weatherData ? (<WeatherDisplay />) : (<WeatherForm />)
      }
    </div>
  );
}

export default App;