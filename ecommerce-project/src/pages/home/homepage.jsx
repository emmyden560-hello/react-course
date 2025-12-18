import { Header } from '../../components/header';
import axios from 'axios';
import './homepage.css'
import { useState, useEffect } from 'react';
import { ProductsGrid } from './productsgrid';

export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/products').then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products}/>
            </div>
        </>
    );
}