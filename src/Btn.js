import React from 'react'

const Btn = ({actionHendler,props}) => {
  return (
      <button className='btn' onClick={() => { actionHendler() }}> {props}</button>
  )
}

export default Btn