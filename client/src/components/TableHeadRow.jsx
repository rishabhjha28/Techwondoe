import React, { useState } from 'react'
import { AiOutlineArrowDown,AiOutlineArrowUp } from 'react-icons/ai'

const TableHeadRow = ({setUserList}) => {
  const [inistate,setIniState] = useState([false,false,false,false])
  function GetSortOrder(prop,i) {    
    return function(a, b) {    
        if ((a[prop] > b[prop] && !i)||(a[prop] < b[prop] && i)) {    
            return 1;    
        } else if ((a[prop] < b[prop] && !i) || (a[prop] > b[prop] && i)) {    
            return -1;    
        }    
        return 0;    
    }    
  }  
  const sort = (prop,ind)=>{
    let t = inistate
      t[ind] = !t[ind]
      setIniState([...t])
      setUserList(prev=>{
        const t = prev.sort(GetSortOrder(prop,inistate[ind]))
        return [...t]
      })
  }
  const handleSort = (ind)=>{
      switch (ind) {
        case 0:
          sort('name',ind)  
          break;
        case 1:
          sort('status',ind)
          break;
        case 2:
          sort('role',ind)
          break;
        case 3:
          sort('lastLogin',ind)
          break;
        default:
          break;
      }
  }
  return (
    <thead  className='border-b border-slate-300'>
        <tr className='text-zinc-500'>
            <th onClick={()=>{handleSort(0)}}className='py-4 px-5 text-start w-2/4 cursor-pointer'>
              <div className='flex items-center'>
                <div>
                  Name
                </div>
                <div>
                  {!inistate[0]?<AiOutlineArrowDown/>:<AiOutlineArrowUp/>}
                </div> 
              </div>
            </th>
            <th onClick={()=>{handleSort(1)}}className='w-1/12'>
              <div className='flex justify-center items-center cursor-pointer'>
                <div>
                  Status
                </div>
                <div>
                {!inistate[1]?<AiOutlineArrowDown/>:<AiOutlineArrowUp/>}
                </div>
              </div>
            </th>
            <th onClick={()=>{handleSort(2)}}className='w-2/12'>
              <div className='flex items-center justify-center cursor-pointer'>
                <div>
                  Role
                </div>
                <div>
                {!inistate[2]?<AiOutlineArrowDown/>:<AiOutlineArrowUp/>}
                </div>
              </div>
            </th>
            <th onClick={()=>{handleSort(3)}}className='w-1/3'>
              <div className='flex items-center justify-center cursor-pointer'>
                <div>
                  Last Login
                </div>
                <div>
                {!inistate[3]?<AiOutlineArrowDown/>:<AiOutlineArrowUp/>} 
                </div>
              </div>
            </th>
            <th></th>
            <th></th>
        </tr>
    </thead>
  )
}

export default TableHeadRow