import React from 'react'
import Logo from '../Images/logo.png'
import User from '../Images/user.png'
import Bag from '../Images/Bag.png'
import '../Header/Header.css';
import Hero from '../Hero Section/Hero'
import { useState } from 'react';

const Header = () => {
    const [add, setAdd] = useState(0);
    

    const addnum = () => {
        setAdd(add + 1);
    }

    const [slider, setSlider] = useState(false);

    const open = () => {
        setSlider(slider)
    }

    return (
        <>
            <header>
                <div className="container navbar flex">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <nav className='slider'>
                        <ul>
                            <span className='bar'></span>
                            <li>
                                <a href="">Shampoo</a>
                            </li>
                            <li>
                                <a href="">Conditioner</a>
                            </li>
                            <li>
                                <a href="">Hair Mask</a>
                            </li>
                            <li>
                                <a href="">Shower Gel</a>
                            </li>
                            <li>
                                <a href="">Liquid Soap</a>
                            </li>
                            <a href="">About</a>

                        </ul>

                    </nav>
                    
                    <span className='bar'></span>
                    <div className="icons flex">
                        <div className="i-box">
                            <img src={User} alt="" />
                        </div>
                        <div className="i-box bag-fix">
                            <img src={Bag} alt="" />
                            <div className="badge">{10}</div>
                        </div>

                        <span className="bars">
                        <i class='bx bx-menu' onClick={open}></i>
                    </span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header