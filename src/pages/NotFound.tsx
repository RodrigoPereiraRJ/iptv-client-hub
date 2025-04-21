
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-iptv-secondary">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-6xl font-bold text-iptv-accent mb-4">404</h1>
        <p className="text-xl text-iptv-text mb-8">Oops! Página não encontrada</p>
        <p className="text-iptv-text-secondary mb-8">
          A página que você está procurando pode ter sido removida, renomeada ou
          está temporariamente indisponível.
        </p>
        <Link to="/">
          <Button className="bg-iptv-accent hover:bg-iptv-accent-hover">
            Voltar para o Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
