
import { useState, useEffect } from 'react';

export interface Client {
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

export const useLocalClients = () => {
  const [clients, setClients] = useState<Client[]>(() => {
    const savedClients = localStorage.getItem('clients');
    return savedClients ? JSON.parse(savedClients) : [];
  });

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = (client: Omit<Client, 'id'>) => {
    const newClient = {
      ...client,
      id: Date.now(),
    };
    setClients(prev => [...prev, newClient]);
  };

  const updateClient = (id: number, updatedClient: Partial<Client>) => {
    setClients(prev =>
      prev.map(client =>
        client.id === id ? { ...client, ...updatedClient } : client
      )
    );
  };

  const deleteClient = (id: number) => {
    setClients(prev => prev.filter(client => client.id !== id));
  };

  return {
    clients,
    addClient,
    updateClient,
    deleteClient,
  };
};

