import { Button } from "@/components/ui/button";
import { Heart, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-veterinary.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-soft/20 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-warm/20 text-forest px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" fill="currentColor" />
                Trusted by 10,000+ Pet Parents
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Compassionate Care for Your
                <span className="text-primary block">Beloved Pets</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Professional veterinary services with a personal touch. We treat every pet like family and provide comprehensive care you can trust.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Schedule Visit
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Emergency Care
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">25+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-warm" fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">Emergency</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-soft" />
                </div>
                <p className="text-sm font-medium text-foreground">Same Day</p>
                <p className="text-xs text-muted-foreground">Appointments</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional veterinary care" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available Now</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Ready for your pet's visit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;