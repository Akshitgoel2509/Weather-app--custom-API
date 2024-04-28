/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import {createContext,useReducer,useContext,useEffect} from "react"
import reducer from  './reducers'
// import country from "country-state-city"

const  initialState ={
    isLoading:true,
    weather:[],
    coord:[],
    query:"delhi",
    main:[],
    wind:[],
    city:""
}
const URL="https://api.openweathermap.org/data/2.5/weather?"
const appContext=createContext();

const AppProvider=({children})=>{
    const[state,action]=useReducer(reducer,initialState);

    const fetchApi=async(url)=>{
    action({type:"SET_LOADING"});
    try {
        let response= await fetch(url);
        let data=await response.json();
        console.log(data);
        action({type:"GET_CARD",payload:{coord:data.coord,weather:data.weather,main:data.main,wind:data.wind,clouds:data.clouds,visibility:data.visibility,sys:data.sys}});
    } catch (error) {
        console.log(error.message);
    }
   }
   const searchPost=(searchQuery)=>{
    action({type:"SEARCH_QUERY",payload:searchQuery});
   }


    useEffect( () => {
       
        fetchApi(`${URL}q=${state.query}&appid=a0448624fbb619515a95c6b314f430ac&units=metric`);
    },[state.query])

    return (
    <appContext.Provider value={{...state,searchPost}}>
        {children}
    </appContext.Provider> 
    )
}


//custom hooks to access the global state and dispatch function
 const useGlobalContext=()=>{
    return useContext(appContext);
}

export {AppProvider,useGlobalContext,appContext};