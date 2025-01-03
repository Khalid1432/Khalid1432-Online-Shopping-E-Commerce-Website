import React from 'react'
import Layout from '../components/Layout'
import Category from '../components/Category'
import AllProducts from '../components/AllProducts'

const AllProductPage = () => {
  return (
    <div>
      <Layout>
        <div className='mt-20 sm:mt-0'>
          <Category />
          <AllProducts />
        </div> 
      </Layout>
    </div>
  )
}

export default AllProductPage
