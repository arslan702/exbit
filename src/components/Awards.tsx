const Awards = () => {
  const awards = [
    {
      name: "Top Clutch Crypto Marketing 2025",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:180/h:194/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2025/11/Top-Clutch-Crypto-Marketing-2025.png"
    },
    {
      name: "BeInCrypto Best Crypto Marketing Agency 2024",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:180/h:180/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/04/Coinbound-Awards-3-1.png"
    },
    {
      name: "InfluencerMarketingHub Best Crypto & NFT Marketing Agency",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:180/h:180/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/04/Coinbound-Awards-2-2-1.png"
    },
    {
      name: "dApp Radar Web3 Agency",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:180/h:180/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/04/dApp-radar-web3-agency-coinbound.png"
    },
    {
      name: "Digital Agency Network Best Web3 Marketing Agency",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:154/h:154/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2023/01/Digital-Agency-Network-Web3.png"
    },
    {
      name: "Cointelegraph Innovation Circle Member",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:154/h:154/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2022/05/Circle-1.png"
    },
    {
      name: "Coindoo Top NFT Marketing Agency",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:154/h:154/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2022/12/Coinbund-Awards-2.png"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl font-semibold mb-8">
          We've won more crypto marketing awards than any agency in the world
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {awards.map((award) => (
            <div
              key={award.name}
              className="flex flex-col items-center text-center max-w-[160px]"
            >
              <div className="w-38 h-38 overflow-hidden flex items-center justify-center mb-2">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-muted-foreground">{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
