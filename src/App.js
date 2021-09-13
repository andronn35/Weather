import { Route, BrowserRouter , Switch } from "react-router-dom"
import './App.css';
import MainPage from './components/MainPage/MainPage';
import CityForecast from './components/CityForecast/CityForecast';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={ () => <MainPage /> } />
          <Route path='/city/:cityId?' render={ (props) => <CityForecast {...props}/> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
