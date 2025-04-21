
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Subscription {
  id: number;
  client: string;
  plan: string;
  expirationDate: string;
  status: 'today' | 'tomorrow' | 'expired';
}

const ExpiringSubscriptions = () => {
  const [subscriptions, setSubscriptions] = React.useState<Subscription[]>([]);

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
      
      {subscriptions.length === 0 ? (
        <div className="text-center py-8 text-iptv-text-secondary">
          <p>Nenhuma assinatura a vencer no momento.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {subscriptions.map((subscription) => (
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
      )}
    </div>
  );
};

export default ExpiringSubscriptions;
