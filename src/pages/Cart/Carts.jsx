import React, { useContext } from 'react'
import Layout from '../../Component/Layout/Layout'
import { datacontext } from '../../Component/Dataprovider/Dataprovider'
import ProductCard from '../../Component/Header/Prodauct/ProdactCard'
import Currnncyformat from '../../Component/Header/Currenceformat/Currncyformat'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import {type} from "./../../Utility/acthion"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Carts() {
  const [{basket,user},dispatch]=useContext(datacontext)
  const total=basket.reduce((amount,item)=>{
    return item.price * item.amount+amount
  },0)
const incriment=(item)=>{
dispatch({
type:type.Add_To_Basket,
item
})
}
const decriment=(id)=>{
  dispatch({
  type:type.Remove_From_basket,
 id
  })
  } 





  return (
    <Layout>
      
    <div>
    <section className={classes.contenar}>
      <div className={classes.cart}>
       <h1>Hello</h1> 
       <h3>your shoping basket</h3>
       <hr/>
       {
        basket?.length==0?(<p>OOPs i need item in your catr</p>):(
          basket?.map((item,i)=>{
          return <section className={classes.cart_product}>
          <ProductCard key={i}
          pro={item}
          disce={true}
          flex={true}
          add={false}
          />
          <div className={classes.button}>
<button className={classes.button_dtl} onClick={()=>incriment(item)}><IoIosArrowUp size={25}/></button>
<span>{item.amount}</span>
<button className={classes.button_dtl}  onClick={()=>decriment(item.id)}><IoIosArrowDown size={25} /></button>
          </div>
          </section>
          })
        )
       }
      </div>
      {basket?.length!==0&&(
 <div className={classes.subtotal}>
  <hr/>
 
<div >
  <p>SubTota ({basket?.length}item)</p>
  <Currnncyformat amount={total}/>

</div>

<span>
  <input type="checkbox" />
  <small>this order contain a gift</small>
</span>
<Link to={"/payment"}>continu to checkout</Link>
 </div>
      )}
     
    </section>
    </div>
    </Layout>
  )
}
