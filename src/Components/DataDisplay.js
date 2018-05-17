import React from 'react';
import plant from './images/clipart2.png';
import Moment from 'react-moment';

let DataDisplay = ({data}) => 
    <div>
        <img src={plant} className="data-image" alt=""/>
        <div>
        <Moment format="YYYY-MM-DD HH:mm">{data.created}</Moment>
        <p>Temperature: {data.temp} °C</p>
        <p>Sunlight: {data.sun} lx</p>
        <p>Soil Moisture: {data.moist} %</p>
        <p>Humidity: {data.ph} %</p>
        </div>
    </div>

export let MoistureDisplay = ({data}) =>
    <div>
        <Moment format="YYYY-MM-DD HH:mm">{data.created}</Moment>
        <p>Moisture: {data.moist} %</p>
    </div>

export let TemperatureDisplay = ({data}) =>
    <div >
        <Moment format="YYYY-MM-DD HH:mm">{data.created}</Moment>
        <p>Temperature: {data.temp} °C</p>
    </div>


export let HumidityDisplay = ({data}) =>
    <div>
        <Moment format="YYYY-MM-DD HH:mm" >{data.created}</Moment>
        <p>Humidity: {data.ph} %</p>
    </div>

export let SunlightDisplay = ({data}) =>
    <div >
        <Moment format="YYYY-MM-DD HH:mm">{data.created}</Moment>
        <p>Sunlight: {data.sun} lx</p>
    </div>

export default DataDisplay;
