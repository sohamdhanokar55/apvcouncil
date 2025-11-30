import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Eye, ArrowRight } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      type: "image",
      title: "Annual Tech Fest 2023",
      category: "Technical Events",
      description: "Students showcasing innovative projects and competing in technical challenges."
    },
    {
      type: "image", 
      title: "Cultural Night Performance",
      category: "Cultural Events",
      description: "Spectacular dance and music performances by talented students."
    },
    {
      type: "video",
      title: "Freshers Welcome Highlights", 
      category: "Social Events",
      description: "A warm welcome celebration for new students joining our college family."
    },
    {
      type: "image",
      title: "Sports Day Championship",
      category: "Sports Events", 
      description: "Competitive spirit and teamwork on display during our annual sports meet."
    },
    {
      type: "image",
      title: "Innovation Expo",
      category: "Academic Events",
      description: "Students presenting their research projects and innovative solutions."
    },
    {
      type: "video",
      title: "Alumni Meet 2023",
      category: "Professional Events",
      description: "Successful alumni sharing experiences and networking with current students."
    },
    {
      type: "image",
      title: "Workshop Sessions",
      category: "Learning Events",
      description: "Interactive workshops and skill development sessions for student growth."
    },
    {
      type: "image",
      title: "Community Service",
      category: "Social Responsibility",
      description: "Council members and students contributing to social causes and community welfare."
    }
  ];

  const getCategoryColor = (category: string) => {
    if (category.includes("Technical")) return "bg-accent text-accent-foreground";
    if (category.includes("Cultural")) return "bg-success text-success-foreground";
    if (category.includes("Sports")) return "bg-orange-500 text-white";
    if (category.includes("Academic")) return "bg-primary text-primary-foreground";
    if (category.includes("Social")) return "bg-purple-500 text-white";
    if (category.includes("Professional")) return "bg-blue-600 text-white";
    return "bg-muted text-muted-foreground";
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Event <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capturing memorable moments from our events, celebrations, and activities that bring the APV community together.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-card">
              <div className="relative">
                {/* Image/Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-lighter to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {item.type === "video" ? (
                    <div className="text-center text-primary">
                      <Play className="h-12 w-12 mx-auto mb-2" />
                      <span className="text-sm font-medium">Video</span>
                    </div>
                  ) : (
                    <div className="text-center text-primary">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <span className="text-sm font-medium">Photo</span>
                    </div>
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="hero" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gallery Stats */}
          <Card className="border border-border">
            <CardContent className="p-8">
              <Camera className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Visual Journey</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Photos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Videos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Events Documented</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Memories Captured</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Every moment tells a story of growth, achievement, and community spirit at APV.
              </p>
            </CardContent>
          </Card>

          {/* Submit Content CTA */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                <ArrowRight className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Share Your Moments</h3>
              <p className="text-muted-foreground mb-6">
                Have photos or videos from APV events? Share them with us to be featured in our gallery and help document our college's vibrant community.
              </p>
              <div className="space-y-4">
                <Button variant="default" className="w-full">
                  Submit Content
                </Button>
                <Button variant="outline" className="w-full">
                  View All Albums
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;