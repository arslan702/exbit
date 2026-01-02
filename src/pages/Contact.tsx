import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to take your Web3 marketing to the next level? Contact us for a free consultation.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border space-y-6">
              <h2 className="text-2xl font-bold">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Rooted in Europe. Trusted Worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Send className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <a
                      href="https://t.me/Exbit_CS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      t.me/Exbit_CS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Free Marketing Plan</h3>
              <p className="text-muted-foreground mb-4">
                Get a custom, data-backed marketing plan based on data from 1,250+ successful campaigns.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Free Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
