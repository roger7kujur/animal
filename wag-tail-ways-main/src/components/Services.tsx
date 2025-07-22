import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Scissors, Home, Heart, Shield, Pill } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Comprehensive health examinations, diagnostics, and treatment plans tailored to your pet's needs.",
    features: ["Health Check-ups", "Vaccinations", "Diagnostic Testing", "Surgery"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    description: "Professional grooming services to keep your pet looking and feeling their best.",
    features: ["Full Grooming", "Nail Trimming", "Dental Care", "Flea Treatment"],
    color: "text-warm",
    bgColor: "bg-warm/10"
  },
  {
    icon: Home,
    title: "Pet Boarding",
    description: "Safe, comfortable boarding facility with 24/7 supervision and personalized care.",
    features: ["24/7 Supervision", "Climate Controlled", "Exercise Areas", "Medical Care"],
    color: "text-soft",
    bgColor: "bg-soft/10"
  },
  {
    icon: Heart,
    title: "Emergency Care",
    description: "Round-the-clock emergency services for urgent medical situations and critical care.",
    features: ["24/7 Emergency", "Critical Care", "Trauma Surgery", "ICU Services"],
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive healthcare programs to prevent illness and maintain optimal pet health.",
    features: ["Wellness Plans", "Parasite Prevention", "Nutrition Counseling", "Behavioral Support"],
    color: "text-nature",
    bgColor: "bg-nature/10"
  },
  {
    icon: Pill,
    title: "Pet Pharmacy",
    description: "On-site pharmacy with prescription medications and health supplements for your pet.",
    features: ["Prescription Meds", "Supplements", "Flea & Tick", "Special Diets"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Pet Care Services
          </h2>
          <p className="text-xl text-muted-foreground">
            From routine check-ups to emergency care, we provide comprehensive veterinary services to keep your pets healthy and happy throughout their lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-to-br from-card to-secondary/20">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 ${service.bgColor} rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;