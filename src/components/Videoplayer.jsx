import React,{} from 'react'
import frn from "../assets/friends.mp4";
import { useLocation } from 'react-router-dom';

export const Videoplayer = (props) => {
    let loc=useLocation()

   props.pathfn(loc.pathname)
  return (
    <div style={{minHeight:'100%'}}>
        <video src={frn} controls autoPlay muted></video>
    </div>
  )
}
