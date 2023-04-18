import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'; 
import play from "../assets/play.png";
import '../styles/moviecard.css'
export const Mylist = () => {
let movie=JSON.parse(localStorage.getItem("list"))
let navigation=useNavigate();
 
  let playhandler=()=>{

    navigation("/videoplayer")
    
  }
  return (
    <div style={{height:"100vh",backgroundColor:"rgb(6, 17, 33)"}} className='movieouterdiv'>
     {movie.length&&movie.map((i)=><div className='moviecard'>
        <div className='imA'>
        <img src={i.image.original} alt="" />
        </div>
        <div className="m-name">
          <div>{i.name}</div>
          <div><img src={ play} onClick={playhandler} alt="" /></div>
        </div>
        <div className="m-bg">
          <div>
          {i.rating.average}/
          </div>
          <div style={{fontSize:"12px"}}>
            <span style={{marginRight:"3px"}}>{i.genres[0]},</span>
            <span>{i.genres[1]} </span>
          </div>
          <div>
            {i.language}
          </div>
        </div>
          </div>)||<div style={{fontSize:"80px",textAlign:"center",color:"white"}}>+Add Movies To Your List</div>
     } 
    </div>
  )
}

