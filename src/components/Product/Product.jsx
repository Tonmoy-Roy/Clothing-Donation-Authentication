import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product = {} }) => {
    console.log(product);
    return (
        <div className="card bg-blue-200 md:w-96 shadow-sm mx-auto">
            <figure>
                <img className='md:h-[200px] rounded'
                    src={product.category.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.donation_id}</h2>
                {/* <p>Quantity : {product.quantity}</p>
                <p>Condition : {product.condition}</p>
                <p>Charity Name : {product.charity_name}</p> */}
                <p>Donation Date : {product.donation_date}</p>
                <div className="card-actions justify-start">
                    <Link to={`/productdetails/${product.donation_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;