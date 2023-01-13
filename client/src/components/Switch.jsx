import React from 'react'

const Switch = ({setSwitch,page}) => {
  return (
    <div className = "flex items-center mb-4">
        <p style ={page === 0?{backgroundColor:'lightcyan'}:{}} className="cursor-pointer rounded-tl-lg rounded-bl-lg border-slate-300 border-solid border h-10 flex justify-center items-center p-4" onClick = {()=>setSwitch(0)} >General</p>
        <p style ={page === 1?{backgroundColor:'lightcyan'}:{}} className="cursor-pointer border-slate-300 border-solid border h-10 flex justify-center items-center p-4" onClick = {()=>setSwitch(1)} >Users</p>
        <p style ={page === 2?{backgroundColor:'lightcyan'}:{}} className="cursor-pointer border-slate-300 border-solid border h-10 flex justify-center items-center p-4" onClick = {()=>setSwitch(2)} >Plan</p>
        <p style ={page === 3?{backgroundColor:'lightcyan'}:{}} className="cursor-pointer border-slate-300 border-solid border h-10 flex justify-center items-center p-4" onClick = {()=>setSwitch(3)} >Billing</p>
        <p style ={page === 4?{backgroundColor:'lightcyan'}:{}} className="cursor-pointer rounded-tr-lg rounded-br-lg border-slate-300 border-solid border h-10 flex justify-center items-center p-4" onClick = {()=>setSwitch(4)} >Integrations</p>
    </div>
  )
}

export default Switch