import { useState, useEffect } from "react";
import axios from "axios";
const AllProduct = ()=>{
    let [product , setProduct] = useState(["Default Product"])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    })
    return(
        <div className="AllProducts-Div">
            <h1>All Products</h1>
            {product.map((val)=>{
                return( 
                    <div className="Product">
                        <p>Product Id :  {val.id}</p>
                        <p className="Product-Title">{val.title}</p>
                        <p className="Product-Description"><h4>Product Description : </h4>{val.description}</p>
                        <p><strong> Rs. {val.price}</strong></p>
                    </div>
                )
            })}
          
        </div>
    )
}

export default AllProduct;