import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* APV Council Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">APV Council</h3>
                <p className="text-sm text-muted-foreground">Agnel Polytechnic Vashi</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering students, organizing events, and fostering a vibrant campus community at Agnel Polytechnic Vashi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#members" className="text-muted-foreground hover:text-primary transition-colors">Council Members</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">apvcouncil@agnelvashi.edu.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 APV Council, Agnel Polytechnic Vashi. All rights reserved. | Built by the Council Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;