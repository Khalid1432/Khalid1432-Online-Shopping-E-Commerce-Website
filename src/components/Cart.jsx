import { useState } from 'react';
import Modal from './Modal';
import ShoppingCard from './ShoppingCard'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const totalCartItem = cartItems.map((item) => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const totalPrice = cartItems.map((item) => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);
  const [modal, setModal] = useState("hidden");
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <div className='w-full max-w-[1440px] px-6 sm:px-10 md:px-6 py-6 mx-auto mt-16 sm:mt-0'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-inter'>Shopping Cart</h2>
        {
          totalCartItem > 0 ?
            <div className='grid md:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-6 justify-center'>
              <div className='md:col-span-2 flex flex-col gap-8'>
                {
                  cartItems.map((item) => <ShoppingCard key={item.id} item={item} />)
                }
              </div>

              <div className='md:col-span-1 flex flex-col justify-between p-2'>

                <div>
                  <h3 className='text-lg font-semibold font-inter'>Price Details</h3>
                  <div className='flex justify-between my-2 font-inter text-base opacity-80'>
                    <p>Price ({totalCartItem} item)</p>
                    <p>₹{totalPrice}</p>
                  </div>
                  <div className='flex justify-between my-2 font-inter text-base opacity-80'>
                    <p>Delivery Charges</p>
                    <p className='text-green-600'>Free</p>
                  </div>

                </div>
                <div>
                  <div className='flex justify-between my-2 font-inter text-base font-semibold opacity-95'>
                    <p>Total Amount</p>
                    <p>₹{totalPrice}</p>
                  </div>
                  <button
                    onClick={() => setModal("Block")}
                    className='text-lg rounded-md w-full font-inter font-semibold text-white border-2 border-pink-600 bg-pink-600 hover:bg-white hover:text-pink-600 duration-200 transition-all'>
                    Buy now
                  </button>
                </div>
              </div>

            </div> :
            <div 
              className='grid place-items-center min-h-screen text-base sm:text-lg md:xl font-semibold font-inter'>
              Cart is empty
            </div>
        }

      </div>
      {user ?
        <Modal modal={modal} /> :
        <Navigate to="/login" />
      }

    </>
  )
}

export default Cart
