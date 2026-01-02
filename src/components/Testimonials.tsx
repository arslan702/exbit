import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Exbit has been a great resource for helping us grow our social media apparatus. They are expert at helping crypto companies elevate their presence in various channels.",
      author: "Jenny Silver",
      role: "CMO, Permission.io",
    },
    {
      quote: "These guys are hardworking and will get things done. They, in my opinion, are worth every penny and will help you get the results you are looking for. I highly recommend them",
      author: "Morgan Steckler",
      role: "Principal, iTrustCapital",
    },
    {
      quote: "With six+ years of experience, Exbit is a leading crypto marketing agency with 800+ clients, including OKX, Nexo, and Sui.",
      author: "Cryptonews.com",
      role: "",
    },
    {
      quote: "Thank you Exbit for the awesome work your team has given us. Execution and transparency are key when working with influencers and that's exactly what we received.",
      author: "Gabrielle Davis",
      role: "CEO, Centric Foundation",
    },
    {
      quote: "6 months later I'm looking at Exbit saying this is one of the most valuable things in my marketing portfolio...We saw consistently the lowest cost per registration of any channel.",
      author: "Shannon Williams",
      role: "CEO, Acorn Labs",
    },
    {
      quote: "Exbit IS crypto marketing. They know marketing and crypto better than any other team. Highly recommend working with them!",
      author: "CryptoDaily CEO",
      role: "",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold mb-12">
          What People Are Saying
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            More Testimonials & Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
