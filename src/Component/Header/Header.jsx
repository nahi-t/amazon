import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { GiDeliveryDrone } from "react-icons/gi";
import {Link} from 'react-router-dom'
import Lowerheader from './Lowerheader';
import classes from "./header.module.css"
import { datacontext } from '../Dataprovider/Dataprovider';

export default function Header() {
const[{basket},dispatch]=useContext(datacontext)
const totalitem=basket?.reduce((amount,item)=>{
  return item.amount+amount
},0)

  return (
    <>

     <section className={classes.fixed_contener}>
     
     <section className={classes.header_contener}>
<div className={classes.logo_contener} >
   {/* logo */}
   <Link to="/">
    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
   </Link>
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
    <Link to="/Auth">
        <div >
            <p>sign in</p>
            <span>Account and list</span>
        </div>
    </Link >
    <Link to="/Order">
      
            <p>return</p>
            <span>& Order</span>
       
    </Link>
    <Link to="/Cart" className={classes.cart}>

    <CiShoppingCart size={35} />
    <span>{totalitem}</span>
    </Link>
</div>
        </section>
    
     <Lowerheader/>
     </section>
    </>
  )
}
