import { Button } from "@/components/ui/button";
import { Heart, Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-soft rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">PawCare</h1>
            <p className="text-xs text-muted-foreground">Animal Hospital</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">(555) 123-4567</span>
          </div>
          <Button variant="hero" size="sm" className="hidden md:inline-flex">
            Book Appointment
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;