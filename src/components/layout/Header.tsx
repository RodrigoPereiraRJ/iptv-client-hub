
import React from "react";
import { Bell, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-iptv-primary p-4 border-b border-iptv-border flex items-center justify-between">
      <h1 className="text-xl font-semibold">{title}</h1>
      
      <div className="flex items-center space-x-2">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            type="text"
            placeholder="Buscar..."
            className="pl-10 bg-iptv-secondary border-iptv-border"
          />
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="relative text-iptv-text-secondary hover:text-white"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="text-iptv-text-secondary hover:text-white"
        >
          <MessageSquare size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
