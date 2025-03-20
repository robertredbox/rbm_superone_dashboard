import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';

const RevenueForecasting = () => {
  // Default values from the screenshot
  const [mediaSpend, setMediaSpend] = useState(25000);
  const [ltv, setLtv] = useState(2.50);
  const [projectedInstalls, setProjectedInstalls] = useState(22935);
  const [projectedRevenue, setProjectedRevenue] = useState(57338);
  const [roi, setRoi] = useState(229.4);
  const [cpi, setCpi] = useState(1.09); // Cost Per Install

  useEffect(() => {
    // Calculate projected installs based on media spend and estimated CPI
    const estimatedInstalls = Math.round(mediaSpend / cpi);
    setProjectedInstalls(estimatedInstalls);
    
    // Calculate projected revenue based on installs and LTV
    const estimatedRevenue = Math.round(estimatedInstalls * ltv);
    setProjectedRevenue(estimatedRevenue);
    
    // Calculate ROI
    const estimatedRoi = ((estimatedRevenue - mediaSpend) / mediaSpend) * 100;
    setRoi(parseFloat(estimatedRoi.toFixed(1)));
  }, [mediaSpend, ltv, cpi]);

  return (
    <div className="mb-6 bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Revenue Forecasting</h2>
      
      <div className="mb-10">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">Media Spend (USD)</span>
          <span className="text-lg font-medium text-indigo-600">${mediaSpend.toLocaleString()}</span>
        </div>
        <Slider
          defaultValue={[25000]}
          max={100000}
          min={5000}
          step={1000}
          onValueChange={(value) => setMediaSpend(value[0])}
          className="my-4"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$5,000</span>
          <span>$100,000</span>
        </div>
      </div>
      
      <div className="mb-10">
        <div className="flex justify-between mb-2">
          <span className="text-lg font-medium">User Lifetime Value (USD)</span>
          <span className="text-lg font-medium text-indigo-600">${ltv.toFixed(2)}</span>
        </div>
        <Slider
          defaultValue={[2.50]}
          max={10.00}
          min={0.50}
          step={0.25}
          onValueChange={(value) => setLtv(value[0])}
          className="my-4"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0.50</span>
          <span>$10.00</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="uppercase text-lg text-blue-800 font-medium mb-4">PROJECTED INSTALLS</h3>
          <div className="text-5xl font-semibold text-blue-900 mb-2">
            {projectedInstalls.toLocaleString()}
          </div>
          <div className="text-blue-600">
            Based on Avg CPI: ${cpi.toFixed(2)}
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="uppercase text-lg text-green-800 font-medium mb-4">PROJECTED REVENUE</h3>
          <div className="text-5xl font-semibold text-green-900 mb-2">
            ${projectedRevenue.toLocaleString()}
          </div>
          <div className="text-green-600">
            ROI: {roi}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueForecasting; 