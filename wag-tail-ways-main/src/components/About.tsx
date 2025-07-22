import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Award-Winning Care Since 1998
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Your Pet's Health is Our
                <span className="text-primary block">Top Priority</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At PawCare Animal Hospital, we combine cutting-edge veterinary medicine with compassionate care. Our experienced team is dedicated to providing the highest quality healthcare for your beloved companions.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Compassionate Care</h3>
                  <p className="text-muted-foreground">We treat every pet with the love and attention they deserve, ensuring comfort during their visit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-warm" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Team</h3>
                  <p className="text-muted-foreground">Our certified veterinarians and staff bring decades of experience in animal healthcare.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-soft/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">State-of-the-Art Facility</h3>
                  <p className="text-muted-foreground">Modern equipment and facilities ensure the best possible care for your pet.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg">
                Schedule Tour
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-warm/5 to-warm/10 border-warm/20 mt-8">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-warm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest" fill="currentColor" />
                </div>
                <div className="text-3xl font-bold text-warm mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Pets</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-soft/5 to-soft/10 border-soft/20 -mt-4">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-soft" />
                </div>
                <div className="text-3xl font-bold text-soft mb-1">15</div>
                <div className="text-sm text-muted-foreground">Expert Vets</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 mt-4">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-forest" fill="currentColor" />
                </div>
                <div className="text-3xl font-bold text-accent mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;