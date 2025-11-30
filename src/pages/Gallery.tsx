import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;


