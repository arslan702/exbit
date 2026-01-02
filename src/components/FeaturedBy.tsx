import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedBy = () => {
  const publications = [
    {
      name: "CoinTelegraph",
      url: "https://cointelegraph.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/CoinTelegraph.png"
    },
    {
      name: "Decrypt",
      url: "https://decrypt.co",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Decrypt.png"
    },
    {
      name: "Blockworks",
      url: "https://blockworks.co",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Blockworks.png"
    },
    {
      name: "NFT.NYC",
      url: "https://nft.nyc",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/NFT-NY.png"
    },
    {
      name: "Influencer Marketing Hub",
      url: "https://influencermarketinghub.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Influencer-Marketing-Hub.png"
    },
    {
      name: "Binance",
      url: "https://binance.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Binance.png"
    },
    {
      name: "Bankless",
      url: "https://bankless.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Bankless.png"
    },
    {
      name: "CoinMarketCap",
      url: "https://coinmarketcap.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Coinmarketcap.png"
    },
    {
      name: "HubSpot",
      url: "https://hubspot.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Hubspot.png"
    },
    {
      name: "Investopedia",
      url: "https://investopedia.com",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Investopedia.png"
    }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold mb-8">As featured by</h3>
        
        <div className="flex items-center justify-center gap-8 flex-wrap mb-8">
          {publications.map((pub) => (
            <a
              key={pub.name}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
              aria-label={pub.name}
            >
              <img
                src={pub.image}
                alt={`${pub.name} logo`}
                className="h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
          <Link to="/marketing-plan">Get A Free Marketing Plan</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBy;
