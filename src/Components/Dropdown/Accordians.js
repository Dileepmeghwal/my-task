import React, { useState } from 'react'
import '../Hero Section/Hero.css'


const Accordians = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='container'>
        <div className=" app__box">

          <button onClick={() => { setToggle(!toggle) }}>
            Specification
          </button>
        </div>
        {
          toggle &&
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum animi quidem sapiente reiciendis, ad ea molestias. Laudantium consectetur officia dolorum cumque atque dignissimos, minus autem!</p>
          </div>
        }
      </div>
      <div className='container'>
        <div className=" app__box">

          <button onClick={() => { setToggle(!toggle) }}>
            Usage & Care
          </button>
        </div>
        {
          toggle &&
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum animi quidem sapiente reiciendis, ad ea molestias. Laudantium consectetur officia dolorum cumque atque dignissimos, minus autem!</p>
          </div>
        }
      </div>
      <div className='container'>
        <div className=" app__box">

          <button onClick={() => { setToggle(!toggle) }}>
          Return | Warranty | Shipping
          </button>
        </div>
        {
          toggle &&
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum animi quidem sapiente reiciendis, ad ea molestias. Laudantium consectetur officia dolorum cumque atque dignissimos, minus autem!</p>
          </div>
        }
      </div>
    </>
  )
}

export default Accordians