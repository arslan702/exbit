import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LogoCarousel = () => {
  const logos = [
    {
      name: "Sui",
      url: "https://sui.io",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/04/Sui-2-1.png"
    },
    {
      name: "OKX",
      url: "https://okx.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:450/h:225/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2023/02/OKX.png"
    },
    {
      name: "TRON",
      url: "https://tron.network",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:450/h:225/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2022/05/Copy-of-Client-Slider-150-3.png"
    },
    {
      name: "Immutable",
      url: "https://immutable.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2023/10/Coinbound-Past-Clients-1-1.png"
    },
    {
      name: "GALA",
      url: "https://gala.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/04/Coinbound-Past-Clients-4-2.png"
    },
    {
      name: "NEXO",
      url: "https://nexo.io",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/12/Nexo.png"
    },
    {
      name: "Stake",
      url: "https://stake.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2023/10/10.png"
    },
    {
      name: "COSMOS",
      url: "https://cosmos.network",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2023/10/Cosmos.png"
    },
    {
      name: "Algorand",
      url: "https://algorand.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/12/Algorand-Logo-CB.png"
    },
    {
      name: "Index",
      url: "https://indexcoop.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Index-Coop-Client-Logo-1.png"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold mb-8">
          Join 800+ leading Web3 teams
        </h3>
        
        {/* Logo scroll container */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex items-center justify-center gap-8 md:gap-10 flex-wrap">
            {logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                aria-label={logo.name}
              >
                <img
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
            <Link to="/case-studies">BROWSE PAST CLIENTS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
