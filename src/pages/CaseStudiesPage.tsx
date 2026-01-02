import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudiesPage = () => {
  const caseStudies = [
    { name: "Gala", result: "Multiple Sold Out Projects", description: "How we helped Gala Games achieve massive success with their NFT launches.", color: "from-purple-500 to-pink-500" },
    { name: "Zivoe", result: "$8M+ Raised", description: "Strategic marketing campaign that drove over $8M in funding.", color: "from-blue-500 to-cyan-500" },
    { name: "BitDials", result: "29.96x ROAS", description: "Exceptional return on ad spend through targeted crypto advertising.", color: "from-blue-600 to-blue-800" },
    { name: "EtherMail", result: "100k+ Registrations", description: "Community growth campaign that delivered massive user acquisition.", color: "from-green-500 to-emerald-500" },
    { name: "Cosmos", result: "500% Engagement Increase", description: "Social media strategy that transformed community engagement.", color: "from-indigo-500 to-purple-500" },
    { name: "Litecoin", result: "Global PR Coverage", description: "Earned media campaign securing coverage in top-tier publications.", color: "from-gray-500 to-slate-500" },
    { name: "Immutable", result: "2M+ Impressions", description: "Influencer marketing campaign reaching millions of crypto enthusiasts.", color: "from-pink-500 to-rose-500" },
    { name: "Nexo", result: "+5x Social Engagement", description: "Complete social media overhaul driving 500% engagement growth.", color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore how we've helped leading Web3 companies achieve extraordinary results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${study.color} rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform group`}
              >
                <h3 className="text-2xl font-bold mb-2">{study.name}</h3>
                <p className="text-xl font-semibold mb-3 opacity-90">{study.result}</p>
                <p className="text-sm opacity-80 mb-4">{study.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>

          <div id="past-clients" className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Past Clients</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
              {["Gala", "Cosmos", "Litecoin", "Immutable", "Nexo", "MetaMask", "Polygon", "Chainlink", "Aave", "Uniswap", "Solana", "Avalanche"].map((client) => (
                <div key={client} className="text-lg font-bold text-muted-foreground">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
