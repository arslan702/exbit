import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Exbit different from any other crypto marketing agency?",
      answer: "With clients like Gala, Cosmos, Litecoin, Immutable, and more, Exbit is the most established agency specialized exclusively in the cryptocurrency and web3 industry. Marketing in the crypto industry is very different than marketing in other industries and since 2018, we've been the leaders in the space.",
    },
    {
      question: "What is crypto and Web3 marketing?",
      answer: "Crypto/Web3 marketing is the process of attracting new users, investors, community members, and more to blockchain-related products and services. Exbit has been managing crypto marketing campaigns for the largest brands in the industry since 2018.",
    },
    {
      question: "How much does crypto marketing agency cost?",
      answer: "The answer is it depends! As a full-stack crypto marketing agency, we create custom solutions based on client needs. For a proposal please contact us!",
    },
    {
      question: "Why should I choose Exbit for our crypto marketing and advertising?",
      answer: "Exbit has been in the business of crypto marketing and advertising longer than anyone else. We've built a custom suite of tailor-made crypto advertising solutions and made them available to all of our clients.",
    },
    {
      question: "How can I learn crypto marketing?",
      answer: "The best places to learn about crypto marketing would be Exbit's podcast: Crypto Marketing with Ty Smith.",
    },
    {
      question: "How do you measure success?",
      answer: "We measure success based on our clients' goals and objectives. We use data-driven metrics such as website traffic, token/NFT sales, conversion rates, and engagement rates to measure the effectiveness of our strategies.",
    },
    {
      question: "Can Exbit help with tokenomics consulting?",
      answer: "Yes, Exbit offers expert tokenomics consulting services. Our team provides guidance on designing sustainable and effective tokenomics models.",
    },
    {
      question: "How long does it take to see results?",
      answer: "The time it takes to see results varies depending on the service and the client's goals. SEO and content marketing can take several months to see significant results, while influencer marketing and paid advertising can produce immediate results.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-center mb-12">
          Crypto Marketing Agency FAQs
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left bg-card hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 bg-card">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
