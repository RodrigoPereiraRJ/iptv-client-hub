
import React from "react";

interface ClientStatusCardProps {
  active: number;
  inactive: number;
  pending: number;
  total: number;
}

const ClientStatusCard = ({ active, inactive, pending, total }: ClientStatusCardProps) => {
  // Calculate percentages for the progress bars
  const activePercent = Math.round((active / total) * 100);
  const inactivePercent = Math.round((inactive / total) * 100);
  const pendingPercent = Math.round((pending / total) * 100);

  return (
    <div className="grid-card">
      <h3 className="card-title">Status dos Clientes</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Ativos</span>
            <span className="text-sm font-medium text-iptv-success">{active}</span>
          </div>
          <div className="w-full bg-iptv-secondary rounded-full h-2.5">
            <div 
              className="bg-iptv-success h-2.5 rounded-full"
              style={{ width: `${activePercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Inativos</span>
            <span className="text-sm font-medium text-iptv-danger">{inactive}</span>
          </div>
          <div className="w-full bg-iptv-secondary rounded-full h-2.5">
            <div 
              className="bg-iptv-danger h-2.5 rounded-full"
              style={{ width: `${inactivePercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Pendentes</span>
            <span className="text-sm font-medium text-iptv-warning">{pending}</span>
          </div>
          <div className="w-full bg-iptv-secondary rounded-full h-2.5">
            <div 
              className="bg-iptv-warning h-2.5 rounded-full"
              style={{ width: `${pendingPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-iptv-border">
        <div className="flex justify-between">
          <span className="text-sm text-iptv-text-secondary">Total de Clientes</span>
          <span className="font-bold">{total}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientStatusCard;
