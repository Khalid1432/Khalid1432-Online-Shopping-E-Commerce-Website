import Layout from "../components/Layout"
import { MdStarBorder } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { ContextApp } from "../contextapi/ContextApp";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { fireDB } from "../firebase/FirebaseConfig";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/slices/cart.Slice";
import toast from 'react-hot-toast';
// MdStarRate

const ProductDetails = () => {
    const {loading, setLoading } = useContext(ContextApp);
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState('');
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.cart);

    function addtoCart(item){
        dispatch(addToCart(item));
        toast.success("Added Successfully");
    }
    function deletefromCart(item){
        dispatch(deleteFromCart(item));
        toast.success("Deleted Successfully");
    }

    async function getSingleProductData() {
        setLoading(true);
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id));
            setSingleProduct({...productTemp.data(), id: productTemp.id});
        } catch (error) {
            console.error("Product data is not Fetch", error);
        }
        setLoading(false);
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);
    

    useEffect(() => {
        getSingleProductData();
    }, []);

    return (
        <div>
            <Layout>
                {
                    loading ? <div className="min-h-screen flex justify-center items-center"><Spinner/></div> :
                    <section className="w-full max-w-[1440px] px-3 sm:px-10 md:px-14 lg:px-8 xl:px-10 py-16 mx-auto flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-14 mt-10 sm:pt-0">
                        <div className="lg:w-1/2 flex items-center justify-center rounded-lg">
                            <img src={singleProduct.imageUrl} alt="" className="rounded-lg" />
                        </div>
                        <div className="lg:w-1/2 py-2 overflow-x-hidden">
                            <h2 className="font-inter font-extrabold text-xl text-gray-600">{singleProduct.title}</h2>
                            <ul className="flex gap-3 mt-6 text-2xl text-slate-600">
                                <li className="cursor-pointer"><MdStarBorder /></li>
                                <li className="cursor-pointer"><MdStarBorder /></li>
                                <li className="cursor-pointer"><MdStarBorder /></li>
                                <li className="cursor-pointer"><MdStarBorder /></li>
                                <li className="cursor-pointer"><MdStarBorder /></li>
                            </ul>
                            <h3 className="font-inter font-bold text-lg text-gray-600 mt-6">₹{singleProduct.price}</h3>
                            <h4 className="font-inter font-extrabold text-base text-gray-600 mt-6">Description :</h4>
                            <p className="font-inter text-sm text-gray-600 mt-3">{singleProduct.description}</p>
                            {
                                cartItems.some((p)=> p.id === singleProduct.id) ?
                                <button 
                                    onClick={()=> deletefromCart(singleProduct)} 
                                    className=" bg-pink-600 mt-6 rounded-lg border-2 border-pink-600 w-full text-base text-white py-1 hover:text-pink-600 hover:bg-white duration-200 transition-all font-semibold">
                                    Delete from cart
                                </button>:
                                <button 
                                    onClick={()=> addtoCart(singleProduct)} 
                                    className=" bg-pink-600 mt-6 rounded-lg border-2 border-pink-600 w-full text-base text-white py-1 hover:text-pink-600 hover:bg-white duration-200 transition-all font-semibold">
                                    Add to cart
                                </button>
                            }
                            
                        </div>
                    </section>
                }
                
            </Layout>
        </div>
    )
}

export default ProductDetails
