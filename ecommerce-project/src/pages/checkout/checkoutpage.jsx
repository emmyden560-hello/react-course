import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { OrderSummary } from './orderSummary'
import { PaymentSummary } from './paymentsummary'
import axios from 'axios'
import './checkout-header.css'
import './checkoutpage.css'

export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
            setDeliveryOptions(response.data);
        });

        axios.get('http://localhost:3000/api/payment-summary').then((response) => {
            setPaymentSummary(response.data)
        });
    }, [cart])

    return (
        <>
            <title>Checkout</title>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">3 items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    )
}