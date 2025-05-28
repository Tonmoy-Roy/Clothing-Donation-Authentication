import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [Products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('clothdata.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="grid md:grid-cols-3 gap-20 p-5">
             {
                Products.map(product=> <Product product={product}></Product>)
             }
        </div>
    );
};

export default Products;