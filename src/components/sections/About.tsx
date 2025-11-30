import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users, Megaphone, Calendar } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do for our student community."
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Creating a welcoming environment where every student feels valued and heard."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Bringing fresh ideas and creative solutions to enhance student life."
    }
  ];

  const responsibilities = [
    {
      icon: Users,
      title: "Student Representation",
      description: "Acting as the voice of students in college matters and decision-making processes."
    },
    {
      icon: Calendar,
      title: "Event Organization",
      description: "Planning and executing cultural, technical, and social events throughout the academic year."
    },
    {
      icon: Megaphone,
      title: "Communication",
      description: "Bridging the gap between students, faculty, and administration through effective communication."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">APV Council</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The APV Council is the official student council of Agnel Polytechnic Vashi, 
            committed to representing student interests and fostering a dynamic campus environment.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To empower students by providing a platform for their voices to be heard, organizing enriching 
                experiences that enhance college life, and fostering a culture of academic excellence, creativity, 
                and social responsibility within the Agnel Polytechnic Vashi community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border hover:border-primary transition-all duration-300 hover:shadow-card group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-lighter group-hover:bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Our Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} className="border border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <responsibility.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{responsibility.title}</h4>
                  <p className="text-muted-foreground">{responsibility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Principal's Message Placeholder */}
        <Card className="bg-primary-lighter border-0">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-32 h-32 bg-primary rounded-2xl mx-auto lg:mx-0 shadow-card flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
              </div>
              <div className="lg:col-span-2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-4">Message from the Principal</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "The APV Council represents the spirit and dynamism of our student community. 
                  Their dedication to academic excellence and holistic development continues to 
                  inspire us all. I am proud of their contributions to making Agnel Polytechnic 
                  Vashi a place where students thrive and grow into tomorrow's leaders."
                </p>
                <div className="text-sm text-primary font-medium">
                  - Dr. Principal Name, Principal, Agnel Polytechnic Vashi
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;