"use client";
import React from 'react';
import { Div } from '.';
import Image from 'next/image';
import { BsCartPlus } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export const Card = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Div className="relative flex flex-col justify-between bg-gradient-to-bl from-secondary-light/20 dark:from-dark-bg dark:to-dark-bg/20 to-secondary-light/5 rounded-2xl h-full hover:shadow-lg transition-shadow duration-300">
        
        {/* Action Icons */}
        <Div className="absolute top-2 right-2 flex gap-2 z-10">
          <button className="bg-primary-light dark:bg-primary-dark shadow-lg p-2 rounded-lg text-white">
            <BsCartPlus size={20} />
          </button>
          <button className="bg-primary-light dark:bg-primary-dark shadow-lg p-2 rounded-lg text-white">
            <GoHeart size={20} />
          </button>
        </Div>

        {/* Product Image */}
        <div className="w-full h-48 sm:h-56 flex justify-center items-center px-4 pt-4">
          <Image
            src={product?.image || '/fallback-image.jpg'}
            alt={product?.title || 'Product Image'}
            width={400}
            height={400}
            className="object-contain max-h-full"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-2 px-4 pb-4">
          <h2 className="text-sm sm:text-base font-semibold text-primary-200 truncate">
            {product?.title || 'No Title'}
          </h2>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-2 text-sm">
            {/* Rating */}
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-light dark:bg-secondary-dark text-gray-900 text-xs sm:text-sm">
              <FaStar size={14} className="text-yellow-300" />
              <span>{product.rating.rate} / {product.rating.count}</span>
            </div>

            {/* Price */}
            <div className="bg-light/20 text-primary-200 font-semibold px-3 py-1 rounded-full w-fit text-xs sm:text-sm">
              ${product?.price || 'No Price'}
            </div>
          </div>
        </div>
      </Div>
    </Link>
  );
};
