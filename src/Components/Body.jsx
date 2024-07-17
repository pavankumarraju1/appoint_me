import React from 'react'
import data from '../data/hospital'
import Hospital from './Hospital'

const Body = () => {
  return (
    <div className='hospital-cards'>
      {
       data.map((hosp)=>{
        return <Hospital hospData={hosp}/>
       })
      }
    </div>
  )
}

export default Body