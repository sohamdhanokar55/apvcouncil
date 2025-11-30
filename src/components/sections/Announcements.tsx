import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Calendar, AlertCircle, Info, Bell, Pin } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      type: "urgent",
      title: "Last Date Extended: Tech Fest Registration",
      date: "March 10, 2024",
      content: "The registration deadline for Annual Tech Fest 2024 has been extended to March 12, 2024. Don't miss this opportunity to showcase your technical skills!",
      isPinned: true
    },
    {
      type: "important",
      title: "Cultural Night Auditions - This Weekend",
      date: "March 8, 2024",
      content: "Auditions for Cultural Night performances will be held on March 11-12, 2024, in the college auditorium. Participants should come prepared with their performances.",
      isPinned: true
    },
    {
      type: "general",
      title: "New Student Orientation Program",
      date: "March 5, 2024",
      content: "A comprehensive orientation program for newly admitted students will be conducted on March 20, 2024. All new students are required to attend.",
      isPinned: false
    },
    {
      type: "academic",
      title: "Career Guidance Workshop - Industry Experts",
      date: "March 3, 2024",
      content: "Join us for an exclusive workshop with industry experts on April 5, 2024. Limited seats available - register now to secure your spot.",
      isPinned: false
    },
    {
      type: "general",
      title: "Library Timings Update",
      date: "March 1, 2024",
      content: "The library will now remain open until 8:00 PM on weekdays and 5:00 PM on Saturdays to support extended study hours for students.",
      isPinned: false
    },
    {
      type: "important",
      title: "Sports Equipment Maintenance",
      date: "February 28, 2024",
      content: "The sports complex will be under maintenance from March 15-17, 2024. Alternative arrangements have been made for scheduled activities.",
      isPinned: false
    }
  ];

  const getAnnouncementStyle = (type: string) => {
    switch (type) {
      case "urgent":
        return {
          icon: AlertCircle,
          badgeClass: "bg-destructive text-destructive-foreground",
          borderClass: "border-destructive/30 hover:border-destructive",
          iconColor: "text-destructive"
        };
      case "important":
        return {
          icon: Bell,
          badgeClass: "bg-orange-500 text-white",
          borderClass: "border-orange-200 hover:border-orange-400",
          iconColor: "text-orange-500"
        };
      case "academic":
        return {
          icon: Info,
          badgeClass: "bg-primary text-primary-foreground",
          borderClass: "border-primary/30 hover:border-primary",
          iconColor: "text-primary"
        };
      default:
        return {
          icon: Megaphone,
          badgeClass: "bg-muted text-muted-foreground",
          borderClass: "border-border hover:border-primary",
          iconColor: "text-muted-foreground"
        };
    }
  };

  return (
    <section id="announcements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Announcements</span> & Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest news, important dates, and updates from the APV Council and college administration.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <Card className="border border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Urgent Updates</div>
            </CardContent>
          </Card>
          
          <Card className="border border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Pin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Pinned Items</div>
            </CardContent>
          </Card>
          
          <Card className="border border-border text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Recent Updates</div>
            </CardContent>
          </Card>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement, index) => {
            const style = getAnnouncementStyle(announcement.type);
            const Icon = style.icon;
            
            return (
              <Card key={index} className={`border transition-all duration-300 hover:shadow-card ${style.borderClass}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon and Badge */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 flex-shrink-0">
                      <div className="w-12 h-12 bg-background rounded-xl border border-border flex items-center justify-center">
                        <Icon className={`h-6 w-6 ${style.iconColor}`} />
                      </div>
                      <div className="flex items-center gap-2 sm:flex-col sm:items-center">
                        <Badge className={style.badgeClass}>
                          {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                        </Badge>
                        {announcement.isPinned && (
                          <div className="flex items-center">
                            <Pin className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                          {announcement.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground flex-shrink-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {announcement.date}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {announcement.content}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                        {announcement.type === "urgent" && (
                          <Button variant="default" size="sm">
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Subscription CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bell className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Never Miss an Update</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our announcement notifications to stay informed about important college updates, 
                event registrations, deadlines, and council activities delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button variant="default" className="flex-1">
                  Subscribe to Updates
                </Button>
                <Button variant="outline" className="flex-1">
                  Follow on Social Media
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Announcements;