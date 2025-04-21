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
import { Search, Filter, MoreHorizontal, Trash2 } from "lucide-react";
import ClientFormModal from "@/components/clients/ClientFormModal";
import EditClientModal from "@/components/clients/EditClientModal";
import type { ClientFormValues } from "@/components/clients/ClientFormModal";
import type { EditClientFormValues } from "@/components/clients/EditClientModal";
import { useLocalClients } from "@/hooks/useLocalClients";
import { useToast } from "@/hooks/use-toast";

interface Client {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  server: string;
  plan: string;
  status: 'active' | 'inactive' | 'pending';
  expirationDate: string;
}

const Clients = () => {
  const { clients, addClient, updateClient, deleteClient } = useLocalClients();
  const [searchTerm, setSearchTerm] = useState("");
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);
  const { toast } = useToast();
  
  const filteredClients = clients.filter(client => 
    client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  const handleNewClient = (data: ClientFormValues) => {
    const newClient = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: Number(data.age),
      phone: data.phone,
      city: data.city,
      state: data.state,
      country: data.country,
      server: data.server,
      email: "",
      plan: "",
      status: "pending" as const,
      expirationDate: "",
    };

    addClient(newClient);
    toast({
      title: "Cliente cadastrado",
      description: "O novo cliente foi adicionado com sucesso!"
    });
  };

  const handleEditClient = (id: number, data: EditClientFormValues) => {
    updateClient(id, {
      ...data,
      age: Number(data.age),
    });
    
    toast({
      title: "Cliente atualizado",
      description: "Os dados do cliente foram atualizados com sucesso!"
    });
  };

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

  const handleDeleteConfirm = () => {
    if (clientToDelete) {
      deleteClient(clientToDelete.id);
      toast({
        title: "Cliente removido",
        description: "O cliente foi removido com sucesso!"
      });
      setClientToDelete(null);
    }
  };

  return (
    <Layout title="Gerenciar Clientes">
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Buscar por nome ou telefone..."
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
          
          <ClientFormModal onSubmit={handleNewClient} />
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
                  <TableHead className="text-iptv-text">Localização</TableHead>
                  <TableHead className="text-iptv-text">Servidor</TableHead>
                  <TableHead className="text-iptv-text">Status</TableHead>
                  <TableHead className="text-iptv-text w-[80px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id} className="hover:bg-iptv-secondary border-iptv-border">
                    <TableCell>
                      <div>
                        <div className="font-medium">{`${client.firstName} ${client.lastName}`}</div>
                        <div className="text-sm text-iptv-text-secondary">{client.age} anos</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{client.phone}</div>
                        {client.email && <div className="text-sm text-iptv-text-secondary">{client.email}</div>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div>{`${client.city}, ${client.state}`}</div>
                        <div className="text-sm text-iptv-text-secondary">{client.country}</div>
                      </div>
                    </TableCell>
                    <TableCell>{client.server}</TableCell>
                    <TableCell>{getStatusBadge(client.status)}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-iptv-primary border-iptv-border">
                          <EditClientModal
                            client={client}
                            onSubmit={(data) => handleEditClient(client.id, data)}
                            trigger={
                              <DropdownMenuItem className="cursor-pointer" onSelect={(e) => e.preventDefault()}>
                                Editar
                              </DropdownMenuItem>
                            }
                          />
                          <DropdownMenuItem className="cursor-pointer">Renovar</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Detalhes</DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-iptv-border" />
                          <DropdownMenuItem 
                            className="cursor-pointer text-iptv-danger flex items-center gap-2"
                            onClick={() => setClientToDelete(client)}
                          >
                            <Trash2 size={16} />
                            Excluir
                          </DropdownMenuItem>
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

      <AlertDialog open={!!clientToDelete} onOpenChange={() => setClientToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Você tem certeza que deseja excluir o cliente{" "}
              <span className="font-semibold">
                {clientToDelete ? `${clientToDelete.firstName} ${clientToDelete.lastName}` : ""}
              </span>?
              <br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setClientToDelete(null)}>Cancelar</AlertDialogCancel>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Excluir
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default Clients;
