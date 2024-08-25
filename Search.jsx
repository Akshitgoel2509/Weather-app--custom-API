/* eslint-disable no-const-assign */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useGlobalContext } from "./Context"
import clear from "./assets/clear.png";
import clouds from  "./assets/cloud.png";
import  rain from "./assets/rain.png";
 import wind from "./assets/wind.png"
 import drizzle from "./assets/drizzle.png"
 import humidity from "./assets/humidity.png"
 import snow from "./assets/snow.png"

import TravelExploreIcon from '@mui/icons-material/TravelExplore';


const Search = () => {
    const {query,searchPost,weather,main,coord}=useGlobalContext();
    const [value,setvalue]=useState("");
    
    let sky="";
    if(weather[0].description.includes("clouds") ){
      sky=clouds;
    }else if(weather[0].description=="clear sky"){
      sky=clear;
    }else if(weather[0].description=="shower rain" || weather[0].description=="thunderstorm"){
      sky=rain;
    }else if(weather[0].description=="wind"){
      sky=wind;
    }else if(weather[0].description=="rain"){
      sky=drizzle;
    }else if(weather[0].description=="humidity"){
      sky=humidity;
    }else if(weather[0].description=="snow"){
      sky=snow;
    }else{
      sky=clouds;
    }
    
    // console.log(str);
  return (
    <>
     {/* left conatainer */}
     <div className="leftContainer bg-white " style={{"width":"35%","overflowY":"auto","height":"70vh" }}>
   
  <div className='mt-4 ms-3 text-center '>
       <form onSubmit={e=>{e.preventDefault()}} > 
        <div >
          <input
            className='rounded-pill w-75 ps-4 '
            type="search"
            placeholder="Ex:- Delhi"

            value={value}
            onChange={(e)=>{setvalue(e.target.value)}}
          />
          <button onClick={()=> searchPost(value)} className="btn btn-outline-primary rounded-pill mx-1 fw-bold ">Search</button>
          

          
        </div>
      </form>
      </div>

      <div>
        {/* if the user has searched something then show the result otherwise show all posts */}
        <img src={sky} alt="icon" className=' rounded mx-auto d-block ' style={{"width":"50%","height":"50%"}} />
        <h5 className='text-center fs-2 fw-bold'>{main.temp} °C</h5>
        <p className='text-center fw-bold '>{weather[0].description}</p>
      </div>
      <hr style={ {"width":"80%"  , "margin":"auto"} }/>
      <br />
      <div className='text-center fw-bold '>
        <p style={{"marginBottom":"5px"}}>Latitude: {coord.lon}</p>
        <p>Longitude: {coord.lat}</p>
        <h3 className='fw-bolder' >{query.toUpperCase()}</h3>
      </div>


      </div>
    </>
  )
}

export default Search;
