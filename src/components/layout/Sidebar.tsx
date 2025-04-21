
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  PackageIcon,
  DollarSign,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SidebarItem = ({
  icon: Icon,
  label,
  to,
  active,
  collapsed,
}: {
  icon: React.ElementType;
  label: string;
  to: string;
  active: boolean;
  collapsed: boolean;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-2 rounded-md mb-1 transition-all",
        active
          ? "bg-iptv-accent text-white"
          : "text-gray-300 hover:bg-iptv-primary"
      )}
    >
      <Icon size={20} className={collapsed ? "mx-auto" : "mr-3"} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Clientes", path: "/clientes" },
    { icon: PackageIcon, label: "Planos", path: "/planos" },
    { icon: DollarSign, label: "Financeiro", path: "/financeiro" },
    { icon: Bell, label: "Notificações", path: "/notificacoes" },
    { icon: BarChart, label: "Relatórios", path: "/relatorios" },
    { icon: Settings, label: "Configurações", path: "/configuracoes" },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "bg-sidebar h-screen flex flex-col transition-all duration-300 relative",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-iptv-border">
        {!collapsed && (
          <h1 className="font-bold text-xl text-iptv-accent">IPTV Hub</h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            "text-white hover:bg-iptv-primary rounded-full",
            collapsed && "mx-auto"
          )}
        >
          {collapsed ? (
            <ChevronRight size={20} />
          ) : (
            <ChevronLeft size={20} />
          )}
        </Button>
      </div>

      <div className="flex-1 py-4 px-2 overflow-y-auto custom-scrollbar">
        <nav>
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              to={item.path}
              active={location.pathname === item.path}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-iptv-border">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-iptv-accent rounded-full flex items-center justify-center text-white font-medium">
            A
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-iptv-text-secondary">Administrador</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
