import heroImage from '@/assets/services/build-a-brand/build-a-brand-hero.webp';
import { UniversalForm } from '@/components/UniversalForm';

export function BuildABrandDesktopHero() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Build A Brand People Trust"
        className="w-full h-auto block"
      />

      {/* Form Overlay */}
      <div className="absolute top-0 right-0 w-full h-full flex items-start justify-end pt-8 px-8 lg:px-16 pointer-events-none">
        <div className="w-full max-w-[380px] pointer-events-auto">
          <UniversalForm
            formHeading="Get A Marketing Audit"
            buttonText="GET STARTED NOW"
            pageId="build-a-brand"
          />
        </div>
      </div>
    </section>
  );
}
