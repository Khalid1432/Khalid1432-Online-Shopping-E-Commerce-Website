import React from 'react';
import jacket from '../assets/jacket.png'
import fashion from '../assets/fashion.png'
import home from '../assets/home.png'
import book from '../assets/book.png'
import laptop from '../assets/laptop.png'
import shoes from '../assets/shoes.png'
import tshirt from '../assets/tshirt.png'
import mobile from '../assets/mobile.png'
import { useNavigate } from 'react-router-dom';

export const categorydata = [
    {
        id: 1,
        cat_name: "fashion",
        cat_img: fashion
    },
    {
        id: 2,
        cat_name: "tshirt",
        cat_img: tshirt
    },
    {
        id: 3,
        cat_name: "jacket",
        cat_img: jacket
    },
    {
        id: 4,
        cat_name: "mobile",
        cat_img: mobile
    },
    {
        id: 5,
        cat_name: "laptop",
        cat_img: laptop
    },
    {
        id: 6,
        cat_name: "shoes",
        cat_img: shoes
    },
    {
        id: 7,
        cat_name: "home",
        cat_img: home
    },
    {
        id: 8,
        cat_name: "book",
        cat_img: book
    },
    
];

const Category = () => {

    const navigate = useNavigate();

    return (
        <section className='w-full max-w-[1440px] mx-auto my-8'>
            {categorydata.length > 0 ? (
                <ul className='flex items-center justify-between gap-x-12 overflow-y-auto no-scrollbar px-4 sm:px-4 md:px-8'>
                    {categorydata
                        .map((cat) => (
                            <li key={cat.id}>
                                <div onClick={()=> navigate(`/category/${cat.cat_name}`)} className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] bg-pink-600 rounded-full cursor-pointer hover:bg-pink-500 duration-200 transition-all'>
                                    <img src={cat.cat_img} loading='lazy' alt="cat-img" />
                                </div>
                                <p className='text-center text-lg md:text-xl mt-2 capitalize'>{cat.cat_name}</p>
                            </li>
                        ))}
                </ul>
            ) : (
                <p>No categories data available.</p>
            )}
        </section>
    );
};

export default Category;
