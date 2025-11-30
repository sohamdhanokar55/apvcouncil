import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Phone } from "lucide-react";

const CouncilMembers = () => {
  const members = [
    {
      name: "Priya Sharma",
      position: "President",
      department: "Computer Engineering",
      year: "Final Year",
      description: "Leading the council with vision and dedication to student welfare."
    },
    {
      name: "Rohit Patel",
      position: "Vice President",
      department: "Mechanical Engineering", 
      year: "Final Year",
      description: "Supporting initiatives and ensuring smooth council operations."
    },
    {
      name: "Ananya Reddy",
      position: "General Secretary",
      department: "Electronics Engineering",
      year: "Third Year", 
      description: "Managing communications and coordinating council activities."
    },
    {
      name: "Arjun Singh",
      position: "Cultural Head",
      department: "Civil Engineering",
      year: "Final Year",
      description: "Organizing cultural events and fostering artistic expression."
    },
    {
      name: "Sneha Joshi",
      position: "Sports Secretary",
      department: "Information Technology",
      year: "Third Year",
      description: "Promoting sports activities and healthy competition."
    },
    {
      name: "Vikram Kumar",
      position: "Technical Head",
      department: "Computer Engineering", 
      year: "Final Year",
      description: "Leading technical events and innovation initiatives."
    },
    {
      name: "Kavya Nair",
      position: "Social Media Manager",
      department: "Electronics Engineering",
      year: "Second Year",
      description: "Managing digital presence and student engagement online."
    },
    {
      name: "Rahul Gupta",
      position: "Finance Secretary",
      department: "Mechanical Engineering",
      year: "Third Year", 
      description: "Overseeing budget management and financial planning."
    },
    {
      name: "Pooja Mishra",
      position: "Event Coordinator",
      department: "Civil Engineering",
      year: "Second Year",
      description: "Planning and executing memorable college events."
    }
  ];

  const getPositionColor = (position: string) => {
    if (position.includes("President")) return "bg-accent text-accent-foreground";
    if (position.includes("Secretary")) return "bg-primary text-primary-foreground";
    if (position.includes("Head")) return "bg-success text-success-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <section id="members" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Council Members</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated students working together to enhance the college experience for everyone at Agnel Polytechnic Vashi.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="border border-border hover:border-primary transition-all duration-300 hover:shadow-card group">
              <CardContent className="p-6 text-center">
                {/* Profile Picture Placeholder */}
                <div className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft group-hover:scale-105 transition-transform duration-300">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${getPositionColor(member.position)}`}>
                  {member.position}
                </div>

                <div className="space-y-1 mb-4">
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                  <p className="text-sm text-primary font-medium">{member.year}</p>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Contact Info */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-primary-lighter rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="p-2 bg-primary-lighter rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <Phone className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-0 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Want to Join the Council?</h3>
              <p className="text-muted-foreground mb-6">
                Applications for next year's council positions open in April. 
                Stay tuned for announcements and application details.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="px-4 py-2 bg-primary-lighter text-primary rounded-lg font-medium">
                  Applications: April 2024
                </span>
                <span className="px-4 py-2 bg-success/10 text-success rounded-lg font-medium">
                  Elections: May 2024
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CouncilMembers;