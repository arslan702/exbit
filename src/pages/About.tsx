import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chris from "@/assets/Chris_Law.jpeg";
import Albert from "@/assets/Albert_Edward.jpeg";
import Arthur from "@/assets/Arthur_Kovalskiy.jpeg";
import Daniel from "@/assets/Daniel_Thomas.jpeg";
import Daryl from "@/assets/Daryl_Laurent.jpeg";
import David from "@/assets/David_Scott.jpeg";
import Henry from "@/assets/Henry_William.jpeg";
import Michael from "@/assets/Michael_Arthur.jpeg";
import Paul from "@/assets/Paul_Walker.jpeg";
import Peter from "@/assets/Peter_Tintzmann.jpeg";

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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { name: "Chris Law", image: Chris },
              { name: "Albert Edward", image: Albert },
              { name: "Arthur Kovalskiy", image: Arthur },
              { name: "Daniel Thomas", image: Daniel },
              { name: "Daryl Laurent", image: Daryl },
              { name: "David Scott", image: David },
              { name: "Henry William", image: Henry },
              { name: "Michael Arthur", image: Michael },
              { name: "Paul Walker", image: Paul },
              { name: "Peter Tintzmann", image: Peter },
            ].map((member, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-foreground">{member.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
