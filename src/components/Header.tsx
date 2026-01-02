import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const navItems = [
    {
      label: "Services",
      hasDropdown: true,
      items: [
        { label: "Crypto Influencer Marketing", href: "/influencers" },
        { label: "Public Relations", href: "/public-relations" },
        { label: "PPC & Paid Advertising", href: "/web3-ppc-agency" },
        { label: "Community Management", href: "/community-management" },
        { label: "Social Media Marketing", href: "/social-media" },
      ],
    },
    {
      label: "Case Studies",
      hasDropdown: false,
      href: "/case-studies",
    },
    {
      label: "Company",
      hasDropdown: true,
      items: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Podcast", href: "/podcast" },
        { label: "Contact", href: "/contact" },
      ],
    },
    { label: "Pricing", hasDropdown: false, href: "/pricing" },
    {
      label: "Resources",
      hasDropdown: true,
      items: [
        { label: "Free Marketing Plan", href: "/marketing-plan" },
        { label: "Blog", href: "/blog" },
        { label: "Podcast", href: "/podcast" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 px-4">
        <div className="container mx-auto flex justify-end gap-4">
          <a href="https://coinbound.io/native-ads" target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:text-primary transition-colors">
            LAUNCH NATIVE ADS
          </a>
          <a href="https://coinbound.io/publish-pr" target="_blank" rel="noopener noreferrer" className="text-xs font-medium hover:text-primary transition-colors">
            PUBLISH A PR
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Exbit</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && openMenu(item.label)}
                  onMouseLeave={() => item.hasDropdown && scheduleClose()}
                >
                  {item.hasDropdown ? (
                    <>
                      <button className="nav-link flex items-center gap-1">
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div
                          className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                          onMouseEnter={() => openMenu(item.label)}
                          onMouseLeave={scheduleClose}
                        >
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.href || "#"} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
                  BOOK A CALL
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div className="mb-2">
                      <button
                        className="flex items-center justify-between w-full py-2 nav-link"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href || "#"}
                      className="block py-2 nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="mt-4 w-full bg-foreground text-background hover:bg-foreground/90">
                  BOOK A CALL
                </Button>
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
