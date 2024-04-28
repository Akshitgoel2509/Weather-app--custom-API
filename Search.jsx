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
//  import { useRef } from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


const Search = () => {
    const {query,searchPost,weather,main,coord}=useGlobalContext();
    const [value,setvalue]=useState("");
    // const ref=useRef()
    // let str=weather[0].description.replace(/"/g,"");
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
    
     {/* <div className="container-fluid">
    <form className="d-flex" onSubmit={e=>e.preventDefault()}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={e=>searchPost(e.target.value)}/>
      <i className="fas fa-search "></i>
    </form>
  </div> */}
  <div className='mt-4 ms-3 text-center '>
       <form onSubmit={e=>{e.preventDefault()}} > 
        <div >
          <input
            className='rounded-pill w-75 ps-4 '
            type="search"
            placeholder="Ex:- London"

            value={value}
            onChange={(e)=>{setvalue(e.target.value)}}
          />
          {/* <i className="">{TravelExploreIcon}</i> */}
          <button onClick={()=> searchPost(value)} className="btn btn-outline-primary rounded-pill mx-1 fw-bold ">Search</button>
          
          {/* <select name="place" id="place" value={query} onChange={(e)=>{searchPost(e.target.value)}} >
            <option value="delhi">delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="dubai">dubai</option>
            <option  value="london">london</option>
            <option  value="san francisco">san francisco</option>
            <option  value="melbourne">melbourne</option>
            <option  value="shanghai">shanghai</option>
            <option  value="japan">japan</option>
            <option  value="prague">prague</option>
            <option  value="maldives">maldives</option>
            <option value="adarsh nagar">adarsh nagar</option>
          </select> */}
          {/* <input type="submit" value="submit" onClick={(e)=>{searchPost(e.target.value)}} /> */}
          
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
