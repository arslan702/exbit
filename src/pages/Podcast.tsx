import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Headphones } from "lucide-react";

const Podcast = () => {
  const episodes = [
    { title: "The Future of NFT Marketing", guest: "Guest: John Smith", duration: "45 min" },
    { title: "Building Communities in Web3", guest: "Guest: Sarah Johnson", duration: "38 min" },
    { title: "Influencer Marketing Secrets", guest: "Guest: Mike Chen", duration: "52 min" },
    { title: "PR in the Crypto World", guest: "Guest: Lisa Park", duration: "41 min" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Headphones className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crypto Marketing Podcast</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hosted by Ty Smith. Learn crypto marketing from the experts.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe on Apple
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Subscribe on Spotify
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Episodes</h2>
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border flex items-center justify-between group cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold">{episode.title}</h3>
                    <p className="text-sm text-muted-foreground">{episode.guest}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{episode.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Podcast;
