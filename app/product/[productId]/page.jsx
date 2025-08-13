"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Div } from '@/app/Components/common';
import { fetchProducts } from '@/app/utils/api';
import { useParams, useRouter } from 'next/navigation';
import { BsCartPlus } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ProductPage() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const { productId } = params;

      const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const data = await fetchProducts({ productId });
                setProduct(data);
            } catch (error) {
                setError('Failed to load product. Please try again.');
                console.error('Error:', error.message);
            } finally {
                setLoading(false);
            }
        };
        loadProduct();
    }, [productId]);

    if (loading) return <Div>Loading...</Div>;
    if (error) return <Div>{error}</Div>;
    if (!product) return <Div>Product not found.</Div>;

    return (
        <div>
            <div className='px-10 flex   justify-between py-3 '>
                <button
                 onClick={handleBackClick}
                className=' flex items-center border px-4 p-1 rounded-full cursor-pointer'>
                   <IoIosArrowRoundBack size={25}/> back
                </button>
                
            </div>
            <div className="grid grid-rows-5   md:grid-rows-1 md:grid-cols-3 w-full gap-4 h-[900px] overflow-y-scroll  sm:overflow-y-hidden sm:h-full py-4 px-4 sm:px-6 place-items-center md:place-items-stretch">

                {/* Image Section */}
                <div className="md:col-span-1 row-span-3   w-full flex justify-center items-center">
                    <Image
                        src={product?.image || '/fallback-image.jpg'}
                        alt={product?.title || 'Product Image'}
                        width={400}
                        height={400}
                        className="object-contain  h-[300px] sm:h-[400px] w-auto rounded-lg"
                        priority={false}
                    />
                </div>

                {/* Info Section */}
                <div className="relative bg-primary/20 text-primary text-sm sm:text-base row-span-2 py-6 sm:py-10 rounded-3xl md:col-span-2 w-full h-fit md:h-full flex flex-col items-start sm:items-center justify-between gap-6 px-4 sm:px-6">

                    {/* Header Section */}
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex justify-between items-center w-full text-sm sm:text-base">
                            <span className="text-primary-200 font-medium">{product?.category}</span>
                            <span className="text-primary-200 font-semibold">${product?.price}</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl text-primary-800 font-semibold">
                    {product?.title || 'No title'}
                </h2>
                    </div>

                    {/* Description */}
                    <div className="overflow-y-auto max-h-[180px] sm:max-h-[240px] w-full">
                        <p className="text-left">{product?.description || 'No description available.'}</p>
                    </div>

                    {/* Actions */}
                    <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4">
                        <button className="bg-green-400/70 text-white w-full sm:w-auto flex gap-2 justify-center items-center px-5 py-2 rounded-full">
                            Add to Cart
                            <BsCartPlus size={20} />
                        </button>

                        <div className="bg-red-400 text-white w-full sm:w-auto flex gap-2 justify-center items-center px-5 py-2 rounded-full">
                            <FaStar size={20} className="text-yellow-300" />
                            {product.rating.rate} / {product.rating.count}
                        </div>

                        <button className="bg-blue-400/70 text-white w-full sm:w-auto flex gap-2 justify-center items-center px-5 py-2 rounded-full">
                            Favorite
                            <GoHeart size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );


}
