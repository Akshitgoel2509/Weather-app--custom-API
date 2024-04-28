/* eslint-disable no-unreachable */
// import React from 'react'

const reducers = (state,action) => {
    switch(action.type){
        case "SET_LOADING" :
        return {...state,isLoading:true};

        case "GET_CARD" :
         return {...state,isLoading:false,weather:action.payload.weather,main:action.payload.main,wind:action.payload.wind,coord:action.payload.coord,clouds:action.payload.clouds,visibility:action.payload.visibility,sys:action.payload.sys} 
         
        case "SEARCH_QUERY": 
          
         return { ...state , query: action.payload} ;
        
         default:
            return state
       }
}

export default reducers
