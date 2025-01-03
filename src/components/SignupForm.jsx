import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {auth, fireDB} from '../firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import toast from 'react-hot-toast';
import {ContextApp} from '../contextapi/ContextApp'
import Spinner from '../components/Spinner'

const SignupForm = () => {

    const[userSignup, setUserSignup] = useState({fullName:"" , email:"", password:"", role:"user"});
    const navigate = useNavigate();
    
    function changeHandler(event){
        setUserSignup((prev)=> {
        return {
            ...prev,
            [event.target.name]:event.target.value
        }
        })
    }
    const {loading, setLoading} = useContext(ContextApp)

    
    async function signupSubmitHandler(event) {
        event.preventDefault();
        setLoading(true)
        try {
            // Create user with email and password
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
    
            // Create user object
            const user = {
                name: userSignup.fullName,
                email: users.user.email,
                role: userSignup.role,
                uid: users.user.uid,
                time: Timestamp.now(),
                date: new Date().toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }),
            };
    
            // Create user reference
            const userReference = collection(fireDB, "user");
    
            // Add user details to Firestore
            await addDoc(userReference, user);
    
            setUserSignup({ fullName: "", email: "", password: "" });
            toast.success("Signup Successfully");
            navigate('/login');
            
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("Signup failed. Please try again.");
        }
        setLoading(false);
    }
    
  return (
    <div className=' h-screen flex justify-center items-center'>
        {loading && <div className='absolute'><Spinner /> </div>}
        <form onSubmit={signupSubmitHandler} 
            className='mx-4 sm:w-1/2 lg:w-1/3 border-2 border-pink-600 rounded-lg p-6'>

            <h2 className='text-2xl font-bold font-inter text-center text-pink-600'>Signup</h2>
            <input 
                required
                type="text" 
                onChange={changeHandler}
                name="fullName"
                placeholder='Full Name'
                value={userSignup.fullName}
                className='w-full outline-none mt-5 text-base font-inter border rounded-md border-pink-600 py-2 px-3'
            />
            <input 
                required
                type="email" 
                name='email'
                onChange={changeHandler}
                value={userSignup.email}
                placeholder='Email Address'
                className='w-full outline-none mt-3 text-base font-inter border rounded-md border-pink-600 py-2 px-3'
            />
            <input 
                required
                name='password'
                type="password" 
                value={userSignup.password}
                onChange={changeHandler}
                placeholder='Password'
                className='w-full outline-none mt-3 text-base font-inter border rounded-md border-pink-600 py-2 px-3'
            />
            <button className='w-full mt-5 text-base text-white font-semibold border-2 border-pink-600 hover:bg-white hover:text-pink-600 font-inter duration-200 transition-all rounded-md bg-pink-600 py-2 px-3'>Signup</button>
            <p className='mt-2 font-inter  '>Have an account <NavLink to="/login" className='text-pink-600 font-semibold'>Login</NavLink></p>
        </form>
    </div>
  )
}

export default SignupForm
