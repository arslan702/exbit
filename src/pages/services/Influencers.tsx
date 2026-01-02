import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Youtube, Twitter, Instagram } from "lucide-react";

const Influencers = () => {
  const stats = [
    { value: "500+", label: "Influencers in Network" },
    { value: "2,000+", label: "Pieces of Content Created" },
    { value: "100M+", label: "Total Reach" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Crypto Influencer Marketing</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We manage the largest network of crypto, Web3, blockchain, & NFT influencers. If you know them, we probably work with them.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Campaign
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl border border-border">
                <Youtube className="w-10 h-10 text-red-500 mb-3" />
                <p className="font-semibold">YouTube</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Twitter className="w-10 h-10 text-blue-400 mb-3" />
                <p className="font-semibold">Twitter/X</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Instagram className="w-10 h-10 text-pink-500 mb-3" />
                <p className="font-semibold">Instagram</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Users className="w-10 h-10 text-primary mb-3" />
                <p className="font-semibold">TikTok</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Influencers;
