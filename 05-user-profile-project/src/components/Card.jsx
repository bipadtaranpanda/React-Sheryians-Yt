import React from 'react'
// import {Bookmark} from 'lucide-react'

const Card = (props) => {
  
  return (
    <div className="card">

        <div className='top'>
            <h4>{props.available}</h4>
            <span>{props.price}</span>
        </div>

        <div className="profile">

          <img src={props.image} alt='hii'/>
          <div className='profile-info'>
            <h3>{props.name}</h3>
            <span>{props.role}</span>
            <p>{props.company}</p>
          </div>
        </div>

        <div className="skills">
          <span>{props.skills[0]}</span>
          <span>{props.skills[1]}</span>
          <span>{props.skills[2]}</span>
          <span className='moreSkills'>{props.moreSkills}</span>
        </div>

        <div className="description">
          <p>{props.description} </p>
        </div>

        <div className="bottom">
          {/* <div className="line"></div> */}
          <button>VIEW PROFILE</button>
        </div>
      </div>
  )
}

export default Card
