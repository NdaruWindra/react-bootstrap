import React from 'react'

const Button = ({tipe, name}) => {
  return (
    <button type='button' className={`tipe ${tipe}`}>
      {name}
    </button>
  )
}

export default Button
