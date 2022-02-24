import { useState, useEffect } from "react";
import axios from "axios";
const Categories = ()=>{
    let [product , setProduct] = useState(["Default Product"])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/categories").then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    })
    return(
        <div className="All-Categories">
            <h1 className="Category-Heading">All Categories</h1>
            {product.map((val)=>{
                return( 
                    <div className="Category">
                       <p className="Category-Item">{val}</p>
                    </div>
                )
            })}
          
        </div>
    )
}
export default Categories;