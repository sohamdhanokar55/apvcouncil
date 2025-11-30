import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;


