import React from 'react'
import classes from './emptyCart.module.css'

export default function EmptyCart() {
  return (
    <div className={classes.emptyCart}>
        <div>
            <img height="120px" src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="empty cart" />
            <p className='fs-5 mb-0'>Your cart Is empty</p>
            <p className='small'>Add items to it</p>
            <button className='btn btn-lg btn-primary rounded-1'>Shop Now</button>
        </div>
    </div>
  )
}
