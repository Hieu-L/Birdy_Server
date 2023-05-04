import React from 'react'

function Logout(props) {
  return (
    <div>
        <button className='btn' onClick={() => props.onFormSwitch('login')}>logout</button>
    </div>
  )
}

export default Logout