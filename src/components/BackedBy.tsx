const BackedBy = () => {
  const investors = [
    {
      name: "Pantera Capital",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Pantera-Capital.png"
    },
    {
      name: "Paradigm",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Paradigm.png"
    },
    {
      name: "Multicoin Capital",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Multicoin-Capital.png"
    },
    {
      name: "Animoca Brands",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:254/h:128/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/06/Animoca-Brands-1.png"
    },
    {
      name: "IOSG Ventures",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:254/h:128/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/06/IOSG-Ventures-1.png"
    },
    {
      name: "Blockchain Capital",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:145/h:73/q:mauto/f:best/dpr:2/https://coinbound.io/wp-content/uploads/2024/06/Blockchain-Capital.png"
    },
    {
      name: "Polygon Ventures",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:254/h:128/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/06/Polygon-Ventures-1.png"
    },
    {
      name: "Sequoia",
      image:
        "https://mlvcy58mp4xj.i.optimole.com/w:254/h:128/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2024/06/Sequoia-1.png"
    }
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-xl font-semibold mb-12">
          Our clients are backed by the best
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {investors.map((investor) => (
            <div
              key={investor.name}
              className="flex items-center justify-center"
              aria-label={investor.name}
            >
              <img
                src={investor.image}
                alt={`${investor.name} logo`}
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
