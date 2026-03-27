import React from 'react'

const Card = (propes) => {
  return (
    <div>
        
       <div className="card">
        <img src={propes.img} alt="" />
        <h1>{propes.user}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, quae.</p>
      <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
