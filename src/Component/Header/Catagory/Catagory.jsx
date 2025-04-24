import React from 'react'
import{ catagory}from"./catagoryinfo"
import CatCard from './CatCard'
import classes from "./catagory.module.css"
export default function Catagory() {
  return (
    <>
    <section className={classes.catagory_contener}>
    {
         catagory.map((info) => {
            return <CatCard data={info} />;
          })
     }
       
    </section>
    
         
     
    </>
  )
}
