import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css'; 

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data.products);
      })
      .catch(error => {
        console.error('Error fetching product data', error);
      });
  }, []);

  return (
    <div className='Dashboard'>
      <h2>Product List</h2>
      {products.map(product => (
        <div className='product' key={product.id}>
          <div className='vote-buttons'>
            <button><span className='arrow'>&#9650;</span></button>
            <div className='votes'>1</div>
            <button><span className='arrow'>&#9660;</span></button>
          </div>
          <img src={product.thumbnail} alt={product.title} />
          <div className='product-details'>
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p className='views'>{product.stock} views | Voted by 1 People</p>
            <a href='#' className='watch-trailer'>Watch Trailer</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
