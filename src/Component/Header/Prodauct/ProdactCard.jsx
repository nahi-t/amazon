import React from 'react'
import Rating from "@mui/material/Rating"
import Currnncyformat from '../Currenceformat/Currncyformat'
import classes from './prodact.module.css'

export default function ProductCard({ pro }) {
    const { title, price, image, id, rating } = pro ;

    return (
        <div className={`${classes.card_contener}`}>
            <a href="#">
                <img src={image} alt={title} />
            </a>
            <div>
                <h3>{title}</h3>
            </div>
            <div className={classes.rating}>
                {/* Rating */}
                <Rating value={rating.rate } precision={0.1}  />
                {/* Count */}
                <small>{rating.count }</small>
            </div>
            <div>
                {/* Price */}
                <Currnncyformat amount={price} />
            </div>
            <button className={classes.button}>
                Add to Cart
            </button>
        </div>
    )
}
