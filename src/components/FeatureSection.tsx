import { Button } from "@/components/ui/button";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  ctaText: string;
  reversed?: boolean;
  bgColor?: string;
  imageSrc?: string;
}

const FeatureSection = ({
  title,
  subtitle,
  description,
  stats,
  ctaText,
  reversed = false,
  bgColor = "bg-background",
  imageSrc,
}: FeatureSectionProps) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Content */}
          <div className={reversed ? "lg:order-2" : ""}>
            <h2 className="section-title">{title}</h2>
            <h3 className="section-subtitle text-muted-foreground">{subtitle}</h3>
            <p className="text-muted-foreground mb-8">{description}</p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              {ctaText}
            </Button>
          </div>

          {/* Illustration */}
          <div className={`${reversed ? "lg:order-1" : ""}`}>
            {imageSrc ? (
              <div className="rounded-2xl overflow-hidden aspect-square w-1/2 mx-auto">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl aspect-square flex items-center justify-center w-1/2 mx-auto">
                <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
