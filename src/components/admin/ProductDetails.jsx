import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ContextApp } from '../../contextapi/ContextApp';
import Spinner from '../Spinner';
import { deleteDoc, doc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { loading, setLoading, getAllProduct, getAllProductFunction } = useContext(ContextApp);

    async function deleteProduct(id){
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, "products", id));
            toast.error("Product is Deleted");
            getAllProductFunction();

        } catch (error) {
            console.error("Product is not Fetch", error);
        }
        setLoading(false);
    }

    return (
        <section className='w-full mt-6 px-2'>
            <div className='flex justify-between items-center text-lg font-inter'>
                <h2 className='font-semibold text-pink-500'>All Products</h2>
                <button 
                    onClick={() => navigate("/add-product")} 
                    className="text-base text-white hover:text-pink-600 border-2 border-pink-600 rounded-lg px-3 py-1 bg-pink-500 hover:bg-white duration-200 transition-all">
                    Add product
                </button>

            </div>
            <div className='flex justify-center'>
                {
                    loading && <div className='absolute  -bottom-16'><Spinner /></div> 
                }
            </div>
            <table className='w-full border border-pink-500 mt-4'>
                <thead>
                    <tr className='border border-pink-500 text-left text-pink-500 text-base font-inter'>
                        <th className='border border-pink-500 py-2 px-3'>S.No.</th>
                        <th className='border border-pink-500 px-3'>Image</th>
                        <th className='border border-pink-500 px-3'>Title</th>
                        <th className='border border-pink-500 px-3'>Price</th>
                        <th className='border border-pink-500 px-3'>Category</th>
                        <th className='border border-pink-500 px-3'>Date</th>
                        <th className='border border-pink-500 px-3'>Action</th>
                        <th className='border border-pink-500 px-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllProduct.map((item, index) =>
                            <tr key={item.id} className='text-pink-500'>
                                <td className='border border-pink-500 py-2 px-3'>{index + 1}.</td>
                                <td className='border border-pink-500 p-3'>
                                    <img src={item.imageUrl} alt="" className='w-20 mx-auto' />
                                </td>
                                <td className='border border-pink-500 px-3'>{item.title}</td>
                                <td className='border border-pink-500 px-3'>₹{item.price}</td>
                                <td className='border border-pink-500 px-3 capitalize'>{item.category}</td>
                                <td className='border border-pink-500 px-3'>{item.date}</td>
                                <td className='border border-pink-500 px-3 text-green-500'> <NavLink to={`/update-product/${item.id}`}>Edit</NavLink></td>
                                <td onClick={()=> deleteProduct(item.id)} className='cursor-pointer border border-pink-500 px-3'>Delete</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default ProductDetails
