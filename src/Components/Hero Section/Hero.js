import React, { useState } from 'react'
import HeroImg from '../Images/HeroImg.png'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import img4 from '../Images/img4.png'
import '../Hero Section/Hero.css'
import Accordians from '../Dropdown/Accordians'
import Reviews from '../Reviews/Reviews'


const Hero = () => {

    const [add, setAdd] = useState(0);

    const addnum = () => {
        setAdd(add + 1);
    }
    const removenum = () => {
        setAdd(add - 1);
    }
    return (
        <>
            <section className='hero__section'>
                <div className="hero__grid container">
                    <div className="box">
                        <div className="main___img">
                            <img src={HeroImg} alt="" />
                        </div>
                        <div className="small-img flex">
                            <div className="imgBx">
                                <img src={img1} className="s-img" alt="" />
                            </div>
                            <div className="imgBx">
                                <img src={img2} alt="" />
                            </div>
                            <div className="imgBx">
                                <img src={img3} alt="" />
                            </div>
                            <div className="imgBx">
                                <img src={img4} alt="" />
                            </div>
                            <div className="imgBx">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="box summary">
                        <div className="star">
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bxs-star' ></i>
                            <i class='bx bx-star' ></i>
                            <div className="review">
                            <p>2525 reviews</p>
                        </div>
                        </div>
                        
                        <p>Kertin frizzy hair Shampoo - Sairo</p>
                        <div className="price">
                            <i class='bx bx-rupee'></i>599
                        </div>
                        <div className="addCart">
                            <button className='leftremove' onClick={removenum}>-</button>
                            {add}
                            <button onClick={addnum}>+</button>
                        </div>
                        <span>ONLY 6 LEFT IN STOCK</span>

                        <div className="cart__btn">
                            <button>Add to cart</button>
                        </div>
                        <div className="cart__btn dark">
                            <button className='C-whit'>Buy it now</button>
                        </div>
                        <div className="qoute">
                            <p>For delivery between Saturday, Dec 18 and Thursday, Dec 23.</p>
                            <span>Order within 8 hrs and 58 min.</span>
                        </div>
                        <p>Here why you will love it</p>
                        <div className="list-item">
                            <li>Smells amazing</li>
                            <li>Deep cleanses</li>
                            <li>Provides hydration</li>
                            <li>Enriched with naturally derived ingredients like Aloe Vera</li>
                            <li>Thoughtfully curated for all skin types</li>
                        </div>
                    </div>
                </div>
                
            </section>

            <Reviews />
            
        </>
    )
}

export default Hero