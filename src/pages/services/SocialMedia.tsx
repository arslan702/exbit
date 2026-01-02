import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Share2, TrendingUp, Users } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Share2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Marketing</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We help Web3 companies build, refine, and execute their social media strategies. Most of our clients see &gt;400% growth in the first month.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Grow Your Social Presence
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl border border-border">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">+5x</p>
              <h3 className="text-xl font-bold mb-3">Social Media Engagement</h3>
              <p className="text-muted-foreground">
                Exbit increased Nexo's social media engagement by over 500%
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">3,500+</p>
              <h3 className="text-xl font-bold mb-3">New Followers</h3>
              <p className="text-muted-foreground">
                In one month, we took Ethermail from 0 followers to 3500+ followers organically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
