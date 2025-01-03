import { useContext } from "react"
import { ContextApp } from "../../contextapi/ContextApp"
import Spinner from "../Spinner";

const OrderDetails = () => {
    const { getAllOrder, loading, deleteOrderFun } = useContext(ContextApp);
    
    return (
        <section className='w-full mt-6 px-2 max-w-[1440px]'>

            <h2 className='font-semibold text-lg font-inter text-pink-500'>All Orders</h2>
            <div className='flex justify-center'>
                {
                    loading && <div className='absolute  -bottom-16'><Spinner /></div>
                }
            </div>
            <table className='w-full border border-pink-500 mt-4'>
                <thead>
                    <tr className='border border-pink-500 text-left text-pink-500 text-base font-inter'>
                        <th className='border border-pink-500 py-2 px-3'>S.No.</th>
                        <th className='border border-pink-500 px-3'>Order Id</th>
                        <th className='border border-pink-500 px-3'>Image</th>
                        <th className='border border-pink-500 px-3'>Title</th>
                        {/* <th className='border border-pink-500 px-3'>Category</th> */}
                        <th className='border border-pink-500 px-3'>Price</th>
                        <th className='border border-pink-500 py-2 px-3'>Quantity</th>
                        <th className='border border-pink-500 px-3'>Total Price</th>
                        <th className='border border-pink-500 px-3'>Status</th>
                        <th className='border border-pink-500 px-3'>Name</th>
                        {/* <th className='border border-pink-500 px-3'>Address</th> */}
                        {/* <th className='border border-pink-500 px-3'>Pincode</th> */}
                        <th className='border border-pink-500 px-3'>Phone Number</th>
                        <th className='border border-pink-500 px-3'>Email</th>
                        <th className='border border-pink-500 px-3'>Date</th>
                        <th className='border border-pink-500 px-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllOrder.map((order, index) =>
                            <>
                                {
                                    order.cartItems.map((item) =>
                                        <tr key={item.id} className='text-pink-500'>
                                            <td className='border border-pink-500 py-2 px-3'>{index + 1}.</td>
                                            <td className='border border-pink-500 py-2 text-sm px-3'>{item.id}</td>
                                            <td className='border border-pink-500 p-3'>
                                                <img src={item.imageUrl} alt="" className='w-20 mx-auto' />
                                            </td>
                                            <td className='border border-pink-500 text-sm px-3'>{item.title.substr(0,50)}...</td>
                                            {/* <td className='border border-pink-500 px-3 capitalize'>{item.category}</td> */}
                                            <td className='border border-pink-500 px-3 '>₹{item.price}</td>
                                            <td className='border border-pink-500 px-3'>{item.quantity}</td>
                                            <td className='border border-pink-500 px-3 '>₹{item.price * item.quantity}</td>
                                            <td className='border border-pink-500 text-sm px-3'>{order.status}</td>
                                            <td className='border border-pink-500 px-3 '>{order.orderInfo.fullName}</td>
                                            {/* <td className='border border-pink-500 px-3 text-sm'>{order.orderInfo.address}</td> */}
                                            {/* <td className='border border-pink-500 px-3 '>{order.orderInfo.pincode}</td> */}
                                            <td className='border border-pink-500 px-3'>{order.orderInfo.mobileNumber}</td>
                                            <td className='border border-pink-500 px-3 '>{order.email}</td>
                                            <td className='border border-pink-500 px-3 '>{item.date}</td>
                                            <td onClick={()=> deleteOrderFun(order.id)} className='border cursor-pointer border-pink-500 px-3 '>Delete</td>
                                        </tr>
                                    )
                                }
                            </>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

export default OrderDetails
