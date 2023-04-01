import React from 'react'

const Card = ({title, image, price}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <p>${price}</p>

    </div>
  )
}

export default Card