





export const fetchProducts = async ({ productId = null } = {}) => {

 const baseUrl = 'https://fakestoreapi.com/products';
  let url = baseUrl;

  if (productId) {
    url = `${baseUrl}/${productId}`;
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw error; 
  }
};