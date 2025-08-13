"use client"
import React, { useEffect, useState } from 'react';
import { Div, Card } from '../Components/common'; // Assuming Div is a styled component
import { fetchProducts } from '../utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched products:', data);
        setProducts(data);
        setLoading(false); 
      } catch (error) {
        setError('Failed to load products. Please try again.');
        setLoading(false);
        console.error('Error:', error.message);
      }
    };
    loadProducts();
  }, []); 

  if (loading) return <Div>Loading...</Div>;
  if (error) return <Div>{error}</Div>;

  return (
    <Div className={ ' px-2 '}>
      
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
          <div className='  grid grid-cols-2 md:grid-cols-4  gap-2'>
            {products.map(product => (
            <Div key={product.id}>
              <Card  product={product}/>
            </Div>
          ))}
          </div>
      )}


    </Div>
  );
};

export default Home;