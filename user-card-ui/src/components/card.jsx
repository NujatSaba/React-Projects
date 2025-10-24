import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <img className="logo"
            src={props.brandLogo}
            alt="image"
          />
          <button >
            Save <Bookmark size='12px'/>
          </button>
        </div>

        <div className="center">
          <h2 className="user">
            {props.company} <span>{props.datePosted}</span>
          </h2>
          <h1 className="post">{props.post}</h1>
          <div className="tag">
            <h3>{props.tag1}</h3>
            <h3>{props.tag2}</h3>
          </div>
        </div>

        <div className="line"></div>
        
        <div className="bottom">
          <div>
            <h4 className="payment">{props.pay}</h4>
            <h6 className="location">{props.location}</h6>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
