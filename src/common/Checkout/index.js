import React, { Component } from 'react'
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from './CheckoutForm';

export default class Checkout extends Component {
    render() {
        return (
            <StripeProvider apiKey='pk_test_51HiAyvBu8aPdLWzIv2MYeCs4twzHDNUzMQlqGa7vYezD8gBZM6NO85tj2QFJa4HZu2lApopBD1kxCwyggDZ0nANc00nrYsHui7'>
                <div>
                    <h4>Card Details</h4>
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </div>
            </StripeProvider>
        )
    }
}
