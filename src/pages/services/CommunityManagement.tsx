import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp } from "lucide-react";

const CommunityManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Management & Set Up</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We help Web3 companies create engaging and vibrant Telegram & Discord communities.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Build Your Community
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">7x</p>
              <h3 className="text-xl font-bold mb-3">More Members</h3>
              <p className="text-muted-foreground">
                Exbit's community management team increased Galaxy Arena's number of members by 699% and increased the engagement rate of visitors to 80%
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">60%</p>
              <h3 className="text-xl font-bold mb-3">Engagement Rate</h3>
              <p className="text-muted-foreground">
                Exbit increased Metamoose NFT's community engagement rate from 7.14% to 60%
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityManagement;
