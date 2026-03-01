import { ShopifyHero } from './ShopifyHero';
import { ShopifyPlatformsSection } from './ShopifyPlatformsSection';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
import { Section4 } from './Section4';
import { Section5 } from './Section5';
import { Section6 } from './Section6';
import { OurStrengthSection } from './OurStrengthSection';
import { ReadyToLaunchSection } from './ReadyToLaunchSection';
import { ShopifyFAQSection } from './ShopifyFAQSection';
import { Footer } from '../../components/Footer';

export function ShopifyPage() {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <ShopifyHero />
      <ShopifyPlatformsSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <OurStrengthSection />
      <ReadyToLaunchSection />
      <ShopifyFAQSection />
      <Footer />
    </div>
  );
}
