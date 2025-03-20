import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Slider } from '@/components/ui/slider';

const RevenueForecasting = () => {
  const [mediaSpend, setMediaSpend] = useState(5000);
  const [ltv, setLtv] = useState(8.5);
  const [forecastData, setForecastData] = useState<any[]>([]);

  // Generate forecast data based on inputs
  useEffect(() => {
    const newData = [];
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    const baseUsers = 12000;
    const growthRate = 0.08 + (mediaSpend / 20000) * 0.06; // Growth affected by media spend

    let currentUsers = baseUsers;
    for (let i = 0; i < months.length; i++) {
      currentUsers = Math.round(currentUsers * (1 + growthRate));
      const revenue = Math.round(currentUsers * ltv);
      const androidRevenue = Math.round(revenue * 0.7);
      const iosRevenue = Math.round(revenue * 0.3);
      
      newData.push({
        month: months[i],
        android: androidRevenue,
        ios: iosRevenue,
        total: revenue
      });
    }
    
    setForecastData(newData);
  }, [mediaSpend, ltv]);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: $${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-6 bg-card p-6 rounded-lg border border-border">
      <h3 className="text-lg font-slab font-medium mb-4">Revenue Forecast (Next 6 Months)</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-muted-foreground">Monthly Media Spend</label>
              <span className="text-sm font-medium">${mediaSpend.toLocaleString()}</span>
            </div>
            <Slider
              defaultValue={[5000]}
              max={15000}
              min={1000}
              step={500}
              onValueChange={(value) => setMediaSpend(value[0])}
              className="my-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$1,000</span>
              <span>$15,000</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-muted-foreground">Average User LTV (USD)</label>
              <span className="text-sm font-medium">${ltv.toFixed(2)}</span>
            </div>
            <Slider
              defaultValue={[8.5]}
              max={15}
              min={5}
              step={0.5}
              onValueChange={(value) => setLtv(value[0])}
              className="my-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$5.00</span>
              <span>$15.00</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Projected Monthly Revenue</span>
            <span className="text-sm font-medium text-green-600">
              ${forecastData.length > 0 ? forecastData[forecastData.length - 1].total.toLocaleString() : "0"}
            </span>
          </div>
          
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Projected 6-Month Revenue</span>
            <span className="text-sm font-medium text-green-600">
              ${forecastData.reduce((acc, item) => acc + item.total, 0).toLocaleString()}
            </span>
          </div>
          
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Estimated ROI</span>
            <span className="text-sm font-medium text-green-600">
              {forecastData.length > 0 
                ? `${Math.round((forecastData.reduce((acc, item) => acc + item.total, 0) / (mediaSpend * 6)) * 100)}%`
                : "0%"}
            </span>
          </div>
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={forecastData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} />
            <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
            <Line type="monotone" dataKey="total" name="Total" stroke="#9333EA" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <span className="font-medium">Forecast Notes:</span> This projection is based on your current user base, historical conversion rates, and specified media spend. Actual results may vary based on market conditions and user engagement.
        </p>
      </div>
    </div>
  );
};

export default RevenueForecasting; 