import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 artboard phone-2">
     <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Description</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text">Category</span>
  </label>
<select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>
<label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
  </div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="btn-group btn-group-vertical lg:btn-group-horizontal">
  <button className="btn btn-active m-2">Submit</button>
  <button className="btn" onClick={()=>navigate("/")}>Cancel</button>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default AddProduct