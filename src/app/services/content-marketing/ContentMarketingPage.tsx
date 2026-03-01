import { ContentMarketingHero } from './ContentMarketingHero';
import { ContentChannelsSection } from './ContentChannelsSection';
import { ContentStrategySection } from './ContentStrategySection';
import { SEOContentSection } from './SEOContentSection';
import { WebsiteLandingSection } from './WebsiteLandingSection';
import { BlogLeadershipSection } from './BlogLeadershipSection';
import { SocialShortFormSection } from './SocialShortFormSection';
import { ContentOptimizationSection } from './ContentOptimizationSection';
import { WhatWeFocusOnSection } from './WhatWeFocusOnSection';
import { OurStrengthSection } from './OurStrengthSection';
import { ReadyToBuildSection } from './ReadyToBuildSection';
import { ContentMarketingFAQSection } from './ContentMarketingFAQSection';
import { Footer } from '../../components/Footer';

export function ContentMarketingPage() {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <ContentMarketingHero />
      <ContentChannelsSection />
      <ContentStrategySection />
      <SEOContentSection />
      <WebsiteLandingSection />
      <BlogLeadershipSection />
      <SocialShortFormSection />
      <ContentOptimizationSection />
      <WhatWeFocusOnSection />
      <OurStrengthSection />
      <ReadyToBuildSection />
      <ContentMarketingFAQSection />
      <Footer />
    </div>
  );
}
