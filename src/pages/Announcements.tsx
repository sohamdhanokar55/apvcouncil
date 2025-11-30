import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Announcements from "@/components/sections/Announcements";

const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Announcements />
      </main>
      <Footer />
    </div>
  );
};

export default AnnouncementsPage;


