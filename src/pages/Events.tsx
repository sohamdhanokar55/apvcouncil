import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Events from "@/components/sections/Events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Events />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;


