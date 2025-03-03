import React from 'react'
import csr from '../Assets/csr-activity.jpeg';

function Csr() {
  return (
 <>
  <div className="csr-container">
     <h1 className="csr">CSR Activity </h1>
     <div className="csr-image" >
     <img src={csr}  alt='image'/>
     </div>
     
     </div>
 </>
  )
}

export default Csr