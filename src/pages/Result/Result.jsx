import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { prourl } from '../../Api/endpoint'
import classes from './result.module.css'
import ProductCard from '../../Component/Header/Prodauct/ProdactCard';

export default function Result() {
  const [result,setresult]=useState([]);
  const{catagoryname}=useParams()
  console.log(catagoryname)

  useEffect(() => {
    axios.get(`${prourl}/products/category/${catagoryname}`)
      .then((res) => {
       
        setresult(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catagoryname]);
 
  return (
    <Layout>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>catagory /{catagoryname}</p>
        <hr />
        <div className={classes.pro_contener}>
          {
         result?.map((pro) => (
          <ProductCard 
            key={pro.id}
            pro={pro}
          />
        ))
    
        
          }

        </div>
      </section>
    </Layout>
    
  )
}
