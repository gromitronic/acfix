import { BlogPreview } from "@/components/home/BlogPreview";
import { CostSection } from "@/components/home/CostSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InfographicSection } from "@/components/home/InfographicSection";
import { LocalSection } from "@/components/home/LocalSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { referralServiceSchema } from "@/lib/schema";
import { cities } from "@/src/data/cities";

export default function HomePage() {
  const city = cities[0];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(referralServiceSchema()) }}
      />
      <Hero city={city} />
      <ProblemSection />
      <CostSection />
      <InfographicSection />
      <SolutionSection />
      <HowItWorks />
      <LocalSection />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}
