import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Droplets, Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-glass-bg/95 backdrop-blur-md border-b border-glass-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Droplets className="h-8 w-8 text-primary group-hover:text-primary-light transition-colors" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary-light/30 transition-all"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AquaPure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/products") ? "text-primary" : "text-foreground"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:shadow-premium transition-all" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-glass-border bg-glass-bg/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/products") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-glass-border">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button size="sm" className="bg-gradient-primary" asChild>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;