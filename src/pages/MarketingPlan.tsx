import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Check } from "lucide-react";

const MarketingPlan = () => {
  const benefits = [
    "Custom strategy based on 1,250+ successful campaigns",
    "Data-backed recommendations",
    "Industry-specific insights",
    "Competitive analysis",
    "Actionable next steps",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FileText className="w-16 h-16 text-primary mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Marketing Plan</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We use data from 1,250+ successful campaigns to create custom, data-backed marketing plans for Web3 companies.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold mb-6">Request Your Free Plan</h2>
              <form className="space-y-4">
                <Input placeholder="Full Name" className="bg-background" />
                <Input type="email" placeholder="Email Address" className="bg-background" />
                <Input placeholder="Company Name" className="bg-background" />
                <Input placeholder="Website URL" className="bg-background" />
                <Textarea placeholder="Tell us about your project and goals..." className="bg-background min-h-[100px]" />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Free Marketing Plan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingPlan;
