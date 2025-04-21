
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-iptv-secondary">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={title} />
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
