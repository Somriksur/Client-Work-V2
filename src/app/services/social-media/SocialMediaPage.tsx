import { SocialMediaHero } from './SocialMediaHero';
import { PlatformsSection } from './PlatformsSection';
import { ProcessSection } from './ProcessSection';
import { WhyChooseSection } from './WhyChooseSection';
import { ResultsSection } from './ResultsSection';
import { ReadyToTurnSection } from './ReadyToTurnSection';
import { SocialMediaFAQSection } from './SocialMediaFAQSection';
import { Footer } from '../../components/Footer';

export function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <SocialMediaHero />
      <PlatformsSection />
      <ProcessSection />
      <WhyChooseSection />
      <ResultsSection />
      <ReadyToTurnSection />
      <SocialMediaFAQSection />
      <Footer />
    </div>
  );
}
