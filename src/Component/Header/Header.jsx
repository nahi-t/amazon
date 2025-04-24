import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { GiDeliveryDrone } from "react-icons/gi";
import Lowerheader from './Lowerheader';
import classes from "./header.module.css"

export default function Header() {
  return (
    <>
     <section>
        <section className={classes.header_contener}>
<div className={classes.logo_contener} >
   {/* logo */}
   <a href="/">
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
   </a>
   {/* delivery */}
   <span>
   <GiDeliveryDrone />
   </span>
   <div className={classes.delivery}>
    <p>Deliver to</p>
    <span>Ethiopia</span>
   </div>
</div>

<div className={classes.serch}>
  {/* search bat   */}
  <select name="" id="">
    <option value="">All</option>
  </select>
  <input type="text" name="id" placeholder='search product' />
  <FaSearch size={25}/>


</div>
<div className={classes.order}>
    <div>
      <a href="" className={classes.language}>
      <img src="https://image.shutterstock.com/image-photo/usa-flag-waving-on-air-260nw-2482973593.jpg" alt="" />
        <select name="" id="">
            <option value="">En</option>

        </select>
      </a>
        

    </div>
    <a href="">
        <div >
            <p>sign in</p>
            <span>Account and list</span>
        </div>
    </a>
    <a href="">
      
            <p>return</p>
            <span>& Order</span>
       
    </a>
    <a to={"/chart"} className={classes.cart}>

    <CiShoppingCart size={35} />
    <span>0</span>
    </a>
</div>
        </section>
     </section>
     <Lowerheader/>
    </>
  )
}
