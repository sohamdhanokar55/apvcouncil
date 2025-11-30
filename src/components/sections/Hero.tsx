import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary-lighter to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                APV Council
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              The official student council of Agnel Polytechnic Vashi, dedicated to empowering students, 
              organizing memorable events, and fostering a vibrant campus community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/events">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="academic" size="lg">
                <Link to="/members">Meet the Council</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-lighter rounded-xl mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-lighter rounded-xl mb-2 mx-auto">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-lighter rounded-xl mb-2 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">15</div>
                <div className="text-sm text-muted-foreground">Council Members</div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-card rounded-3xl shadow-hero overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-primary">
                    <div className="w-24 h-24 bg-primary-lighter rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Student Excellence</h3>
                    <p className="text-muted-foreground">Building tomorrow's leaders today</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-2xl shadow-card flex items-center justify-center animate-pulse">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-success rounded-xl shadow-card flex items-center justify-center animate-pulse delay-300">
                <Calendar className="h-6 w-6 text-success-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;