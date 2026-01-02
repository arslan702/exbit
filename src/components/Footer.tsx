import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const footerLinks = {
    Services: [
      { label: "Influencer Marketing", href: "/influencers" },
      { label: "Public Relations", href: "/public-relations" },
      { label: "PPC & Paid Ads", href: "/web3-ppc-agency" },
      { label: "Community Management", href: "/community-management" },
      { label: "Social Media Marketing", href: "/social-media" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Podcast", href: "/podcast" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "Free Marketing Plan", href: "/marketing-plan" },
      { label: "Pricing", href: "/pricing" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Exbit Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-background/70 text-sm mb-6 max-w-sm">
              The leading Web3 and crypto marketing agency. Helping blockchain companies go viral since 2018.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/Exbit_CS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
                <span className="text-sm">Telegram</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Exbit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
