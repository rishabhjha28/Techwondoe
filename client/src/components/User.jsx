import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableHeading from './TableHeading'
import TableFooter from './TableFooter'
import Table from './Table'
const User = () => {
    const [userList,setUserList] = useState([])
    const [message,setMessage] = useState("")
    const [totalUserCount,setTotalUserCount] = useState(0);
    const [page,setPage] = useState(1)
    const [perPage,setPerPage] = useState(5)
    const [fetchData,setFetchData] = useState(false)
    const getCount =()=>{
        axios.get('/count')
        .then(result=>setTotalUserCount(result.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCount()
        getUser()
    },[page,perPage])
    useEffect(()=>{
        if(fetchData){
            if(page === 1){
                getCount()
                getUser()
            }
            else{
                setPage(1)
            }
            setFetchData(false)
        }
    },[fetchData])
    useEffect(()=>{
        setTimeout(() => {
            setMessage("")
        }, 3000);
    },[message])
    const getUser=()=>{
        axios.get(`/user?page=${page}&perPage=${perPage}`)
        .then(doc=>{
            setUserList(doc.data)
        })
        .catch(err=>{
            setMessage("Error")
            console.log(err)
        })
    }
    return (
    <div className='border border-solid border-slate-300 rounded-xl'>
        <TableHeading setFetchData = {setFetchData} totalUserCount = {totalUserCount} userList = {userList}/>
        <Table userList={userList} setUserList = {setUserList} setFetchData = {setFetchData}/>
        <TableFooter page = {page} count = {totalUserCount} setPage = {setPage} perPage = {perPage} setPerPage={setPerPage}/>
    </div>
  )
}

export default User