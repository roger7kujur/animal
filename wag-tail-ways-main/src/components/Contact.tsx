import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to schedule your pet's visit? Contact us today to book an appointment or learn more about our services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  Schedule an Appointment
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pet Owner Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <Input placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Pet Name & Type</label>
                    <Input placeholder="e.g., Buddy (Golden Retriever)" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Needed</label>
                  <Input placeholder="e.g., Annual check-up, vaccination, emergency" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Additional Information</label>
                  <Textarea 
                    placeholder="Tell us about your pet's condition or any specific concerns..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Request Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Main Line</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">(555) 123-4568</p>
                    <p className="text-sm text-muted-foreground">Emergency Line</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-warm/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-warm" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">info@pawcare.com</p>
                    <p className="text-sm text-muted-foreground">General Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-soft/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-soft" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">123 Pet Care Lane</p>
                    <p className="text-sm text-muted-foreground">Veterinary City, VC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium text-foreground">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground font-medium">24/7 Emergency Care Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button variant="warm" size="lg" className="w-full">
              <MessageSquare className="w-4 h-4 mr-2" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;