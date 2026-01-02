import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    { name: "Gala", result: "Multiple Sold Out Projects", color: "from-purple-500 to-pink-500" },
    { name: "Zivoe", result: "$8M+ Raised", color: "from-blue-500 to-cyan-500" },
    { name: "BitDials", result: "29.96x ROAS", color: "from-blue-600 to-blue-800" },
    { name: "EtherMail", result: "100k+ Registrations", color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Crypto Marketing Success Stories</h2>
          <Link to="/case-studies">
            <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
              More Case Studies
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to="/case-studies"
              className={`bg-gradient-to-br ${study.color} rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform block`}
            >
              <h3 className="text-2xl font-bold mb-2">{study.name}</h3>
              <p className="text-sm opacity-90">{study.result}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
