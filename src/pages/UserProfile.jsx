import React, { useContext } from 'react'
import Layout from '../components/Layout'
import img from '../assets/testimonia-img.png'
import { ContextApp } from '../contextapi/ContextApp';

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const { getAllOrder } = useContext(ContextApp);
  return (
    <div>
      <Layout>
        <section className='w-full max-w-[1440px] mx-auto px-3 sm:px-8 my-8 mt-24 sm:mt-10'>
          <div className='rounded-lg flex flex-col items-center'>
            <div className='w-24 h-24 bg-pink-800 rounded-full'>
              <img src={img} alt="" />
            </div>
            {/* name */}
            <h4 className='text-base font-inter mt-3'><span className='font-semibold'>Name : </span> {user?.name} </h4>
            {/* email */}
            <h4 className='text-base font-inter'><span className='font-semibold'>Email : </span>{user?.email}</h4>
            {/* date */}
            <h4 className='text-base font-inter'><span className='font-semibold'>Date : </span>{user?.date}</h4>
            {/* role */}
            <h4 className='text-base font-inter'><span className='font-semibold'>Role : </span>{user?.role}</h4>
          </div>
          <h2 className='text-xl md:text-2xl font-inter font-bold my-6 px-3'>Order Details</h2>
          {
            getAllOrder.filter((obj) => obj.userid === user?.uid).map((order) =>
              <div key={order.id}>
                {
                  order.cartItems.map((item, index) =>
                    <div key={index} className='flex flex-col sm:flex-row rounded-xl gap-4 md:gap-6 lg:gap-8 border-2 mt-4'>

                      <div className='sm:w-2/5 bg-pink-200 py-4 px-6 rounded-t-lg sm:rounded-r-none  sm:rounded-l-lg'>
                        <h3 className='text-base font-inter font-semibold'>Order id</h3>
                        <p className='text-sm font-inter'>{item.id}</p>

                        <h3 className='text-base mt-3 font-inter font-semibold'>Date</h3>
                        <p className='text-sm font-inter'>{item.date}</p>

                        <h3 className='text-base mt-3 font-inter font-semibold'>Total Amount</h3>
                        <p className='text-sm font-inter'>₹{item.price}</p>

                        <h3 className='text-base mt-3 font-inter font-semibold'>Order Status</h3>
                        <p className='text-sm font-inter text-green-700'>{order.status}</p>
                      </div>

                      <div className='sm:w-3/5 flex gap-4 md:gap-6 lg:gap-8 py-4 px-3 sm:px-6 rounded-b-lg sm:rounded-r-lg overflow-x-hidden'>
                        <div className='flex items-center justify-center h-full'>
                         <img src={item.imageUrl} alt="" className="rounded-lg h-[180px] sm:h-[200px]" />
                        </div>
                        <div className='w-full'>
                          <div className='flex justify-between font-inter font-semibold text-sm sm:text-base text-gray-600'>
                            <h3 >{item.title.substr(0,100)}...</h3>
                            <h3 >₹{item.price}</h3>
                          </div>
                          <p className='text-sm font-inter text-gray-500 mt-1 capitalize'>{item.category}</p>
                         <p className='text-sm font-inter mt-5'>Item ({item.quantity})</p>
                        </div>
                      </div>

                    </div>
                  )
                }
              </div>)
          }
        </section>
      </Layout>
    </div>
  )
}

export default UserProfile
