import { Dialog } from '@mui/material'
import axios from 'axios'
import React from 'react'

const DeleteConfrm = ({open,setOpen,id,setFetchData}) => {
    const deleteData = ()=>{
        axios.delete(`/user/${id}`)
        .then(document=>{
            setFetchData(true)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
    <Dialog open = {open} onClose = {()=>{setOpen(false)}}>
        <div className='p-5'>
            <div className='p-5 border rounded-md'>
                <div className='border-b pb-2'>
                    Do you really want to delete the user with id-<span className=''>{id}</span>
                </div>
                <div className='flex justify-between mt-4'>
                    <button className='bg-[#dc2626] text-white text-xl px-2 rounded-md' onClick={deleteData}>Yes</button>
                    <button className='bg-[#16a34a] text-white text-xl px-2 rounded-md' onClick={()=>{setOpen(false)}} >No</button>
                </div>
            </div>
        </div>
    </Dialog>
  )
}

export default DeleteConfrm