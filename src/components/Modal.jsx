import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { fireDB } from '../firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const Modal = ({ modal }) => {

    const user = JSON.parse(localStorage.getItem("users"));
    const cartItems = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const [orderInfo, setOrderInfo] = useState(
        {
            fullName: "",
            address: "",
            pincode: "",
            mobileNumber: "",
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric"

                }
            )

        }
    );

    function orderChangeHandler(event) {
        setOrderInfo((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function buyNow(event) {
        event.preventDefault();
        // order object
        const orderData = {
            orderInfo,
            cartItems,
            email: user.email,
            userid: user.uid,
            status: "Confirmed",
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric"

                }
            )
        }
        try {
            const orderReference = collection(fireDB, 'order');
            addDoc(orderReference, orderData);
            setOrderInfo({
                fullName: "",
                address: "",
                pincode: "",
                mobileNumber: ""
            })
            toast.success("Order Placed Successfully");
            navigate("/user-profile");

        } catch (error) {
            console.error("order item is not added", error);
        }
    }

    return (
        <section className={`${modal} w-full min-h-screen fixed top-0 z-50 bg-gray-400 bg-opacity-80 opacit flex justify-center items-center`}>
            <form onSubmit={buyNow} className='mx-4 sm:w-1/2 lg:w-1/3 flex flex-col bg-pink-200 p-6 rounded-lg'>
                <input
                    type="text"
                    name="fullName"
                    required
                    value={orderInfo.fullName}
                    onChange={orderChangeHandler}
                    placeholder='Enter your name'
                    className='px-3 py-2 mb-2 rounded-lg outline-none text-base font-inter'
                />
                <input
                    type="text"
                    name="address"
                    required
                    value={orderInfo.address}
                    onChange={orderChangeHandler}
                    placeholder='Enter your address'
                    className='px-3 py-2 mb-2 rounded-lg outline-none text-base font-inter'
                />
                <input
                    type="number"
                    name="pincode"
                    required
                    value={orderInfo.pincode}
                    onChange={orderChangeHandler}
                    placeholder='Enter your Pincode'
                    className='px-3 py-2 mb-2 rounded-lg outline-none text-base font-inter'
                />
                <input
                    type="number"
                    name="mobileNumber"
                    required
                    value={orderInfo.mobileNumber}
                    onChange={orderChangeHandler}
                    placeholder='Enter your Mobile Number'
                    className='px-3 py-2 mb-2 rounded-lg outline-none text-base font-inter'
                />
                <button 
                    className='px-3 py-2 border-2 border-pink-600 bg-pink-600 text-white font-semibold mt-3 rounded-lg outline-none text-base font-inter hover:bg-white hover:text-pink-600 duration-200 transition-all'>
                   Buy Now
                </button>
            </form>
        </section>
    )
}

export default Modal
