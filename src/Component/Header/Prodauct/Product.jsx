import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProdactCard'
import classes from './prodact.module.css'

export default function Product() {
    const [product, setProduct] = useState([]) // initialized as an empty array

   
        useEffect(() => {
            (async () => {
                try {
                    const res = await axios.get("https://fakestoreapi.com/products");
                    setProduct(res.data);
                } catch (error) {
                    console.error(error);
                }
            })();
        }, [])
        
    
    return (
        <section className={classes.Product}>
            {
            product.map((singleProduct) => (
                <ProductCard pro={singleProduct} key={singleProduct.id} />
            ))
            }
        </section>
    )
    }
