import { useContext } from 'react'
import ProductCard from './ProductCard'
import { ContextApp } from '../contextapi/ContextApp'
import Spinner from './Spinner';
const AllProducts = () => {
  const { getAllProduct, loading } = useContext(ContextApp);
  return (
    <section className='w-full max-w-[1440px] px-4 sm:px-6 xl:px-8 mx-auto'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-8'>All Products</h2>
      {
        loading ? <div className='flex justify-center'><Spinner /></div> :
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6 pb-10'>
            {
              getAllProduct.length > 0 ?
                (getAllProduct.map((item) => <ProductCard item={item} key={item.id} />)) :
                (<p className='min-h-screen flex justify-center items-center'>Product is not found</p>)
            }
          </div>
      }

    </section>
  )
}

export default AllProducts
