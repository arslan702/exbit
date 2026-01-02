import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OneImg from "@/assets/one.jpeg";
import TwoImg from "@/assets/two.jpeg";
import ThreeImg from "@/assets/three.jpeg";
import FourImg from "@/assets/four.jpeg";
import FiveImg from "@/assets/five.jpeg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Meet the people behind Exbit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[OneImg, TwoImg, ThreeImg, FourImg, FiveImg].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <img
                  src={img}
                  alt={`Team member ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
