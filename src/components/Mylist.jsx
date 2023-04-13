import React from 'react'
import { useState } from "react"

export const Mylist = () => {
// const[movie,setMovie]=useState([])
let movie=localStorage.getItem("list")
console.log(JSON.parse(localStorage.getItem("list")));
  return (
    <div style={{height:"100vh",backgroundColor:"rgb(6, 17, 33)"}}>
      hiii
    </div>
  )
}
