import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import MarketingPlan from "./pages/MarketingPlan";
import Influencers from "./pages/services/Influencers";
import PublicRelations from "./pages/services/PublicRelations";
import CommunityManagement from "./pages/services/CommunityManagement";
import SocialMedia from "./pages/services/SocialMedia";
import PPC from "./pages/services/PPC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/public-relations" element={<PublicRelations />} />
          <Route path="/community-management" element={<CommunityManagement />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/web3-ppc-agency" element={<PPC />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
