import { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Weather from './component/Weather/Weather';
import Days from './component/Days/Days';
import Loader from './component/Loader/Loader';

function App() {

    const apiKey = import.meta.env.VITE_API_KEY;
    let position;
    (localStorage.getItem("position")) ? position = localStorage.getItem("position") : position = "Paris";

    const [daySelected, setDaySelected] = useState(0);
    const [datas, setDatas] = useState();
    const [city, setCity] = useState(position);
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`);
              const datas = await response.json();
              (response.status === 200) ? setDatas(datas) : alert('Nom de ville incorrect');

            } catch (error) {
              console.log('===== error =====', error)
            }
        }

            fetchData();
    }, [city, apiKey]);

    function handleDayClick(event) {
        document.querySelector('.clickedDay').classList.remove('clickedDay');
        event.target.classList.add('clickedDay');
        setDaySelected(event.target.getAttribute('value'));
    }

    function handleNameChange(event) {
        setCityName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem("position", cityName);
        setCity(localStorage.getItem("position"));
        
    }

    function formateData(datas, daySelected) {
        return ({
            place: datas.location.name,
            icone: datas.forecast.forecastday[daySelected].day.condition.icon,
            temp: datas.forecast.forecastday[daySelected].day.avgtemp_c,
            wind: datas.forecast.forecastday[daySelected].day.maxwind_kph,
            degree: datas.forecast.forecastday[daySelected].hour[8].wind_degree
        });
    }

    return (
        <>
            <div className="App">
                <Header />
                <div className="row">
                    <div className="col s12 m6 push-m3">
                        <div className="weather card blue-grey darken-1">
                            <div className="card-content white-text">
                                {(datas != null)
                                ? <Weather datas={formateData(datas, daySelected)} onSubmit={handleSubmit} onNameChange={handleNameChange} cityName={cityName} />
                                : <Loader />
                                }
                            </div>
                            <div className="card-action">
                                <Days onDayClick={handleDayClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
