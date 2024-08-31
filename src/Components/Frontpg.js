import React from 'react'
import './cssfiles/Frontpg.css'
import bgg from './bgg.png'
import birds from './birds.png'
import clouds from './clouds.png'
import { Link } from 'react-router-dom';
export default function Frontpg(props) {
    const handleOnChange= (event) => {
        props.setTextt(event.target.value);
    }
    return (
        <>
            <div className="cont">
                <img src={bgg} alt="" className="design" />
                <img src={clouds} alt="" className="clouds" />
                <img src={birds} alt="" className="birds" />
                <div className="sun"></div>
                <div className="darkk"></div>
                <div className="good">Good Morning &#128522; ,</div>
                <div className="inputt d-flex justify-content-between align-items-center">
                    <input className="form-control form-control-lg" type="text" placeholder='Enter your city name to continue' value={props.textt} onChange={handleOnChange} id="textt"/>
                    <button className='btn btn-danger mx-2 w-50 text-uppercase fs-3 fw-semibold '>
                        <Link to="/weather" className='link-underline-opacity-0 link-light'>Continue</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
