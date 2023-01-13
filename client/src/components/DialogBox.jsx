import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import axios from 'axios'

const DialogBox = ({open,setOpen,setFetchData,data}) => {
  const iniValue = {
    name:'',
    email:'',
    status:'active',
    role:'',
    lastLogin:'',
  }
  const [formData,setFormData] = useState(iniValue)
  useEffect(()=>{
    if(data){
      setFormData({...data})
    }
  },[data])
  const fillFormData = (e)=>{
    const {name,value} = e.target
    setFormData(prev=>({
      ...prev,
      [name]:value,
    }))
  }
  const updateUser = (e)=>{
    e.preventDefault()
    axios.patch(`/user/${data._id}`,formData)
    .then(document=>{
      setFetchData(true)
      setOpen(false)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const addUser = (e)=>{
    e.preventDefault()
    axios.post('/user',formData)
    .then(document=>{
      setFormData(iniValue)
      setFetchData(true)
      setOpen(false)
      console.log(document.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <Dialog open= {open} onClose= {()=>setOpen(false)} >
      <p className=' text-center text-xl mt-4'>{data?'Update User':'Add User'}</p>
        <form className='flex p-4 flex-col justify-center items-center' onSubmit={data?updateUser:addUser}>
          <div className = 'my-2'>
            <p>Name:</p>          
            <input value={formData.name} onChange={fillFormData} required className='border rounded-lg p-2 border-solid border-slate-300 outline-none' placeholder='Enter name' type="text" name="name"/> 
          </div>
          <div className='my-2'>
            <p>Email:</p>
            <input value={formData.email} onChange={fillFormData} required className='border rounded-lg p-2 border-solid border-slate-300 outline-none' placeholder='Enter email' type="email" name="email"/>
          </div>
          <div className='flex items-center my-2'>
            <span>Status:</span>
            <select value={formData.status} onChange={fillFormData} required className='p-2 rounded-lg outline-none mx-2' name="status">
              <option value="active">Active</option>
              <option value="inActive">Inactive</option>
            </select>
          </div>
          <div className='my-2'>
            <p>Role:</p>
            <input value={formData.role} onChange={fillFormData} required className='border rounded-lg p-2 border-solid border-slate-300 outline-none' type="text" name="role" placeholder='Role'/>
          </div>
          <div className='flex my-2 items-center'>
            <p>Last login:</p>
            <input required className='p-2 outline-none rounded-lg border border-solid border-slate-300' type="datetime-local" name="lastLogin" value={formData.lastLogin} onChange={fillFormData}/>
          </div>
          <div className='my-2'>
            <button className='rounded-lg border border-solid bg-lime-500 py-1 px-4' type="submit">Submit</button>
          </div>
        </form>
    </Dialog>
  )
}

export default DialogBox