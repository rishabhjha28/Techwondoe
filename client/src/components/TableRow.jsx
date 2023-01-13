import React, { useState } from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {FiEdit2} from 'react-icons/fi'
import DialogBox from './DialogBox'
import {RxDotFilled} from 'react-icons/rx'
import moment from 'moment';
import DeleteConfrm from './DeleteConfrm'

const TableRow = ({data,setFetchData}) => {
    const [open,setOpen] = useState(false)
    const [cnfrm,setCnfrm] = useState(false)
  return (
    <tr className='border-b border-slate-300 py-40'>
        <td className='px-5 py-4'>
            <div className='flex justify-start items-center'>
                <div className=' mr-4'>
                    <img className='h-12 rounded-full border' src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png" alt="profilepic" />
                </div>
                <div>
                    <p className='font-bold'>{data.name}</p>
                    <p className=' text-zinc-500' >{data.email}</p>
                </div>    
            </div>
        </td>
        <td className='px-5 text-center'>
            <div style ={data.status === 'active'?{color:'#43a047',backgroundColor:'#c8e6c9'}:{color:'#e53935',backgroundColor:'#ffcdd2'}} className='flex px-1 py-1 rounded-xl items-center'>
                <RxDotFilled/>{data.status === 'active'?'Active':'Inactive'}
            </div>
        </td>
        <td className='text-zinc-500 px-5 text-center'>{data.role}</td>
        <td className='px-5 text-center'>
            <div className='text-start'>
                <p>{moment(data.lastLogin.slice(0,10)).format('MMM DD, yyyy')}</p>
                <p className='text-zinc-500'>{moment(data.lastLogin).format('hh:mm A')}</p>
            </div>
        </td>
        <td className='px-5 text-zinc-500 cursor-pointer' onClick={()=>{setCnfrm(true)}} ><RiDeleteBin5Line/></td>
        <td className='px-5 text-zinc-500 cursor-pointer' onClick={()=>{setOpen(true)}} ><FiEdit2/></td>
        <DialogBox open={open} setOpen={setOpen} setFetchData={setFetchData} data = {data}/>
        <DeleteConfrm open={cnfrm} setOpen={setCnfrm} id={data._id} setFetchData = {setFetchData}/>
    </tr>
  )
}

export default TableRow