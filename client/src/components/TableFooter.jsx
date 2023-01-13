import React from 'react'
import {GrLinkPrevious,GrLinkNext} from 'react-icons/gr'

const TableFooter = ({page,setPage,perPage,count}) => {
  const p = Array.from({length: Math.ceil(count/perPage)}, (_, index) => index + 1);
  const forwardPage=()=>{
    setPage(prev=>{
      return prev+1
    })
  }
  const previousPage = ()=>{
    setPage(prev=>{
      return prev-1
    })
  }
  return (
    <div className='flex justify-evenly py-4'>
      <div>
        <button onClick={previousPage} disabled={page <= 1} className='flex items-center border rounded-lg px-2 py-1 border-solid border-slate-400'><GrLinkPrevious/>Previous</button>
      </div>
      <div className='flex items-center'>
        {
          p.map(e=><div className='text-xl border rounded-full px-2 mx-1 cursor-pointer' onClick={()=>{setPage(e)}} style = {page === e?{backgroundColor:'lightgray'}:{}} key = {e}>{e}</div>)
        }
      </div>
      <div>
        <button onClick={forwardPage} disabled={page >= Math.ceil(count/perPage)} className='flex items-center border rounded-lg px-2 py-1 border-solid border-slate-400'>Next<GrLinkNext/></button>
      </div>
    </div>
  )
}

export default TableFooter