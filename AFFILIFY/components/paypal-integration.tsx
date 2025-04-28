'use client'

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PayPalIntegrationProps {
  plan: string;
  price: string;
}

export default function PayPalIntegration({ plan, price }: PayPalIntegrationProps) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const router = useRouter();

  // Convert price to number and ensure it's valid
  const numericPrice = parseFloat(price);
  const validPrice = !isNaN(numericPrice) && numericPrice > 0 ? numericPrice : 10;

  return (
    <div className="w-full">
      {paymentError && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-md mb-4">
          {paymentError}
        </div>
      )}
      
      {paymentSuccess ? (
        <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-md mb-4">
          <p className="font-semibold">Payment Successful!</p>
          <p className="text-sm mt-2">Thank you for subscribing to AFFILIFY {plan} plan.</p>
          <button
            onClick={() => router.push('/dashboard')}
            className="mt-4 w-full bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] text-white py-2 px-4 rounded transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <PayPalScriptProvider options={{ 
          "client-id": "test", // Replace with your actual client ID in production
          currency: "USD",
          intent: "subscription"
        }}>
          <PayPalButtons
            style={{ 
              layout: "vertical",
              color: "blue",
              shape: "rect",
              label: "subscribe"
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: validPrice.toString(),
                      currency_code: "USD"
                    },
                    description: `AFFILIFY ${plan} Plan Subscription`
                  }
                ]
              });
            }}
            onApprove={(data, actions) => {
              // This is called when the payment is approved but not yet completed
              return actions.order.capture().then(function(details) {
                // This is called when the payment is completed
                console.log('Transaction completed by ' + details.payer.name.given_name);
                setPaymentSuccess(true);
                // In a real app, you would call your backend API to create the subscription
              });
            }}
            onError={(err) => {
              console.error('PayPal error:', err);
              setPaymentError('There was an error processing your payment. Please try again.');
            }}
          />
        </PayPalScriptProvider>
      )}
      
      <div className="mt-4 text-center text-xs text-[var(--text-secondary)]">
        <p>Secure payment processing by PayPal</p>
      </div>
    </div>
  );
}
