import { Link } from "react-router-dom";
import { ArrowRight, Users, Megaphone, Target, Calendar, MessageSquare, Share2, Palette, PenTool, Coins, UserCheck, HelpCircle, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Crypto Influencer Marketing",
      description: "We manage the largest network of crypto, Web3, blockchain, & NFT influencers. If you know them, we probably work with them.",
      href: "/influencers",
    },
    {
      icon: Megaphone,
      title: "Public Relations",
      description: "We help crypto brands secure insane media coverage. Get featured by the biggest names in crypto.",
      href: "/public-relations",
    },
    {
      icon: Target,
      title: "PPC & Paid Advertising",
      description: "Web3 PPC is complex. We make it simple. We manage paid ads campaigns on the largest digital platforms.",
      href: "/web3-ppc-agency",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "We help Web3 companies plan, produce, and promote real-world experiences that drive real impact.",
      href: "/contact",
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description: "We increase engagement and community size by making sure your server is set up correctly with the right channels, roles, and bots.",
      href: "/community-management",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "We help Web3 companies build, refine, and execute their Twitter strategies.",
      href: "/social-media",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "We build unique and authentic Web3 brands that tell your story without saying a word.",
      href: "/contact",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "We create innovative, user-centric, Web3-inspired designs and visual assets that capture attention.",
      href: "/contact",
    },
    {
      icon: Coins,
      title: "Tokenomics",
      description: "We help new token projects create exciting and sustainable tokenomics plans that scale.",
      href: "/contact",
    },
    {
      icon: UserCheck,
      title: "Fractional CMO / CMO as a Service",
      description: "Hire an experienced Web3 marketing executive to run your marketing, develop strategy, and more.",
      href: "/contact",
    },
    {
      icon: HelpCircle,
      title: "Web3 Marketing Consultants & Advisory",
      description: "Refine and execute your Web3 marketing with the help of the experts.",
      href: "/contact",
    },
    {
      icon: FileText,
      title: "Free Marketing Plan",
      description: "We use data from 1,250+ successful campaigns to create custom, data-backed plans.",
      href: "/marketing-plan",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Web3 & Crypto Marketing Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="service-card group cursor-pointer border border-border block"
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
