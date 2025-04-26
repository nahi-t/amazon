import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./catagory.module.css"

export default function CatCard({data}) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
            <h2> {data.title}  </h2>
        </span>
        <img src={data.imglink} alt="nahi" />
        <p>shop</p>
      </Link>
    </div>
  )
}
