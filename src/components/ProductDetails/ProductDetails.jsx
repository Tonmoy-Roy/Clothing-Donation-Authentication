import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { donation_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => String(product.donation_id) === donation_id);
    if (!product) {
        return <div className="text-center text-red-600 font-bold">Product not found.</div>;
    }

    return (
        <div className='md:mb-[10vh] rounded-2xl p-5'>
            <p className='text-center font-bold text-3xl mb-5'>Product-Details : {donation_id}</p>
            <div className='md:flex items-center justify-center mb-5'>
                <div className='mr-9 mb-5'>
                    <img className='md:h-[400px] rounded' src={product.category.image} alt="" />
                </div>
                <div className='md:w-[20vw]'>
                    <p className='font-bold'>Status : {product.status}</p>
                    <p>Condition : {product.condition}</p>
                    <p>Charity Name : {product.charity_name}</p>
                    <p>Donation Date : {product.donation_date}</p>
                    <p>Quantity : {product.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;