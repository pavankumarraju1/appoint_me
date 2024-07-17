import React from 'react'

const Hospital = ({hospData}) => {
  return (
    <div className='hospital-card'>
        <img src={hospData.IMG_URL}/>
        <div className='names'>
        <h1>{hospData.name}</h1>
        
        <h2>{hospData.doctor_name}</h2>
        </div>
        <button>Book Now</button>
    </div>
  )
}

export default Hospital