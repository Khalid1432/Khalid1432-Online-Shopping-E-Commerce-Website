import { NavLink, useNavigate } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ContextApp } from "../contextapi/ContextApp";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const cartItems = useSelector(state=> state.cart);
  const{getAllProduct} = useContext(ContextApp);
  const [hamBurger, setHamBurger] = useState("hidden");
  
  return (
    <header className="bg-pink-600 sticky top-0 z-50">
      <nav className="w-full max-w-[1440px] h-[70px] mx-auto flex justify-between items-center px-2 sm:px-6">
        <h2 className="text-3xl md:text-4xl text-white font-gantari select-none">
          <NavLink to="/"><span className="text-yellow-400">O</span>nline <span className="text-yellow-400">S</span>hopping</NavLink>
        </h2>
        <div className="lg:w-1/4 sm:w-1/3 w-full absolute top-16 sm:top-0 py-3 left-0 px-3 sm:px-0 bg-pink-600 sm:relative flex flex-col gap-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products"
              onChange={(event) => setSearch(event.target.value)}
              className="w-full py-1 md:py-2 text-lg px-3 rounded-lg font-inter outline-none placeholder:text-base"
            />
            <div className="absolute right-0 top-0 rounded-r-lg py-[6px] md:py-1 text-2xl md:text-4xl cursor-pointer text-white bg-neutral-400 p-1"><IoSearchSharp /></div>
          </div>
          {
            search.length > 0 &&
            <div className="bg-white rounded-lg p-2">
              {
                getAllProduct 
                  .filter((item) => item.title.toLocaleLowerCase().includes(search)).slice(0, 8)
                  .map((item) =>
                  <div onClick={()=> navigate(`/productdetails/${item.id}`)} key={item.id} className="flex gap-2 cursor-pointer bg-gray-100 items-center mt-1">
                    <img src={item.imageUrl} alt="" className="w-10" />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                )
              }
            </div>
          }
        </div>

        <ul className={`${hamBurger} duration-1000 transition-all absolute lg:relative top-16 lg:top-0
          left-0 right-0 pl-3 lg:pl-0 py-6 lg:py-0 space-y-2 lg:space-y-0 bg-pink-600 items-center lg:gap-6
          text-white font-inter text-lg lg:flex`}>
          <li className="hover:text-gray-200 duration-200 transition-all">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-gray-200 duration-200 transition-all">
            <NavLink to="/allproduct">All Product</NavLink>
          </li>
          {
            user?.role === "user" && <li className="hover:text-gray-200 duration-200 transition-all">
            <NavLink to="/user-profile">{user?.name}</NavLink>
            </li>
          }
          {user?.role === "admin" &&
            <li className="hover:text-gray-200 duration-200 transition-all">
              <NavLink to="/admin-dashboard">{user?.name}</NavLink>
            </li>
          }
          { user?.role ?
            <li onClick={()=> {localStorage.clear(); navigate("/login")}} className="hover:text-gray-200 cursor-pointer duration-200 transition-all">
              Logout
            </li>:
            <li className="hover:text-gray-200 duration-200 transition-all">
            <NavLink to="/login">Login</NavLink>
            </li>
          }
          <li className="hover:text-gray-200 duration-200 transition-all hidden lg:block" >
            <NavLink to="/cart">
              <p className="flex items-center gap-x-1 relative">
                <FaCartShopping className="text-3xl"/>
                <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 text-xs text-center rounded-full">{cartItems.length}</span>
                </p>
            </NavLink>
          </li>
        </ul>
        
        <div className="flex items-center gap-3 lg:hidden">
        
          <div className="hover:text-gray-200 duration-200 transition-all text-white font-inter text-lg" >
            <NavLink to="/cart">
              <p className="flex items-center gap-x-1 relative">
                <FaCartShopping className="text-3xl"/>
                <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 text-xs text-center rounded-full">{cartItems.length}</span>
                </p>
            </NavLink>
          </div>
          <div 
            onClick={()=> setHamBurger((prev)=> prev === "hidden" ? "block" : "hidden")  }
            className="text-3xl md:text-4xl text-white font-extralight cursor-pointer">
            <RxHamburgerMenu/>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
