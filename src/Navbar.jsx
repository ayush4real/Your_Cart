import React from 'react';
import { useGlobalContext } from './context';
import {RiShoppingBag2Line} from 'react-icons/ri';

const NavBar = () => {
    const {amount} = useGlobalContext()
    return(
        <nav>
            <div className='nav-bar' >
                <h3>Items in your bag</h3>
                <div className='nav-container' >
                    <RiShoppingBag2Line />
                    <div  className='amt-container'>
                        <p className='amt-para' >
                            {amount}
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar