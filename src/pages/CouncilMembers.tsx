import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CouncilMembers from "@/components/sections/CouncilMembers";

const CouncilMembersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CouncilMembers />
      </main>
      <Footer />
    </div>
  );
};

export default CouncilMembersPage;


