import React from 'react'

const Card = ({title, image, price, description}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>${price}</p>
        <p>${description}</p>

    </div>
  )
}

export default Card