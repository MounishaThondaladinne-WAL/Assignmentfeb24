import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
const Product = (props)=>{
    let [product , setProduct] = useState(["Default Product"])
    let [rating,setRating] = useState([""])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${props.id}`).then((res)=>{
            console.log(res.data)
            setProduct(res.data)
            setRating(res.data.rating)
        })
    })
    return(
        <div className="Product-Div">
           <p>Product Id : {product.id}</p>
           <p><h4>{product.category}</h4></p>
           <p className="Title">{product.title}</p>
           <img src ={product.image} className="Image"/>
           <p ><strong>Rs. {product.price}</strong></p>
           <p className="Description"><h5>About Product</h5> {product.description}</p>
           <p>Rating : {rating.rate}</p>
           <p>TotalCount : {rating.count}</p>
        </div>
    )
}
Product.propTypes ={
    id : PropTypes.number,
}
export default Product;