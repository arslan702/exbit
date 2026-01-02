import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for early-stage projects",
      features: [
        "Social Media Management",
        "Community Setup",
        "Basic PR Outreach",
        "Monthly Reporting",
        "Email Support",
      ],
    },
    {
      name: "Growth",
      description: "For projects ready to scale",
      popular: true,
      features: [
        "Everything in Starter",
        "Influencer Campaigns",
        "Full PR Strategy",
        "PPC Management",
        "Weekly Reporting",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large projects",
      features: [
        "Everything in Growth",
        "Fractional CMO",
        "Event Management",
        "Custom Strategy",
        "24/7 Support",
        "Executive Reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Custom solutions based on your needs. Contact us for a personalized proposal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card p-8 rounded-xl border ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Get a Quote
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Need a custom solution?{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
