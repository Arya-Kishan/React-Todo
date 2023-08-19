import React from 'react'

export default function Error({message,color}) {
    
  return (
    <div className='error' style={{backgroundColor : `${color}`}}>
      <p>{message}</p>
    </div>
  )
}
