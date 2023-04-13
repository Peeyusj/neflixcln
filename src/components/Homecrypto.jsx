import React,{useState,useEffect} from 'react'
import '../styles/homecrypto.css'
export const Homecrypto = () => {
    const [coindata,setCoindata]=useState([])
    useEffect(()=>{
      let fetchdata= async()=>{
        let response=await fetch("http://api.coinranking.com/v2/coins")
        let data=await response.json()
        
        setCoindata(data.data.coins)
      }
  fetchdata()
    })
  return (
    <div>
         <div className="headin">
            <div className='headinel' style={{marginBottom:"18px"}}>
            <p style={{color:"blue",fontSize:"19px",marginBottom:"18px"}}>SECURELY BUY SELL STORE SEND AND TRACE</p>
                    <h1>Buy crypto at true cost</h1>
                    <div style={{width:"50%",fontSize:"17px"}}>Buy and sell 250+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.</div>
            </div>
                            </div>
         <div className='outerd'>
            {coindata.map((co)=><div className="roww">
                <div style={{fontSize:"21px"}}>{co.name} <span style={{color:"gray",fontSize:"19px"}}>{co.symbol}</span></div>
                <div style={{fontSize:"21px"}}>${co.price}</div>
                <div style={{color:"rgb(32, 188, 164)",fontSize:"17px",fontWeight:"600"}}>+{co.change}%</div>
                <div>${co.marketCap}</div>
                <div style={{height:"40px",borderRadius:"5px",backgroundColor:"white",color:"black",width:"80px",marginBottom:"10px",textAlign:"center",boxSizing:"border-box",paddingTop:"7px"}}>Trade</div>
                
            </div>)}
         </div>

    </div>
  )
}
