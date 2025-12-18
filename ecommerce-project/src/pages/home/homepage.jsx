import { Header } from '../../components/header';
import axios from 'axios';
import './homepage.css'
import { useState, useEffect } from 'react';
import { ProductsGrid } from './productsgrid';

export function HomePage({ cart, loadCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const homedata = async () => {
            const response = await axios.get('http://localhost:3000/api/products');
                setProducts(response.data);
        };

        homedata();
  
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}