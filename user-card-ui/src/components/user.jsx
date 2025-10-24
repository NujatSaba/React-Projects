import React from 'react'

const User = (props) => {
  return (
    <div style={{color:'white'}}>
        {props.name}, {props.ageof}
    </div>
  )
}

export default User