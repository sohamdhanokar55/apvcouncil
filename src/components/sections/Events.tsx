import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, MapPin, Users, Clock, ArrowRight, Search, Filter } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("upcoming");
  const [eventTypeFilter, setEventTypeFilter] = useState("all");

  const upcomingEvents = [
    {
      title: "Annual Tech Fest 2024",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus",
      description: "A three-day celebration of technology, innovation, and creativity featuring competitions, workshops, and exhibitions.",
      category: "Technical",
      attendees: "500+"
    },
    {
      title: "Cultural Night",
      date: "March 25, 2024", 
      time: "6:00 PM - 10:00 PM",
      location: "College Auditorium",
      description: "An evening of dance, music, drama, and artistic performances showcasing student talent.",
      category: "Cultural",
      attendees: "300+"
    },
    {
      title: "Career Guidance Workshop",
      date: "April 5, 2024",
      time: "10:00 AM - 4:00 PM", 
      location: "Seminar Hall",
      description: "Expert-led sessions on career planning, interview skills, and industry insights for final year students.",
      category: "Academic",
      attendees: "150+"
    }
  ];

  const pastEvents = [
    {
      title: "Freshers' Welcome 2023",
      date: "August 2023",
      description: "A grand welcome for new students with cultural performances and team-building activities.",
      category: "Social"
    },
    {
      title: "Inter-College Sports Meet",
      date: "September 2023", 
      description: "Competitive sports tournament with multiple colleges showcasing athletic excellence.",
      category: "Sports"
    },
    {
      title: "Innovation Expo",
      date: "November 2023",
      description: "Student project exhibitions and technical paper presentations across all departments.",
      category: "Technical"
    },
    {
      title: "Alumni Meet 2023",
      date: "December 2023",
      description: "Reunion event connecting current students with successful alumni for networking and mentorship.",
      category: "Professional"
    }
  ];

  const allEvents = [...upcomingEvents, ...pastEvents];
  const eventTypes = ["all", "Technical", "Cultural", "Academic", "Sports", "Social", "Professional"];
  const categories = [
    { id: "upcoming", label: "Upcoming" },
    { id: "past", label: "Past Events" },
    { id: "all", label: "All Events" }
  ];

  const filteredEvents = useMemo(() => {
    let events = [];
    
    // Filter by category (upcoming/past/all)
    if (activeCategory === "upcoming") {
      events = upcomingEvents;
    } else if (activeCategory === "past") {
      events = pastEvents;
    } else {
      events = allEvents;
    }

    // Filter by event type
    if (eventTypeFilter !== "all") {
      events = events.filter(event => event.category === eventTypeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      events = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return events;
  }, [activeCategory, eventTypeFilter, searchTerm, upcomingEvents, pastEvents, allEvents]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical": return "bg-accent text-accent-foreground";
      case "Cultural": return "bg-success text-success-foreground";
      case "Academic": return "bg-primary text-primary-foreground";
      case "Sports": return "bg-orange-500 text-white";
      case "Social": return "bg-purple-500 text-white";
      case "Professional": return "bg-blue-600 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From technical competitions to cultural celebrations, we organize diverse events that enrich student life and create lasting memories.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="px-4"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Event Type Filter */}
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  {eventTypeFilter === "all" ? "All Types" : eventTypeFilter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-popover border border-border">
                {eventTypes.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => setEventTypeFilter(type)}
                    className="cursor-pointer hover:bg-accent"
                  >
                    {type === "all" ? "All Types" : type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Active Filters Display */}
          {(eventTypeFilter !== "all" || searchTerm) && (
            <div className="flex justify-center gap-2 flex-wrap">
              {eventTypeFilter !== "all" && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setEventTypeFilter("all")}>
                  {eventTypeFilter} ×
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm("")}>
                  "{searchTerm}" ×
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Events Display */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-primary" />
              {activeCategory === "upcoming" ? "Upcoming Events" : 
               activeCategory === "past" ? "Past Events" : "All Events"}
            </h3>
            <span className="text-sm text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">No events found</h4>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters to find events.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
              <Card key={index} className="border border-border hover:border-primary transition-all duration-300 hover:shadow-card group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </div>
                    {event.attendees && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}
                      </div>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    {event.time && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </div>

        {/* Event Calendar CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-0 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Never miss an event! Follow our social media channels and check our announcements 
                section for the latest updates on upcoming events and registration details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default">
                  View Full Calendar
                </Button>
                <Button variant="outline">
                  Subscribe to Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;