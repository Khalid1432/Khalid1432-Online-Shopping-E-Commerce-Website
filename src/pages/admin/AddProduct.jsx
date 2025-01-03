import { useContext, useState } from "react"
import { categorydata } from "../../components/Category"
import { ContextApp } from '../../contextapi/ContextApp'
import { fireDB } from '../../firebase/FirebaseConfig'
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
import Spinner from "../../components/Spinner"

const AddProduct = () => {

  const [addProduct, setAddProduct] = useState(
    {
      title: "",
      price: "",
      imageUrl: "",
      category: "",
      description: "",
      quantity: 1,
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
  )

  const { loading, setLoading } = useContext(ContextApp);
  const navigate = useNavigate();
  function addProductChangeHandler(event) {
    setAddProduct((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  async function addProductSubmitHandler(event) {
    event.preventDefault();
    if (addProduct.category === "") {
      return toast.error("All field is required");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, addProduct);

      toast.success("Product Add Successfully");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Product add is not added", error);
      toast.error("Product Add Failed");

    }
    setLoading(false);
  }



  return (
    <section className='w-full max-w-[1440] min-h-screen px-8 mx-auto flex justify-center items-center'>
      {loading && <div className="absolute"><Spinner /></div>}
      <form onSubmit={addProductSubmitHandler} className='w-1/3 border border-gray-400 bg-pink-100 rounded-lg py-4 px-6'>
        <h2 className='text-2xl font-inter font-bold text-center text-pink-500'>Add product</h2>
        <input
          type="text"
          required
          name="title"
          value={addProduct.title}
          placeholder='Product title'
          onChange={addProductChangeHandler}
          className='w-full py-2 text-base font-inter  mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <input
          type="number"
          required
          name="price"
          value={addProduct.price}
          placeholder='Product Price'
          onChange={addProductChangeHandler}
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <input
          type="text"
          required
          name="imageUrl"
          value={addProduct.imageUrl}
          placeholder='Product image Url'
          onChange={addProductChangeHandler}
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <select
          onChange={addProductChangeHandler}
          value={addProduct.category}
          required
          name="category"
          className='w-full py-2 text-base font-inter outline-none capitalize mt-2 bg-transparent px-3 border-gray-400 rounded-lg border '>
          <option value="" disabled >Select Product category</option>
          {
            categorydata.map((cat) =>
              <option key={cat.id} value={cat.cat_name}>{cat.cat_name}</option>)
          }
        </select>
        <textarea onChange={addProductChangeHandler} value={addProduct.description} required name="description" placeholder='Product Description' rows={3}
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <button className='w-full py-2 text-base text-white hover:text-pink-600 font-semibold font-inter mt-4 bg-pink-600 border-pink-600 hover:bg-white duration-200 transition-all rounded-lg border-2 '>Add Product</button>
      </form>
    </section>
  )
}

export default AddProduct
