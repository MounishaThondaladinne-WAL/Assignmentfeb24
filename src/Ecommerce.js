import { useState } from "react";
function Ecommerce(){
    let [product,setProduct] = useState([{ProductName:"",description:"",price:"",color:"",date:""}])
    const addProduct = (event)=>{
        event.preventDefault();
        let productObject = {
            ProductName : event.target.ProductName.value,
            description : event.target.description.value,
            price : event.target.price.value,
            color:event.target.color.value,
            date: event.target.date.value,
        }
        let newProduct= [...product,productObject]
        setProduct(newProduct)
    }
    let deleteProduct =(valuetodelete)=>{  
        let newProduct = product.filter(function(val){
            if(valuetodelete==val){
                return false;
            }
            return true;
        });
        setProduct(newProduct)
    }
    return(
        <div className="Comment">
            <h1>Ecommerce App</h1>
            <form onSubmit={addProduct} className="comment-Form">
            <input type="text" name="ProductName" placeholder="ProductName" className="form-elements"/>
            <textarea name="description" placeholder="Product Description" className="form-elements Comment-Body"></textarea>
            <input type="number" name="price" placeholder="Product Price" className="form-elements"/>
            <input type="color" name="color"  className="form-elements"/>
            <input type="date" name="date" className="form-elements"/>
            <button className="form-elements Button">Submit</button> 
            </form>
            <div>
                <h1>All Products</h1>
            {product.map((val,index)=>{
                if(index>0){return(
                <div className="Display-Comments">
                    <h3>Product {index}</h3>
                    <p className="para">ProductName : {val.ProductName}</p>
                    <p className="para">Description : {val.description}</p>
                    <p className="para">price : {val.price}</p>
                    <p className="para">color : {val.color}</p>
                    <p className="para">Expiry Date : {val.date}</p>
                    <button className="Button" onClick={()=>{deleteProduct(val)}}>Delete Product</button>
                </div>)}
               
            })}
             </div>
        </div>
    )

}
export default Ecommerce;