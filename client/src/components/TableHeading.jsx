import React, { useRef, useState } from 'react'
import {FiDownloadCloud} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {CSVLink} from 'react-csv';
import DialogBox from './DialogBox';

const TableHeading = ({totalUserCount,userList,setFetchData}) => {
    const [open,setOpen] = useState(false);
    const csvLink = useRef()
    const generateCSV=()=>{
        csvLink.current.link.click()
    };
    return (
    <div className='flex justify-between items-center border-b border-solid border-slate-300 px-5 py-5'>
        <CSVLink
            data={userList}
            filename='data.csv'
            className='hidden'
            ref={csvLink}
            target='_blank'
        />
        <div className=''>
            <div className='flex items-center py-1'>
                <p className='text-xl font-bold'>Users</p>
                <p className='text-[#4d7c0f] font-bold ml-3 bg-[#bbf7d0] py-1 px-2 rounded-xl'>{totalUserCount} users</p>
            </div>
            <div className='py-1'>
                <p>
                    Manage your team members and their account permissions here.
                </p>
            </div>
        </div>
        <div className='flex'>
            <button onClick={generateCSV} className='flex justify-center items-center border border-grey-200 border-solid outline-none px-4 py-1 rounded-xl mr-2'><FiDownloadCloud/> Download CSV</button>
            <button onClick={()=>{setOpen(true)}} className='flex justify-center items-center py-1 px-4 bg-blue-600 rounded-xl text-white ml-2'><AiOutlinePlus/> Add User</button>
        </div>
        <DialogBox open = {open} setOpen = {setOpen} setFetchData = {setFetchData}/>
    </div>
  )
}

export default TableHeading