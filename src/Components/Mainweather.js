import React from 'react'
import "./Weather.css"
import hazee from "./haze.png"
export default function Mainweather(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div className="contt d-flex flex-column align-items-center">
                <div className="states my-4">{capitalize(props.text)}, IN</div>
                <div className="latlong my-4 ">LATITUDE: {props.long}  ,  LONGITUDE: {props.lat}</div>
                <div className="hazyy mt-4 "><img src={hazee} className='imagee' alt='none' />{props.haze}</div>
                <div className="temper mt-2">{props.temp} &#176; C</div>
                <div className="realfeel mt-2" >Real Feel : {props.realfeel} &#176; C</div>
                <div className="rowd d-flex flex-row mt-5 align-items-center justify-content-center text-center">
                    <div className="mx-4">Pressure: {props.pressure} hPa</div>
                    <div className="mx-4">Humidity: {props.humidity} %</div>
                    <div className="mx-4">Clouds: {props.clouds} Okta </div>
                    <div className="mx-4">Visibility: {props.visibility} m</div>
                    <div className="mx-4">Wind Speed: {props.windspeed} m/s</div>
                    <div className="mx-4">Sunrise: {props.sunrise} AM</div>
                </div>
            </div>
        </>
    )
}
