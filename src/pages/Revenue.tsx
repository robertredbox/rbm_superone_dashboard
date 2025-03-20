import React from 'react';
import Layout from '@/components/layout/Layout';
import RevenueChart from '@/components/revenue/RevenueChart';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Revenue = () => {
  return (
    <Layout title="Revenue" subtitle="Track your app's revenue and financial metrics">
      <FontLinks />
      <RevenueChart />
    </Layout>
  );
};

export default Revenue; 