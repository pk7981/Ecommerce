import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/Products.json')
      .then(response => response.json())
      .then(data => setCategories(data.productData || []))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <div className='categories'>
        {categories.map(category => (
          <Link key={category.id} to={`/category/${category.cat_name}`}>
            <div className='sub-categories'>
              <img src={category.image} alt="" />
              <h2>{category.cat_name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;
