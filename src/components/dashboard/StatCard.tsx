
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  trend?: "up" | "down" | "neutral";
  className?: string;
  isEmpty?: boolean;
}

const StatCard = ({ title, value, icon, change, trend, className, isEmpty }: StatCardProps) => {
  return (
    <div className={cn("grid-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-iptv-text-secondary font-medium text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-1 animate-value">
            {isEmpty ? "0" : value}
          </p>
        </div>
        <div className="bg-iptv-secondary p-2 rounded-lg text-iptv-accent">
          {icon}
        </div>
      </div>
      
      {change && !isEmpty && (
        <div className="mt-4 flex items-center text-sm">
          <span
            className={cn(
              "mr-2 rounded px-1 py-0.5",
              trend === "up" && "text-green-400 bg-green-400/10",
              trend === "down" && "text-red-400 bg-red-400/10",
              trend === "neutral" && "text-orange-400 bg-orange-400/10"
            )}
          >
            {change}
          </span>
          <span className="text-iptv-text-secondary">vs. último mês</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
