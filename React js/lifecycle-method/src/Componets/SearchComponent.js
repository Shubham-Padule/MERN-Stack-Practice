// SearchComponent.js
import React, { useState, useEffect } from 'react';
import { Dropdown, Table } from 'react-bootstrap';

function SearchComponent() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch categories from API
        fetch('https://dummyjson.com/products/categories') // Replace with your API endpoint
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            // Fetch products for the selected category
            fetch(`'https://dummyjson.com/products/categories=${selectedCategory}`) // Replace with your API endpoint
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        }
    }, [selectedCategory]);

    return (
        <div className="container">
            <Dropdown onSelect={setSelectedCategory}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedCategory ? selectedCategory : 'Select Category'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map(category => (
                        <Dropdown.Item key={category.id} eventKey={category.name}>
                            {category.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            {products.length > 0 && (
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img src={product.thumbnail} alt={product.title} style={{ width: '100px', height: '100px' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default SearchComponent;
