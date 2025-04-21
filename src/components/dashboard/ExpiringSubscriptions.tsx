
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Dados de exemplo para assinaturas a vencer
const expiringSubscriptions = [
  {
    id: 1,
    client: "João Silva",
    plan: "Premium Mensal",
    expirationDate: "2025-04-22",
    status: "today"
  },
  {
    id: 2,
    client: "Maria Oliveira",
    plan: "Família Trimestral",
    expirationDate: "2025-04-22",
    status: "today"
  },
  {
    id: 3,
    client: "Carlos Santos",
    plan: "Standard Mensal",
    expirationDate: "2025-04-23",
    status: "tomorrow"
  },
  {
    id: 4,
    client: "Ana Costa",
    plan: "Premium Anual",
    expirationDate: "2025-04-23",
    status: "tomorrow"
  },
  {
    id: 5,
    client: "Pedro Ferreira",
    plan: "Basic Mensal",
    expirationDate: "2025-04-20",
    status: "expired"
  }
];

const ExpiringSubscriptions = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "today":
        return <Badge className="bg-amber-500 hover:bg-amber-600">Hoje</Badge>;
      case "tomorrow":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Amanhã</Badge>;
      case "expired":
        return <Badge className="bg-red-500 hover:bg-red-600">Atrasado</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="grid-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title mb-0">Assinaturas a Vencer</h3>
        <Link to="/clientes">
          <Button variant="ghost" size="sm" className="text-iptv-accent hover:text-iptv-accent-hover">
            Ver Todos
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </Link>
      </div>
      
      <div className="space-y-3">
        {expiringSubscriptions.map((subscription) => (
          <div 
            key={subscription.id}
            className="flex items-center justify-between p-3 rounded-md bg-iptv-secondary border border-iptv-border"
          >
            <div>
              <h4 className="font-medium">{subscription.client}</h4>
              <p className="text-sm text-iptv-text-secondary">{subscription.plan}</p>
            </div>
            <div className="flex items-center">
              {getStatusBadge(subscription.status)}
              <Button variant="outline" size="sm" className="ml-3 bg-iptv-primary">
                Renovar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpiringSubscriptions;
