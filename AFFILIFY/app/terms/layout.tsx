// app/checkout/layout.tsx
import React from 'react';

export const metadata = {
  title: 'Checkout Page',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* You can add a specific layout for the checkout page here */}
          {children}
        </div>
      </body>
    </html>
  );
}
