import { useContext, useEffect, useState } from "react"
import { categorydata } from "../../components/Category"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { ContextApp } from "../../contextapi/ContextApp";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import Spinner from "../../components/Spinner";

const UpdateProduct = () => {

  const { loading, setLoading, getAllProductFunction } = useContext(ContextApp);
  const {id} = useParams();
  const navigate = useNavigate();
  const [updateProduct, setUpdateProduct] = useState(
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
  );

  function updateProductChangeHandler(event) {
    setUpdateProduct((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  async function getSingleProduct() {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const product = productTemp.data();
      setUpdateProduct({
        title: product?.title,
        price: product?.price,
        imageUrl: product?.imageUrl,
        category: product?.category,
        quantity: product?.quantity,
        description: product?.description,
        time: product?.time,
        date: product?.date
      });
    } catch (error) {
      console.error("Product data is not Fetch", error);
    }
    setLoading(false);
  }


  async function updateSubmitHandler(event) {
    event.preventDefault();

    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", id), updateProduct);

      toast.success("Update Product Successfully");
      getAllProductFunction();
      navigate(-1);

    } catch (error) {
      console.error("Data is Not Fatched", error);
      toast.error("Update Product Failed");
    }
    setLoading(false);
  }

  useEffect(()=>{
    getSingleProduct();
  },[]);

  return (
    <section className='w-full max-w-[1440] min-h-screen px-8 mx-auto flex justify-center items-center'>
      {loading && <div className="absolute"><Spinner/></div>}
      <form onSubmit={updateSubmitHandler} className='w-1/3 border border-gray-400 bg-pink-100 rounded-lg py-4 px-6'>
        <h2 className='text-2xl font-inter font-bold text-center text-pink-500'>Update product</h2>
        <input
          type="text"
          name="title"
          required
          value={updateProduct.title}
          onChange={updateProductChangeHandler}
          placeholder='Product title'
          className='w-full py-2 text-base font-inter  mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <input
          type="number"
          name="price"
          required
          value={updateProduct.price}
          onChange={updateProductChangeHandler}
          placeholder='Product Price'
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <input
          type="text"
          name="imageUrl"
          required
          value={updateProduct.imageUrl}
          onChange={updateProductChangeHandler}
          placeholder='Product image Url'
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <select
          name="category"
          required
          value={updateProduct.category}
          onChange={updateProductChangeHandler}
          className='w-full py-2 text-base font-inter outline-none capitalize mt-2 bg-transparent px-3 border-gray-400 rounded-lg border '>
          <option value="" disabled>Select Product category</option>
          {
            categorydata.map((cat) =>
              <option key={cat.id} value={cat.cat_name}>{cat.cat_name}</option>)
          }
        </select>
        <textarea
          name="description"
          required
          value={updateProduct.description}
          onChange={updateProductChangeHandler}
          placeholder='Product Description'
          rows={3}
          className='w-full py-2 text-base font-inter mt-2 bg-transparent placeholder:text-pink-300 px-3 border-gray-400 rounded-lg outline-none border '
        />
        <button className='w-full py-2 text-base text-white hover:text-pink-600 font-semibold font-inter mt-4 bg-pink-600 border-pink-600 hover:bg-white duration-200 transition-all rounded-lg border-2 '>Update Product</button>
      </form>
    </section>
  )
}

export default UpdateProduct
