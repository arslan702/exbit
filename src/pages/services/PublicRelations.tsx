import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Newspaper, Award, TrendingUp } from "lucide-react";

const PublicRelations = () => {
  const publications = [
    "CoinTelegraph", "Decrypt", "TechCrunch", "NewsBTC", 
    "Yahoo Finance", "Forbes", "Benzinga", "MarketWatch"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Newspaper className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Public Relations & Earned Media</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We help crypto companies secure amazing organic coverage from industry media. Get featured by the biggest names in crypto.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get PR Coverage
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Publications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {publications.map((pub) => (
              <div key={pub} className="bg-card p-6 rounded-xl border border-border text-center">
                <p className="font-semibold">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">8,250+ Earned Media Pieces Secured</h2>
              <p className="text-muted-foreground mb-6">
                Our crypto PR team has strong relationships with journalists and editors in the crypto space, ensuring your story gets the attention it deserves.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm">Award-winning team</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm">Proven results</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/20 p-8 rounded-xl">
              <p className="text-5xl font-bold text-primary mb-2">8,250+</p>
              <p className="text-lg">Media pieces secured</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublicRelations;
