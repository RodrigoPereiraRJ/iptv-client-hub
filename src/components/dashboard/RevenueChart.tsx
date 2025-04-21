
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Dados de exemplo para o gráfico
const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Fev", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Abr", revenue: 2780 },
  { name: "Mai", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
  { name: "Ago", revenue: 4000 },
  { name: "Set", revenue: 2500 },
  { name: "Out", revenue: 6000 },
  { name: "Nov", revenue: 7000 },
  { name: "Dez", revenue: 9800 },
];

const RevenueChart = () => {
  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  return (
    <div className="grid-card">
      <h3 className="card-title">Receita Mensal</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#94A3B8" }} 
              axisLine={{ stroke: "#334155" }} 
              tickLine={{ stroke: "#334155" }} 
            />
            <YAxis 
              tickFormatter={formatCurrency} 
              tick={{ fill: "#94A3B8" }} 
              axisLine={{ stroke: "#334155" }} 
              tickLine={{ stroke: "#334155" }} 
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), "Receita"]}
              contentStyle={{ 
                backgroundColor: "#1E293B", 
                borderColor: "#334155",
                borderRadius: "0.375rem"
              }}
              labelStyle={{ color: "#F8FAFC" }}
              itemStyle={{ color: "#14B8A6" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#14B8A6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
