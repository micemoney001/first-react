import React from 'react'

const Newwb = ({text , color}) => {
  return (
    <div>
        <button style={{background:color}} className='btn'>{text}</button>
    </div>
  )
}

export default Newwb