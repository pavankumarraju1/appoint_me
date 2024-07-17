import React from 'react'
import data from '../data/hospital'

const Body = () => {
  return (
    <div className='hospital-card'>
      {data.map((data)=>{
        return  <li>{data.doctor_name}</li>
      })
    }
    </div>
  )
}

export default Body