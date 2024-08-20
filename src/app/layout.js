import '../styles/globals.css'; // Import global styles

export const metadata = {
  title: 'Product Search',
  description: 'Search for products from Amazon',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;