
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Dados de exemplo para o gráfico de barras
const data = [
  { name: "Jan", novos: 20, renovacoes: 15 },
  { name: "Fev", novos: 15, renovacoes: 20 },
  { name: "Mar", novos: 25, renovacoes: 18 },
  { name: "Abr", novos: 22, renovacoes: 25 },
  { name: "Mai", novos: 30, renovacoes: 22 },
  { name: "Jun", novos: 28, renovacoes: 30 },
];

const ClientGrowthChart = () => {
  return (
    <div className="grid-card">
      <h3 className="card-title">Crescimento de Clientes</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "#94A3B8" }} 
              axisLine={{ stroke: "#334155" }} 
              tickLine={{ stroke: "#334155" }} 
            />
            <YAxis 
              tick={{ fill: "#94A3B8" }} 
              axisLine={{ stroke: "#334155" }} 
              tickLine={{ stroke: "#334155" }} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#1E293B", 
                borderColor: "#334155",
                borderRadius: "0.375rem"
              }}
              labelStyle={{ color: "#F8FAFC" }}
            />
            <Bar dataKey="novos" name="Novos Clientes" fill="#14B8A6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="renovacoes" name="Renovações" fill="#0D9488" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClientGrowthChart;
