import React from 'react'
import {Bookmark} from 'lucide-react'



const Card = (props) => {
  return (
    <div className="card">

        {/* Top */}
        <div className="top">
          <img src={props.brandLogo} alt="Logo" />
          <button>Save <Bookmark size={12}/> </button>
        </div>

        {/* Center */}
        <div className="center">
          <h3>{props.companyName} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>  
        </div>

        {/* Bottom */}
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3> 
            <p>{props.place}</p>    
          </div>  
          <button>Apply now</button>  
        </div>

      </div>
  )
}

export default Card
