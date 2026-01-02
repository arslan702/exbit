import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import FeaturedBy from "@/components/FeaturedBy";
import Services from "@/components/Services";
import FeatureSection from "@/components/FeatureSection";
import CaseStudies from "@/components/CaseStudies";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import BackedBy from "@/components/BackedBy";
import ServicesTabs from "@/components/ServicesTabs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <FeaturedBy />
        <Services />
        
        <FeatureSection
          title="Influencer & Thought Leader Marketing"
          subtitle="We help innovative companies promote their brands with the biggest names in Web3."
          description="We're proud to be the leading crypto influencer marketing agency, managing the largest network of cryptocurrency, Web3, blockchain, & NFT influencers in the world across Twitter, YouTube, TikTok, Instagram, and more."
          stats={[
            { label: "Pieces of Influencer Content Created", value: "2,000+" },
            { label: "Influencers (& Growing)", value: "500+" },
          ]}
          ctaText="Explore Influencer Marketing"
          imageSrc="https://mlvcy58mp4xj.i.optimole.com/w:1129/h:941/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2025/12/Coinbound-KOL-Icon.png"
        />

        <FeatureSection
          title="Community Management & Set Up"
          subtitle="We help Web3 companies create engaging and vibrant Telegram & Discord communities"
          description="When it comes to building a community on Discord or Telegram, our crypto marketing agency is the leader. We will make sure your server is set up correctly with the right channels, roles, bots, and more."
          stats={[
            { label: "more members for Galaxy Arena", value: "7x" },
            { label: "community engagement rate for Metamoose NFT", value: "60%" },
          ]}
          ctaText="Build Your Community"
          reversed
          bgColor="bg-muted"
          imageSrc="https://mlvcy58mp4xj.i.optimole.com/w:1129/h:941/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2025/12/Coinbound-Community-Icon.png"
        />

        <FeatureSection
          title="Public Relations & Earned Media"
          subtitle="We help crypto companies secure amazing organic coverage from industry media."
          description="Exbit delivers deep Web3 and crypto PR industry expertise which allows us to develop comprehensive communications strategies to reach a massively wide audience."
          stats={[
            { label: "Earned Media Pieces Secured", value: "8,250+" },
          ]}
          ctaText="Get Organic Web3 Coverage"
          imageSrc="https://mlvcy58mp4xj.i.optimole.com/w:370/h:308/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2025/12/Coinbound-PR-Icon.png"
        />

        <FeatureSection
          title="Social Media Management"
          subtitle="We help Web3 companies build, refine, and execute their social media strategies."
          description="Social media is everything in the crypto industry, especially Twitter. We take full management of your account and make sure your account constantly has amazing content."
          stats={[
            { label: "social media engagement increase for Nexo", value: "+5x" },
            { label: "new followers for Ethermail in one month", value: "3,500+" },
          ]}
          ctaText="Our Crypto Social Media Strategy"
          reversed
          bgColor="bg-muted"
          imageSrc="https://mlvcy58mp4xj.i.optimole.com/w:370/h:308/q:mauto/f:best/https://coinbound.io/wp-content/uploads/2025/12/Coinbound-Social-Icon.png"
        />

        <CaseStudies />
        <Awards />
        <Testimonials />
        <BackedBy />
        <ServicesTabs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
