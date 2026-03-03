import { BuildABrandHero } from './BuildABrandHero';
import { Section01 } from './Section01';
import { Section02 } from './Section02';
import { Section03 } from './Section03';
import { Section04 } from './Section04';
import { Section07 } from './Section07';
import { Section08 } from './Section08';
import { BuildABrandFAQ } from './BuildABrandFAQ';
import { Footer } from '../../components/Footer';

export function BuildABrandPage() {
  return (
    <div className="w-full">
      <BuildABrandHero />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section07 />
      <Section08 />
      <BuildABrandFAQ />
      <Footer />
    </div>
  );
}
