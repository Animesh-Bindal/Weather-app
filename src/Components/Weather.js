import React, { useState, useEffect } from 'react'
import "./Weather.css"
import Mainweather from './Mainweather';

export default function Weather(props) {
    const [lati, setlati] = useState('');
    const [longi, setlongi] = useState('');
    const [weatherdetails, setweatherdetails] = useState([]);

    const [haze, setHaze] = useState('')
    const [temp, settemp] = useState('')
    const [realfeel, setrealfeel] = useState('')
    const [pressure, setpressure] = useState('')
    const [humidity, sethumidity] = useState('')
    const [clouds, setclouds] = useState('')
    const [visibility, setvisibility] = useState('')
    const [windspeed, setwindspeed] = useState('')
    const [sunrise, setsunrise] = useState('')

    const lowerr = (word) => {
        const lower = word.toLowerCase();
        return lower;
    }
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const getlatlong = async () => {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${lowerr(props.textt)},IN%20&limit=1&appid=${props.api}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setlati(parsedData[0]["lat"]);
        setlongi(parsedData[0]["lon"]);

        const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${parsedData[0]["lat"]}&lon=${parsedData[0]["lon"]}&appid=${props.api}`;
        let data2 = await fetch(url2);
        let parsedData2 = await data2.json();
        // console.log(parsedData2.weather[0].main);
        setweatherdetails(parsedData2);

        setHaze(capitalize(parsedData2.weather[0].main));
        settemp(convertKtoC(parsedData2.main.temp));
        setrealfeel(convertKtoC(parsedData2.main.feels_like));
        setpressure(parsedData2.main.pressure);
        sethumidity(parsedData2.main.humidity);
        setclouds(parsedData2.clouds.all);
        setvisibility(parsedData2.visibility);
        setwindspeed(parsedData2.wind.speed);
        setsunrise(convertunixtoist(parsedData2.sys.sunrise));
    }
    const convertKtoC = (temp) => {
        return (temp - 273.15).toFixed(2);
    }
    const convertunixtoist = (unixx) => {
        let unixTimestamp = unixx;
        let dateObj = new Date(unixTimestamp * 1000);
        let datee = dateObj.toLocaleTimeString("it-IT");
        let utcString = dateObj.toUTCString();
        let time = utcString.slice(-11, -4);
        let hours = dateObj.getUTCHours();

        let formattedTime = datee;
        return formattedTime;
    }

    useEffect(() => {
        getlatlong();
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Mainweather text={props.textt} long={longi} lat={lati} haze={haze} temp={temp} realfeel={realfeel} pressure={pressure} humidity={humidity} clouds={clouds} visibility={visibility} windspeed={windspeed} sunrise={sunrise} />

            {/* <div className='d-flex flex-column justify-content-center align-items-center'>
                <div>48 Hour Forecast</div>
                <div>
                    <div className="container">

                    </div>
                </div>
            </div> */}

        </>
    )
}

/*
<div className="contt d-flex flex-column align-items-center">
                <div className="states my-4">{capitalize(props.textt)}, IN</div>
                <div className="latlong my-4 ">LATITUDE: {longi}  ,  LONGITUDE: {lati}</div>
                <div className="hazyy mt-4 "><img src={hazee} className='imagee' alt='none' />{capitalize(weatherdetails.weather[0].main)}</div>
                <div className="temper mt-2">{convertKtoC(weatherdetails.main.temp)} &#176; C</div>
                <div className="realfeel mt-2" >Real Feel : {convertKtoC(weatherdetails.main.feels_like)} &#176; C</div>
                <div className="rowd d-flex flex-row mt-5 align-items-center justify-content-center text-center">
                    <div className="mx-4">Pressure: {weatherdetails.main.pressure} hPa</div>
                    <div className="mx-4">Humidity: {weatherdetails.main.humidity} %</div>
                    <div className="mx-4">Clouds: {weatherdetails.clouds.all} Okta </div>
                    <div className="mx-4">Visibility: {weatherdetails.visibility} m</div>
                    <div className="mx-4">Wind Speed: {weatherdetails.wind.speed} m/s</div>
                    <div className="mx-4">Sunrise: {convertunixtoist(weatherdetails.sys.sunrise)}</div>
                </div>
            </div>
*/