import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Categories.css'

const CategoryPage = ({ addToCart }) => {
    const { catName } = useParams();
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        fetch('/Products.json')
            .then(response => response.json())
            .then(data => {
                const category = data.productData.find(category => category.cat_name === catName);
                if (category && category.items) {
                    setCategoryItems(category.items);
                } else {
                    setCategoryItems([]);
                }
            })
            .catch(error => console.error('Error fetching category items:', error));
    }, [catName]);

    return (
        <div>
            <h1>{catName}</h1>
            {categoryItems.map(item => (
                <p key={item.cat_name}>
                    <div className="items">
                        <h2>{item.cat_name}</h2>
                        <div className='products'>
                            {item.products.map(product => (
                                <div key={product.productName} className='sub-products'>
                                    <img src={product.catImg} alt={product.productName} />
                                    <div className="pro-details">
                                        <h4>Product Name: {product.productName}</h4>
                                        <h5>Price: {product.price}</h5>
                                    </div>
                                    <button onClick={() => addToCart( product.productName, product.price,product.catImg)}>Add To Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </p>
            ))}
        </div>
    );
}

export default CategoryPage;
