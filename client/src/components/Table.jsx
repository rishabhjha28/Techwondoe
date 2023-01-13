import React from 'react'
import TableHeadRow from './TableHeadRow'
import TableRow from './TableRow'

const Table = ({setUserList,userList,setFetchData}) => {
    // console.log(userList)
  return (
    <div>
        <table className='border-collapse'>
            <TableHeadRow setUserList = {setUserList}/>
            <tbody>
                {
                    userList.map((data) => {
                        return (<TableRow setFetchData = {setFetchData} key={data._id} data = {data}/>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table