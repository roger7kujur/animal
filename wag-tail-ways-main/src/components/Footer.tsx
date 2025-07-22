import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-soft rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PawCare</h3>
                <p className="text-sm text-primary-foreground/70">Animal Hospital</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing compassionate veterinary care for your beloved pets since 1998. Your pet's health and happiness is our mission.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Veterinary Care</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Emergency Services</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Pet Grooming</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Pet Boarding</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Preventive Care</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Pet Pharmacy</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Our Team</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Appointments</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Pet Health Resources</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Client Portal</li>
              <li className="hover:text-primary-foreground transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-warm" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-warm" />
                <span className="text-primary-foreground/80">info@pawcare.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-warm mt-0.5" />
                <span className="text-primary-foreground/80">123 Pet Care Lane<br />Veterinary City, VC 12345</span>
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">24/7 Emergency Available</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 PawCare Animal Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary-foreground transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;