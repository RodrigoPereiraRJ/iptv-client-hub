
import React from "react";
import Layout from "@/components/layout/Layout";
import StatCard from "@/components/dashboard/StatCard";
import ClientStatusCard from "@/components/dashboard/ClientStatusCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ClientGrowthChart from "@/components/dashboard/ClientGrowthChart";
import ExpiringSubscriptions from "@/components/dashboard/ExpiringSubscriptions";
import PlanDistribution from "@/components/dashboard/PlanDistribution";

import { 
  Users, 
  PackageIcon, 
  DollarSign, 
  AlertTriangle 
} from "lucide-react";

const Dashboard = () => {
  // Since we don't have any clients yet, we'll set everything to empty state
  const isEmpty = true;
  
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total de Clientes"
          value="0"
          icon={<Users size={24} />}
          isEmpty={isEmpty}
        />
        <StatCard
          title="Planos Ativos"
          value="0"
          icon={<PackageIcon size={24} />}
          isEmpty={isEmpty}
        />
        <StatCard
          title="Receita Mensal"
          value="R$ 0,00"
          icon={<DollarSign size={24} />}
          isEmpty={isEmpty}
        />
        <StatCard
          title="Renovações Pendentes"
          value="0"
          icon={<AlertTriangle size={24} />}
          isEmpty={isEmpty}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <ClientStatusCard
            active={0}
            inactive={0}
            pending={0}
            total={0}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ClientGrowthChart />
        </div>
        <div>
          <PlanDistribution />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ExpiringSubscriptions />
      </div>
    </Layout>
  );
};

export default Dashboard;
