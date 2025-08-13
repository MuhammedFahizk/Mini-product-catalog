"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Div, Card, SearchBar, ErrorComponent } from '../Components/common';
import { fetchProducts } from '../utils/api';
import { CardSkelten } from '../Components/sklten/CardSkelten';
import EmptyState from './common/EmptyState';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchParams = useSearchParams();

    const queryFromURL = searchParams.get('query') || '';
    const [query, setQuery] = useState(queryFromURL);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setAllProducts(data);

                if (queryFromURL) {
                    const filtered = data.filter(product =>
                        product.title.toLowerCase().includes(queryFromURL.toLowerCase())
                    );
                    setProducts(filtered);
                } else {
                    setProducts(data);
                }

            } catch (error) {
                setError(error.message || 'Failed to load products. Please try again.');
                console.error('Error fetching products:', error.message);
            } finally {
                setLoading(false);
            }
        };

        setTimeout(loadProducts, 400);
    }, [queryFromURL]);

   

    return (
        <Div className="px-2 py-6 space-y-8">
            <div className="w-full justify-end flex">
                <SearchBar query={query} setQuery={setQuery}  />
            </div>

            {error && (
                <ErrorComponent message={error} />
            )}
            {loading && !error && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <CardSkelten key={idx} />
                    ))}
                </div>
            )}

            {!loading && !error && products.length === 0 && (
                <EmptyState message="No products found." />
            )}

            {!loading && !error && products.length > 0 && (
                <div className="grid  grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            )}
        </Div>
    );
};

export default Store;
