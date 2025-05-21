import React, { useContext, useState } from 'react'
import Layout from '../../Component/Layout/Layout'
import classes from './sinup.module.css'
import { Link } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword}  from 'firebase/auth'

import { datacontext } from '../../Component/Dataprovider/Dataprovider'



export default function Signup() {
const [email,setemail]=useState('')
const[password,setpassword]=useState('')
const[err,seterr]=useState('')
const[{User},dispatch]=useContext(datacontext)
console.log(User)
const authhandelar = async (e) => {
  e.preventDefault();

  if (e.target.name === 'signin') {
    signInWithEmailAndPassword(auth, email, password)
      .then((userinfo) => {
      
        dispatch({
          type:type.SET_USER,
          User:userinfo.user
        })
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userinfo) => {
     
        dispatch({
          type:  type.SET_USER,
          User:  userinfo.user
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

  return (
 <>
 <section className={classes.login}>
  {/* logo link */}
  <Link>
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon logo" />
  </Link>
  {/* form */}
  <div className={classes.login_cont}>
    <h1>Sign in</h1>
    <form action="">
      <div>
      <label htmlFor="Email">Email</label>
      <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="Email"  id='Email'/>
      </div>
      <div>
      <label htmlFor="password">password</label>
      <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  
      type="password"  id='password'    />
      </div>
      <button type='submit'
      name='in' 
      onClick={authhandelar} className={classes.regb}>
        Sign in
      </button>


    </form>
    {/* agremant */}
    <p>
    It's tricky to give you an exact agreement for using Amazon's services. They have different agreements depending on what you want to do! Here's a breakdown of the main ones and where to find them 
    </p>
    {/* sinup */}
    <button  type='submit' 
     name='up' 
     onClick={authhandelar}  className={classes.reg}>
      Crate your amazon account
    </button>
  </div>

 </section>






 </>
      

  )
}
