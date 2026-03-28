import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (propes) => {
  return (
      <div className="card">
        <div className="top">
          <img src= {propes.logo} alt="logo" />
          <button>Save <Bookmark size={18}/></button>
        </div>

        <div className="center">
          <h3>{propes.company} <span>{propes.dayPosted}</span></h3>
          <h2>{propes.Post}</h2>
          <div className='jobtype'>
            <h4>{propes.jobtype01}</h4>
            <h4>{propes.jobtype02}</h4>
          </div>
        </div>

        <div className="bottom">
          <div className='locationPrice'>
            <h3>{propes.pay}</h3>
            <p>{propes.location}</p>
          </div>
          <button>Apply now</button>
        </div>

      </div>
  )
}

export default Card
