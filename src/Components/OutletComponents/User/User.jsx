import React from 'react';
import Image from "../../../assets/dummy.webp"

function User() {
  return (
    <div className='container'>
      <h2>User</h2>
      <img src={Image} width={50} height={50}/>
    </div>
  )
}

export default User