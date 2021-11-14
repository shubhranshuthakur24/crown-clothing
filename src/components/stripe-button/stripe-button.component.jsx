import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStipe = price * 100;
    const publishableKey = 'pk_test_51Jq8t0SGT5XCwAJ4F5gapcPbdzrPlmUTVx7QkwJSVWGSJwG7SE6X3OPzFMVIorAZ5ab4k6NnSTG90fPOKBLpDz9Q007J7Ohqui';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name= 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/iCUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStipe }
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
