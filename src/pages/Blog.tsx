import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    { title: "The Ultimate Guide to Web3 Marketing in 2024", category: "Marketing", date: "Dec 15, 2024" },
    { title: "How to Build a Crypto Community from Scratch", category: "Community", date: "Dec 10, 2024" },
    { title: "Top 10 Crypto Influencers to Watch", category: "Influencers", date: "Dec 5, 2024" },
    { title: "PR Strategies for Blockchain Startups", category: "PR", date: "Nov 28, 2024" },
    { title: "Tokenomics 101: A Beginner's Guide", category: "Education", date: "Nov 20, 2024" },
    { title: "Social Media Best Practices for Web3", category: "Social", date: "Nov 15, 2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights, guides, and news from the world of Web3 marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-card rounded-xl border border-border overflow-hidden group cursor-pointer hover:border-primary transition-colors">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
