import React from 'react'
import classes from "./catagory.module.css"

export default function CatCard({data}) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
            <h2> {data.title}  </h2>
        </span>
        <img src={data.imglink} alt="nahi" />
        <p>shop</p>
      </a>
    </div>
  )
}
