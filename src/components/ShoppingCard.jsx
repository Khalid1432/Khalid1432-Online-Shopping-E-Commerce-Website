import React, { useEffect } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteFromCart, incrementQuantity } from '../redux/slices/cart.Slice';
import toast from 'react-hot-toast';




const ShoppingCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  function deletefromCart(item) {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from Cart");
  }
  function increment(id) {
    dispatch(incrementQuantity(id));
  }
  function decrement(id) {
    dispatch(decrementQuantity(id));
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);
  return (
    <div className='shadow-lg flex flex-col sm:flex-row gap-4 p-3 rounded-lg overflow-x-hidden'>

      <div className='sm:w-2/5 flex flex-col justify-between'>
        <div className='h-[250px] sm:h-[240px] flex items-center justify-center'>
          <img src={item.imageUrl} alt="" className='h-full sm:h-[200px]'/>
        </div>
        <div className='text-sm sm:text-base mt-2 flex items-center gap-12 justify-center font-inter'>
          <button onClick={() => decrement(item.id)}><FaMinus /></button>
          <span className='text-base sm:text-lg'>{item.quantity}</span>
          <button onClick={() => increment(item.id)}><FaPlus /></button>
        </div>
      </div>

      <div className='sm:w-3/5 flex flex-col justify-between px-1'>
        <div className=''>
          <h2 className='text-base sm:text-lg font-inter font-semibold'>{item.title.substr(0, 60)}</h2>
          <p className='text-sm opacity-70 font-inter my-2'>{item.description.substr(0, 150)}...</p>
          
        </div>
        <div className='flex justify-between'>
          <p className='text-base font-inter'>₹{item.price}</p>
          <button onClick={() => deletefromCart(item)} className=' flex items-center text-red-500 pr-1'>
            <AiOutlineDelete className='text-lg sm:text-xl mr-1' />Remove
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default ShoppingCard
