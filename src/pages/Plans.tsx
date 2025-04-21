
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Tv, Monitor, Tablet, Calendar } from "lucide-react";

// Dados de exemplo para planos
const plansData = [
  {
    id: 1,
    name: "Básico",
    price: "R$ 30,00",
    duration: "Mensal",
    connections: 1,
    features: [
      "8.000 canais",
      "SD/HD",
      "Guia de programação",
      "Compatível com Smart TVs"
    ],
    popular: false,
    color: "#0F766E"
  },
  {
    id: 2,
    name: "Standard",
    price: "R$ 50,00",
    duration: "Mensal",
    connections: 2,
    features: [
      "10.000 canais",
      "SD/HD/FHD",
      "Guia de programação",
      "VOD incluído",
      "Compatível com todos os dispositivos"
    ],
    popular: true,
    color: "#0D9488"
  },
  {
    id: 3,
    name: "Premium",
    price: "R$ 80,00",
    duration: "Mensal",
    connections: 3,
    features: [
      "12.000 canais",
      "SD/HD/FHD/4K",
      "Guia de programação",
      "VOD incluído",
      "Canais premium",
      "Compatível com todos os dispositivos"
    ],
    popular: false,
    color: "#14B8A6"
  },
  {
    id: 4,
    name: "Família",
    price: "R$ 120,00",
    duration: "Mensal",
    connections: 5,
    features: [
      "12.000 canais",
      "SD/HD/FHD/4K",
      "Guia de programação",
      "VOD incluído",
      "Canais premium",
      "Canais PPV",
      "Compatível com todos os dispositivos"
    ],
    popular: false,
    color: "#2DD4BF"
  }
];

const Plans = () => {
  return (
    <Layout title="Gerenciar Planos">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Planos Disponíveis</h2>
        <Button className="bg-iptv-accent hover:bg-iptv-accent-hover">
          <Plus size={16} className="mr-2" />
          Novo Plano
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plansData.map((plan) => (
          <Card key={plan.id} className="bg-iptv-primary border-iptv-border overflow-hidden relative">
            {plan.popular && (
              <div 
                className="absolute top-0 right-0 bg-iptv-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
                style={{ borderBottomLeftRadius: '0.5rem' }}
              >
                MAIS VENDIDO
              </div>
            )}
            
            <CardHeader className="pb-3" style={{ borderBottom: `2px solid ${plan.color}` }}>
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription className="text-iptv-text-secondary flex items-center">
                <Calendar size={14} className="mr-1" />
                {plan.duration}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-4">
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-iptv-text-secondary ml-2">/{plan.duration.toLowerCase()}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <Users size={18} className="mr-2 text-iptv-accent" />
                <span>{plan.connections} {plan.connections > 1 ? 'conexões simultâneas' : 'conexão'}</span>
              </div>
              
              <div className="space-y-2 mt-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: plan.color }}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1">Editar</Button>
              <Button className="flex-1" style={{ backgroundColor: plan.color }}>Detalhes</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Adicionar Credenciais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-iptv-primary p-5 rounded-lg border border-iptv-border flex flex-col items-center text-center">
            <div className="p-3 bg-blue-500/10 rounded-full mb-4">
              <Tv size={24} className="text-blue-500" />
            </div>
            <h3 className="font-medium mb-2">Teste Grátis</h3>
            <p className="text-sm text-iptv-text-secondary mb-4">
              Conceda 24h de acesso gratuito para potenciais clientes.
            </p>
            <Badge className="bg-blue-500">3 Dias</Badge>
          </div>
          
          <div className="bg-iptv-primary p-5 rounded-lg border border-iptv-border flex flex-col items-center text-center">
            <div className="p-3 bg-iptv-accent/10 rounded-full mb-4">
              <Monitor size={24} className="text-iptv-accent" />
            </div>
            <h3 className="font-medium mb-2">Credencial Normal</h3>
            <p className="text-sm text-iptv-text-secondary mb-4">
              Adicione uma nova credencial para um plano padrão.
            </p>
            <Badge className="bg-iptv-accent">Padrão</Badge>
          </div>
          
          <div className="bg-iptv-primary p-5 rounded-lg border border-iptv-border flex flex-col items-center text-center">
            <div className="p-3 bg-purple-500/10 rounded-full mb-4">
              <Tablet size={24} className="text-purple-500" />
            </div>
            <h3 className="font-medium mb-2">Credencial Premium</h3>
            <p className="text-sm text-iptv-text-secondary mb-4">
              Adicione uma nova credencial para um plano premium.
            </p>
            <Badge className="bg-purple-500">Premium</Badge>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plans;
