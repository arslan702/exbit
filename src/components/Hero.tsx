import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const stats = [
    { label: "Happy Clients", value: "800+" },
    { label: "Years of Crypto Marketing Experience", value: "6+" },
    { label: "Campaigns Delivered", value: "1,250+" },
    { label: "Top 100 Market Cap Crypto Companies Represented", value: "30%+" },
  ];

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-sm md:text-base font-medium mb-2 text-white/90">
              A Top Web3 & Crypto Marketing Agency
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              We help Web3 companies go viral
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              An agency built for the speed of crypto
            </p>
            <Link to="/contact">
              <Button className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] text-sm font-semibold px-8 py-6 rounded">
                GET A FREE PROPOSAL
              </Button>
            </Link>
          </div>

          {/* Right Stats */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] text-white p-4 border-l-4 border-primary"
              >
                <p className="text-sm font-medium text-white/80">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
