import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import ProductCard from '../../Component/Header/Prodauct/ProdactCard'
import { useParams } from 'react-router-dom'
import { prourl } from '../../Api/endpoint'
import axios from 'axios'
import Loder from '../../Component/Loder/Loder'
export default function ProDetail() {
  const {productsId}=useParams()
  const [pro,setpro]=useState([])
  const [isloding,setisloding]=useState([])
useEffect(()=>{
  setisloding(true)
axios.get(`${prourl}/products/${productsId}`)
.then((res)=>{
  setpro(res.data)
  setisloding(false)
}) 
.catch((err)=>{
console.log(err)
setisloding(false)
})
},[])

  return (
  <Layout>
    {
    isloding? (<Loder/>):( <div>
    < ProductCard 
    pro={pro}
    flex={true}
    disce={true}
    add={true}
    />
    </div>)
 
    }
     
  </Layout>
  )
}
