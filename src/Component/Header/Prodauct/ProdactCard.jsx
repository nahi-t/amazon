import React, { useContext } from 'react'
import Rating from "@mui/material/Rating"
import Currnncyformat from '../Currenceformat/Currncyformat'
import classes from './prodact.module.css'
import {Link} from 'react-router-dom'
import { datacontext } from '../../Dataprovider/Dataprovider.jsx'
import {type} from '../../../Utility/acthion'
export default function ProductCard({ pro,flex ,disce,add}) {
    const { title, price, image, id, rating ,description
    } = pro ;
 const[state,dispatch] =useContext(datacontext)
console.log(state)

const addcart=()=>{
    dispatch({
type:type.Add_To_Basket,
item:{ title, price, image, id, rating ,description

}
    })
}


    

    return (
        <div className={`${classes.card_contener} ${flex ? classes.pro_flx : ''}`}>
            <Link to={`/products/${id}` }>
                <img src={image} alt={title} />
            </Link>
            <div>
                <h3>{title}</h3>
                {disce && <div>{description}</div>}
            </div>
            <div className={classes.rating}>
                {/* Rating */}
                <Rating value={rating?.rate || 0} precision={0.1}  />
                {/* Count */}
                <small>{rating?.count || 0 }</small>
            </div>
            <div>
                {/* Price */}
                <Currnncyformat amount={price} />
               {
                add &&  <button className={classes.button} onClick={addcart}>
                Add to Cart
            </button>
               }
            </div>
            
        </div>
    )
}
