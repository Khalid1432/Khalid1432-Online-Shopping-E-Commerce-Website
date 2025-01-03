import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ContextApp } from '../contextapi/ContextApp'
import Spinner from './Spinner';



const BestSellingProducts = () => {
  const { getAllProduct, loading } = useContext(ContextApp);
  return (
    <section className='w-full max-w-[1440px] px-6 xl:px-8 mx-auto'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-center mb-8'>Best Selling Products</h2>
      {
        loading ? <div className='flex justify-center'><Spinner /></div> :
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-6'>
            {
              getAllProduct.length > 0 ?
                (
                  getAllProduct
                    .filter((item => item.id)).slice(0, 12)
                    .map((item) => <ProductCard key={item.id} item={item} />)
                ) :
                (
                  <p>Data is Empty</p>
                )
            }
          </div>
      }

    </section>
  )
}

export default BestSellingProducts
