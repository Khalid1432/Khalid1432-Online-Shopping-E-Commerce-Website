import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart, deleteFromCart } from '../redux/slices/cart.Slice';
import toast from 'react-hot-toast';

const ProductCard = ({ item }) => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  function deletetoCart(item){
    dispatch(deleteFromCart(item)); 
    toast.success("Deleted from Cart");
  }
  function addtoCart(item){
    dispatch(addToCart(item));
    toast.success("Added to Cart");
  }
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cartItems));
  },[cartItems])

  return (
    <div className='rounded-lg shadow-xl flex flex-col justify-between pb-2'>
      <div className=' h-[260px] grid place-items-center place-justify-cente overflow-x-hidden'>
        <img src={item.imageUrl} onClick={() => nevigate(`/productdetails/${item.id}`)} loading='lazy' alt="" 
        className='h-[240px] rounded-t-lg' />
      </div>
      <div className='flex justify-between px-2 text-base font-inter font-semibold my-2'>
        <h3>{item.title.substr(0,20)}...</h3>
        <p>₹{item.price}</p>
      </div>
      <p className='text-sm font-inter px-2 opacity-70'>{item.description.substr(0, 100)}...</p>
      {
        cartItems.some((p)=> p.id === item.id)
        ?
        <button onClick={()=> deletetoCart(item)} className='w-[94%] py-2 bg-pink-600 mx-2 font-semibold rounded-lg my-2 text-white font-inter border-2 border-pink-600 hover:bg-white hover:text-pink-600 duration-200 transition-all'>
          Remove from cart
        </button>:
        <button onClick={()=> addtoCart(item)} className='w-[94%] py-2 bg-pink-600 mx-2 font-semibold rounded-lg my-2 text-white font-inter border-2 border-pink-600 hover:bg-white hover:text-pink-600 duration-200 transition-all'>
          Add to cart
        </button>
      }
    </div>
  )
}

export default ProductCard
