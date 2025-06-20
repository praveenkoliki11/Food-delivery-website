import React from "react"
import "./Header.css"
import ExploreMenu from "../ExploreMenu/ExploreMenu"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experiance, one delicious meal at a time.</p>
        <button onClick={()=>ExploreMenu}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
