import { useState } from "react";
import { Button } from "@/components/ui/button";

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      name: "Influencer Marketing",
      points: [
        "Build top and middle-of-funnel content using respected names in the crypto space.",
        "Leverage a huge network of content creators on YouTube, TikTok, Twitter (X), LinkedIn, Twitch, and more.",
      ],
    },
    {
      name: "Public Relations",
      points: [
        "Get covered in leading Web3 and business media",
        "Refine your messaging and amplify it to the world",
        "Build thought leadership for your Founders and execs",
        "Get invited to podcasts and interviews to tell your story",
      ],
    },
    {
      name: "PPC & Paid Ads",
      points: [
        "Build scaleable acquisition channels via paid ads platforms",
        "Attract new customers using Google Ads, LinkedIn Ads, X Ads, and more",
        "Have your ads managed by the pros",
        "Target users across the internet",
      ],
    },
    {
      name: "SEO",
      points: [
        "Explore the power of added organic traffic",
        "Outrank competitors",
        "Build sustainable and organic growth funnels",
        "Understand what your users are looking for and rank #1 for those terms",
      ],
    },
    {
      name: "Lead Generation",
      points: [
        "Add a team of experienced SDRs to your sales team",
        "Outreach to hundreds of prospects a week",
        "Fill up your meetings calendar",
        "Identify prospects based on your specific criteria",
      ],
    },
    {
      name: "Fractional CMO",
      points: [
        "Add an experienced crypto CMO to your team on an as-needed basis",
        "Rent our brains",
        "Tap our collective experience managing 1,200+ crypto marketing campaigns",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            A suite of marketing services designed to help Web3 companies grow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a refined pairing of crypto marketing and growth services tailored to growing Web3 brands.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 border border-border">
          <h3 className="text-xl font-semibold mb-4">{services[activeTab].name}</h3>
          <ul className="space-y-3">
            {services[activeTab].points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
            Get Your Free Custom Marketing Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
