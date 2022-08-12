import React from 'react'
import Link from 'next/link'

import { useStateContext } from '../context/StateContext';
import { Cart } from './';

import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div className='navbar-container'>
            <p>
                <Link href={"/"}>CoderSingh Headphones</Link>
            </p>

            <button className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar