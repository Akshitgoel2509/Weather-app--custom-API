// import React from 'react'
// dodger blue: #1e90ff
import { useGlobalContext } from "./Context";

const Card = () => {
  const {main,wind,clouds,visibility,sys} = useGlobalContext();
  return (
    <>
       {/* right container */}
      <div className="rightContainer bg-secondary-light" style={{"backgroundColor":"#eeeeee","width":"80%","height":"70vh","overflowY":"auto" }}>
        <div className="fs-4 ms-3 pt-2">Today</div>

        <div className="m-3">
        <div className="cards d-flex flex-wrap justify-content-around order-3 gap-5">

      <div className="card" style={{"width": "18rem" ,"backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Wind </div>
      <div className=""> {wind.speed} m/s </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Humidity </div>
      <div className=""> {main.humidity} % </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Real Feel </div>
      <div className=""> {main.feels_like} °C </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Pressure </div>
      <div className=""> {main.pressure} pa </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Temperature History </div>
      <div className=""> {main.temp_min} °C </div>
      <div className=""> {main.temp_max} °C </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className="">  Cloudiness </div>
      <div className=""> {clouds.all} % </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Visibility </div>
      <div className=""> {visibility} m </div>
      </div>
      </div>

      <div className="card" style={{"width": "18rem","backgroundColor":"#1e90ff","color":"white"}}>
      <div className="card-body"> 
      <div className=""> Sunrise and Sunset </div>
      <div className=""> {sys.sunrise} °C </div>
      <div className=""> {sys.sunset} °C </div>
      </div>
      </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default Card
