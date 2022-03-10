import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KbRtVG73HMyvqUHEMSFZw8nHfpo4Z7jSO5byUr7KrZhd5qz0ABAYPIp0K4sJnkuD6cDPSzFIi2SpKzxAzMQ12Fk00GTHmUOcP'
   
    const onToken = (token) => {
        console.log('token', token);
        alert('Payment successful!')
    }
  return (
      <StripeCheckout 
      label="Pay Now"
      name="Shopping Center" 
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      />
  )
}

export default StripeCheckOutButton
