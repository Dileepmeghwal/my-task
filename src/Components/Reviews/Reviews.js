import React, { useState } from 'react'
import ReviewData from './ReviewData'
import '../Hero Section/Hero.css'

const Reviews = () => {
    const [data, setData] = useState();


    return (
        <>
            <div className="container rev-post">
                <div className='rev-heading'>
                    <h1>What our customers are saying <br />
                        Reviews from real users</h1>
                </div>

                <div className="rev__wrapper">

                    <div className="col-box bold">
                        <h2>5.4</h2>
                    </div>
                    <div className="col-box">
                        <span>
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
                        </span>
                    </div>
                    <div className="col-box">
                        <div className="cart__btn dark C-whit">
                            <button className='b-none'>Write Review</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className='rev-post'>
                {ReviewData.map((rev) => (
                    <>
                        <div className="container top">
                            <h3>{rev.title}</h3>
                            <p className='usernamae'>{rev.user}</p>
                            <span>
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
                            </span>
                            <p className='r-text'>{rev.post}</p>
                        </div>
                    </>
                ))}
            </section>
        </>
    )
}

export default Reviews