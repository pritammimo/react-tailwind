import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
const ProductList = () => {
  const navigate=useNavigate();
  const [productList, setproductList] = useState([
    {
    title: "react-typescript axios-test",
    category: "react-typescript",
    price: "59000",
    description: "First practice with react-typescript",
    id: 24
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 25
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 23
  },{
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 22
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 21
  }
]);
  return (
    <>
    <Navbar/>

    <div className="container mx-auto px-4 p-4 ">
      <div className='grid grid-cols-3'>
      {productList?.map((product)=>(
          <div className="card w-96 bg-base-100 shadow-xl m-2" key={product.id}>
          <figure><img src="https://e7.pngegg.com/pngimages/75/649/png-clipart-adidas-shoe-sneakers-women-shoes-purple-white-thumbnail.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {product?.title}
              <div className="badge badge-secondary">{product?.price}</div>
            </h2>
            
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Add to cart</div>
              <div className="badge badge-outline" onClick={()=>navigate(`/editproduct/${product?.id}`)}>Edit</div>
              <div className="badge badge-outline">Delete</div>
            </div>
          </div>
        </div>
      ))}
     </div>
</div>
<Footer/>
</>
  )
}

export default ProductList