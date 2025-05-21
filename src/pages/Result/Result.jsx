import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { prourl } from '../../Api/endpoint'
import classes from './result.module.css'
import ProductCard from '../../Component/Header/Prodauct/ProdactCard';
import Loder from '../../Component/Loder/Loder'

export default function Result() {
  const [result,setresult]=useState([]);
  const[isloding,setloding]=useState(false)
  const{catagoryname}=useParams()
 

  useEffect(() => {
    axios.get(`${prourl}/products/category/${catagoryname}`)
      .then((res) => {
       
        setresult(res.data);
      setloding(false)
      })
      .catch((err) => {
        console.log(err);
        setloding(false)
      });
  }, [catagoryname]);
 
  return (
    <Layout>
      {
        isloding? (<Loder/>):(   <section>
          <h1 style={{padding:"30px"}}>Results</h1>
          <p style={{padding:"30px"}}>catagory /{catagoryname}</p>
          <hr />
          <div className={classes.pro_contener}>
            {
           result?.map((pro) => (
            <ProductCard 
              key={pro.id}
              pro={pro}
              add={true}
            />
          ))
      
          
            }
  
          </div>
        </section>)
      }
   
    </Layout>
    
  )
}
