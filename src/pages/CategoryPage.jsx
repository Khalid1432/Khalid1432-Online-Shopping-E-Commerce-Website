import React, { useContext } from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import { ContextApp } from '../contextapi/ContextApp'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {

    const { getAllProduct, loading } = useContext(ContextApp);
    const { categoryname } = useParams();
    const filterData = getAllProduct.filter((obj) => obj.category.includes(categoryname));
    // console.log(filterData);

    return (
        <section>
            <Layout>
                <div className='w-full max-w-[1440px] px-10 mx-auto'>
                    <h2 className='text-3xl font-semibold text-center mb-8 capitalize mt-4'>{categoryname}</h2>
                    {
                        loading ? (<div className='flex justify-center'><Spinner /></div>) :
                        (
                            filterData.length > 0 ?
                            <div className='grid grid-cols-4 gap-8 pb-10'>
                                {
                                    filterData.map((item) => <ProductCard item={item} key={item.id} />)
                                }
                            </div>
                            :
                            <div className='min-h-screen mx-auto flex justify-center items-center'>
                                <p className='text-3xl font-bold text-center capitalize'>Product is not available</p>
                            </div>
                        )
                    }
                    
                </div>
            </Layout>
        </section>
    )
}

export default CategoryPage
