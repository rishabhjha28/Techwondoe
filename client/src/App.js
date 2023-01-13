import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Other from './components/Other';
import Switch from './components/Switch';
import User from './components/User';

function App() {
  const [page,setPage] = useState(1)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex justify-start items-start flex-col'>
        <Heading/>
        <Switch page = {page} setSwitch={setPage}/>
        {
          page === 1?<User/>:<Other page = {page}/>
        }
      </div>
    </div>
  );
}

export default App;
