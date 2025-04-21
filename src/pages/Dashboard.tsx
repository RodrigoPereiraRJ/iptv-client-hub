
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
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total de Clientes"
          value="248"
          icon={<Users size={24} />}
          change="+14%"
          trend="up"
        />
        <StatCard
          title="Planos Ativos"
          value="174"
          icon={<PackageIcon size={24} />}
          change="+5%"
          trend="up"
        />
        <StatCard
          title="Receita Mensal"
          value="R$ 12.450,00"
          icon={<DollarSign size={24} />}
          change="+10%"
          trend="up"
        />
        <StatCard
          title="Renovações Pendentes"
          value="12"
          icon={<AlertTriangle size={24} />}
          change="-3"
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <ClientStatusCard
            active={174}
            inactive={45}
            pending={29}
            total={248}
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
