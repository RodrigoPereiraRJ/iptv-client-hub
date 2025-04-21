
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tipo para os clientes
interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: 'active' | 'inactive' | 'pending';
  expirationDate: string;
}

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-iptv-success hover:bg-green-600">Ativo</Badge>;
      case "inactive":
        return <Badge className="bg-iptv-danger hover:bg-red-600">Inativo</Badge>;
      case "pending":
        return <Badge className="bg-iptv-warning hover:bg-yellow-600">Pendente</Badge>;
      default:
        return null;
    }
  };

  return (
    <Layout title="Gerenciar Clientes">
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Buscar por nome, e-mail ou telefone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filtrar
          </Button>
          
          <Button className="bg-iptv-accent hover:bg-iptv-accent-hover flex-1 md:flex-auto">
            <Plus size={16} className="mr-2" />
            Novo Cliente
          </Button>
        </div>
      </div>
      
      {filteredClients.length === 0 ? (
        <div className="text-center py-8 text-iptv-text-secondary">
          <p>Nenhum cliente cadastrado ainda.</p>
          <p className="mt-2">Clique em "Novo Cliente" para começar!</p>
        </div>
      ) : (
        <div className="bg-iptv-primary rounded-lg border border-iptv-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-iptv-border">
                  <TableHead className="text-iptv-text">Nome</TableHead>
                  <TableHead className="text-iptv-text">Contato</TableHead>
                  <TableHead className="text-iptv-text">Plano</TableHead>
                  <TableHead className="text-iptv-text">Status</TableHead>
                  <TableHead className="text-iptv-text">Vencimento</TableHead>
                  <TableHead className="text-iptv-text w-[80px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id} className="hover:bg-iptv-secondary border-iptv-border">
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>
                      <div>
                        <div>{client.email}</div>
                        <div className="text-sm text-iptv-text-secondary">{client.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{client.plan}</TableCell>
                    <TableCell>{getStatusBadge(client.status)}</TableCell>
                    <TableCell>{client.expirationDate}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-iptv-primary border-iptv-border">
                          <DropdownMenuItem className="cursor-pointer">Editar</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Renovar</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Detalhes</DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-iptv-border" />
                          <DropdownMenuItem className="cursor-pointer text-iptv-danger">Desativar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Clients;
