import React from 'react'

const Other = ({page}) => {
  return (
    <div>
        <div className='text-2xl'>{page===0?'General':page === 2?'Plan':page===3?'Billing':'Integrations'}</div>
        <div>Sorry, Nothing to display</div>
    </div>
  )
}

export default Other