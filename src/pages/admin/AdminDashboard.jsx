import img from '../../assets/testimonia-img.png'
import { LuListOrdered, LuShoppingBasket } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";
import { useContext, useState } from 'react';
import { ContextApp } from '../../contextapi/ContextApp';
import ProductDetails from '../../components/admin/ProductDetails';
import OrderDetails from '../../components/admin/OrderDetails';
import UserDetails from '../../components/admin/UserDetails';

const AdminDashboard = () => {
    const [toggleContent, setToggleContent] = useState(1);
    const admin = JSON.parse(localStorage.getItem("users"));
    const{getAllProduct, getAllOrder, getAllUser} = useContext(ContextApp);

    return (
        <section className='w-full max-w-[1440px] mx-auto px-8 my-8'>
            <h2 className='text-3xl text-center font-inter font-bold text-pink-500'>Admin Dashboard</h2>
            <div className='rounded-lg flex flex-col items-center mt-2 py-3'>
                <div className='w-24 h-24 bg-pink-600 rounded-full'>
                    <img src={img} alt="" />
                </div>
                {/* name */}
                <h4 className='text-base font-inter mt-3 text-pink-500'><span className='font-semibold'>Name : </span> {admin?.name} </h4>
                {/* email */}
                <h4 className='text-base font-inter text-pink-500'><span className='font-semibold'>Email : </span> {admin?.email} </h4>
                {/* date */}
                <h4 className='text-base font-inter text-pink-500'><span className='font-semibold'>Date : </span> {admin?.date} </h4>
                {/* role */}
                <h4 className='text-base font-inter text-pink-500'><span className='font-semibold'>Role : </span> {admin?.role} </h4>
            </div>
            <div className='w-full flex gap-6 mt-4 px-10'>

                <div onClick={() => setToggleContent(1)} className='text-pink-500 w-1/3 hover:bg-pink-300 duration-200 transition-all bg-pink-200 py-4 flex flex-col items-center rounded-lg font-inter border-2'>
                    <LuShoppingBasket className='text-4xl mb-3' />
                    <h4 className='text-pink-400 text-xl font-semibold'>{getAllProduct.length}</h4>
                    <p className=' text-sm font-semibold'>Total Products</p>
                </div>
                <div onClick={() => setToggleContent(2)} className='text-pink-500 w-1/3 hover:bg-pink-300 duration-200 transition-all bg-pink-200 py-4 flex flex-col items-center rounded-lg font-inter border-2'>
                    <LuListOrdered className='text-4xl mb-3' />
                    <h4 className='text-pink-400 text-xl font-semibold' >{getAllOrder.length}</h4>
                    <p className=' text-sm font-semibold'>Total Orders</p>
                </div>
                <div onClick={() => setToggleContent(3)} className='text-pink-500 w-1/3 hover:bg-pink-300 duration-200 transition-all bg-pink-200 py-4 flex flex-col items-center rounded-lg font-inter border-2'>
                    <BiSolidUserAccount className='text-4xl mb-3' />
                    <h4 className='text-pink-400 text-xl font-semibold'>{getAllUser.length}</h4>
                    <p className=' text-sm font-semibold'>Total Users</p>
                </div>

            </div>

                
            <div className={ toggleContent === 1 ? "block" : "hidden"}>
                <ProductDetails/>
            </div>
            <div className={ toggleContent === 2 ? "block" : "hidden"}>
                <OrderDetails/>
            </div>
            <div className={ toggleContent === 3 ? "block" : "hidden"}>
                <UserDetails/>
            </div>

         </section>
    )
}

export default AdminDashboard
