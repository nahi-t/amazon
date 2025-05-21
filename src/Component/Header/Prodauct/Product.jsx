import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProdactCard'
import classes from './prodact.module.css'
import Loder from '../../Loder/Loder'

export default function Product() {
    const [product, setProduct] = useState([]) // initialized as an empty array
    const [isloding,setloding]=useState(true)

   
        useEffect(() => {
            (async () => {
                try {
                    const res = await axios.get("https://fakestoreapi.com/products");
                    setProduct(res.data);
                    setloding(false)
                } catch (error) {
                    console.error(error);
                    setloding(false)
                }
            })();
        }, [])
        
    
    return (
        <>
        {
            isloding?(<Loder/>):(  <section className={classes.Product}>
                {
                product.map((singleProduct) => (
                    <ProductCard pro={singleProduct} key={singleProduct.id}
                    add={true}
                    />
                ))
                }
            </section>)
        }
        </>
      
    )
    }
