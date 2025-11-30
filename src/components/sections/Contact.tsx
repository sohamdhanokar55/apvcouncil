import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions, suggestions, or want to get involved? We'd love to hear from you. 
            Reach out to the APV Council team through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border border-border hover:border-primary transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">For general inquiries and feedback</p>
                  <a href="mailto:apvcouncil@agnelvashi.edu.in" className="text-primary hover:underline text-sm font-medium">
                    apvcouncil@agnelvashi.edu.in
                  </a>
                </CardContent>
              </Card>

              <Card className="border border-border hover:border-primary transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-3">During college hours</p>
                  <a href="tel:+919876543210" className="text-primary hover:underline text-sm font-medium">
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <h3 className="font-semibold text-foreground">Visit Us</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Student Council Office<br />
                  Agnel Polytechnic Vashi<br />
                  Sector 9A, Vashi<br />
                  Navi Mumbai, Maharashtra 400703
                </p>
                
                {/* Map Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-lighter to-accent/20 rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center text-primary">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Click to view location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Send us a Message</h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input id="subject" placeholder="What is this about?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry, suggestion, or feedback..." 
                      className="mt-1 min-h-[120px]" 
                    />
                  </div>

                  <Button variant="default" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Event Inquiries</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about upcoming events or want to propose an event idea?
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Event Team
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2">Join Our Team</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in volunteering or becoming a council member?
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;