import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Our popular dishes include Roasted Lamb Rump, a tender and
              flavorful cut seasoned to perfection; Citrus Cured Salmon, infused
              with refreshing citrus notes; Pan-Seared Sea Bass with a crisp,
              golden finish; and our signature Stuffed Strawberry, filled with
              rich cream for a sweet and indulgent dessert experience</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}


export default Menu
