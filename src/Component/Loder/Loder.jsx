import React from 'react'
import   {RingLoader} from 'react-spinners'

export default function Loder() {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh",
    }}>
      <RingLoader color="#36d7b7"/>
    </div>
  )
}
