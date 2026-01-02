import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, DollarSign } from "lucide-react";

const PPC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PPC & Paid Advertising</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Web3 PPC is complex. We make it simple. We manage paid ads campaigns on the largest digital platforms, resulting in scalable and reliable growth.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Advertising
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-8 rounded-xl border border-border">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">29.96x</p>
              <p className="text-muted-foreground">ROAS for BitDials</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">$8M+</p>
              <p className="text-muted-foreground">Raised for Zivoe</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-primary mb-2">100k+</p>
              <p className="text-muted-foreground">Registrations for EtherMail</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PPC;
