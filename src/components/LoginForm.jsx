import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { ContextApp } from '../contextapi/ContextApp';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../firebase/FirebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import Spinner from './Spinner';

const LoginForm = () => {

  const { loading, setLoading } = useContext(ContextApp);
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  function changeHandler(event) {
    setUserLogin((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  async function loginSubmitHandler(event) {
    event.preventDefault();
    setLoading(true);

    try {
      // Authenticate user with email and password
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

      // Query Firestore for user details
      const q = query(
        collection(fireDB, "user"),
        where('uid', '==', users?.user?.uid)
      );

      // Fetch user data
      const userData = onSnapshot(q, (querySnapshot) => {
        let user;
        querySnapshot.forEach((doc) => user = doc.data());

        // Save user data in local storage
        localStorage.setItem("users", JSON.stringify(user));

        // Reset login form
        setUserLogin({ email: "", password: "" });
        toast.success("Login Successfully");
        setLoading(false);
        // Navigate based on user role
        if (user.role === "user") {
          navigate("/user-profile");
        } else {
          navigate("/admin-dashboard");
        }

      });

      // Return the userData function to clean up listeners
      return userData;

    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please check your credentials and try again.");
    } 
      
    setLoading(false);

  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {loading && <div className="absolute"><Spinner /></div>}
      <form onSubmit={loginSubmitHandler} className='mx-4 sm:w-1/2 lg:w-1/3 border-2 border-pink-600 rounded-lg p-6'>
        <h2 className='text-2xl font-bold font-inter text-center text-pink-600'>Login</h2>
        <input
          type="email"
          name='email'
          required
          value={userLogin.email}
          onChange={changeHandler}
          placeholder='Email Address'
          className='w-full outline-none mt-3 text-base font-inter border rounded-md border-pink-600 py-2 px-3'
        />
        <input
          type="password"
          required
          name='password'
          value={userLogin.password}
          onChange={changeHandler}
          placeholder='Password'
          className='w-full outline-none mt-3 text-base font-inter border rounded-md border-pink-600 py-2 px-3'
        />
        <button className='w-full mt-5 text-base text-white font-semibold border-2 border-pink-600 hover:bg-white hover:text-pink-600 font-inter duration-200 transition-all rounded-md bg-pink-600 py-2 px-3'>Login</button>
        <p className='mt-2 font-inter  '>Don't Have an account <NavLink to="/signup" className='text-pink-600 font-semibold'>Signup</NavLink></p>
      </form>
    </div>
  )
}

export default LoginForm
