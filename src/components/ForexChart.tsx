import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface ForexChartProps {
  pair: string;
  currentPrice: string;
  changePercent: string;
  className?: string;
  history?: number[];
}

interface ChartDataPoint {
  time: number;
  price: number;
}

const ForexChart: React.FC<ForexChartProps> = ({ pair, currentPrice, changePercent, className = '', history }) => {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    if (history && history.length > 0) {
      // Use provided history for chart
      const dataPoints: ChartDataPoint[] = history.map((price, i) => ({ time: i, price }));
      setChartData(dataPoints);
      setIsPositive(history[history.length - 1] >= history[0]);
    } else {
      // Fallback: generate synthetic data
      const generateForexData = () => {
        const basePrice = parseFloat(currentPrice);
        const change = parseFloat(changePercent.replace('%', '').replace('+', ''));
        const isPositiveChange = change >= 0;
        setIsPositive(isPositiveChange);

        // Generate 20 data points for the mini chart
        const dataPoints: ChartDataPoint[] = [];
        const volatility = basePrice * 0.001; // 0.1% volatility for forex

        for (let i = 0; i < 20; i++) {
          const progress = i / 19; // 0 to 1
          const trendFactor = (change / 100) * basePrice * progress;
          const noise = (Math.random() - 0.5) * volatility;
          const cyclical = Math.sin(i * 0.3) * volatility * 0.5;
          const price = basePrice - (change / 100) * basePrice + trendFactor + noise + cyclical;
          dataPoints.push({
            time: i,
            price: Math.max(price, basePrice * 0.995) // Prevent too much deviation
          });
        }
        setChartData(dataPoints);
      };
      generateForexData();
      // Update every 3 seconds for real-time effect
      const interval = setInterval(() => {
        generateForexData();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentPrice, changePercent, history]);

  const strokeColor = isPositive ? '#10b981' : '#ef4444';
  const gradientId = `gradient-${pair.replace('/', '')}`;

  return (
    <div className={`forex-chart-container ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={strokeColor} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={strokeColor} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="time" 
            hide 
          />
          <YAxis 
            domain={['dataMin - 0.001', 'dataMax + 0.001']} 
            hide 
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={strokeColor}
            strokeWidth={2}
            dot={false}
            activeDot={false}
            fill={`url(#${gradientId})`}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Live indicator */}
      <div className="forex-chart-indicator">
        <div className="forex-chart-pulse" style={{ backgroundColor: strokeColor }} />
      </div>
    </div>
  );
};

export default ForexChart;