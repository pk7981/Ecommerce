import React, { useState, useEffect } from 'react';

const Groceries = () => {
  const [groceriesItems, setGroceriesItems] = useState([]);

  useEffect(() => {
    fetch('/Products.json') 
      .then(response => response.json())
      .then(data => {
        const groceriesCategory = data.productData.filter(item => item.cat_name === 'groceries');
        if (groceriesCategory.length > 0) {
          setGroceriesItems(groceriesCategory[0].items || []);
        }
      })
      .catch(error => console.error('Error fetching groceries items:', error));
  }, []);

  return (
    <div>
      <h2>Groceries</h2>
      <ul>
        {groceriesItems.map(category => (
          <div key={category.cat_name}>
            <h3>{category.cat_name}</h3>
            <ul>
              {category.products.map(product => (
                <li key={product.productName}>
                  <p>{product.productName}</p>
                  <p>Price: {product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Groceries;
