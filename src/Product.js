import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Product = (props)=>{
    let [product , setProduct] = useState(["Default Product"])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${props.id}`).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    })
    return(
        <div>
           <p>{product.id}</p>
           <p>{product.title}</p>
           <p>{product.price}</p>
           <p>{product.description}</p>
           <p>{product.category}</p>
           <img src ={product.image}/>
           <p>{product.rate}</p>
           <p>{product.count}</p>
        </div>
    )
}
Product.propTypes ={
    id : PropTypes.number,
}
export default Product;