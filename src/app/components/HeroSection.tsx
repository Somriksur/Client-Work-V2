import { useState, useEffect } from 'react';
import { EditableSection } from '@/components/EditableSection';
import { contentAPI } from '@/services/api';
import { UniversalForm } from '@/components/UniversalForm';
import heroImageDesktop from '@/assets/home/home-001-hero-new.png';
import heroImageMobile from '@/assets/home/home-001-hero-mobile.png';

export function HeroSection() {
  const [formHeading, setFormHeading] = useState('Talk To Our Expert');
  const [buttonText, setButtonText] = useState('GET STARTED NOW');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentAPI.getPageContent('home');
        
        const heroHeading = content.find(
          (c: any) => c.section === 'hero' && c.key === 'formHeading'
        );
        const heroButton = content.find(
          (c: any) => c.section === 'hero' && c.key === 'buttonText'
        );
        
        if (heroHeading) setFormHeading(heroHeading.value);
        if (heroButton) setButtonText(heroButton.value);
      } catch (error) {
        // Silently use default content
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <EditableSection
      sectionId="hero"
      sectionName="Hero Section"
      page="home"
      fields={[
        {
          key: 'formHeading',
          label: 'Form Heading',
          type: 'text',
          value: formHeading
        },
        {
          key: 'buttonText',
          label: 'Button Text',
          type: 'text',
          value: buttonText
        }
      ]}
      onSave={(data) => {
        setFormHeading(data.formHeading);
        setButtonText(data.buttonText);
      }}
    >
      <section className="relative w-full block m-0 p-0 leading-none">
        {/* Desktop Hero Image */}
        <div className="hidden md:block w-full m-0 p-0 leading-none" style={{ fontSize: 0 }}>
          <img 
            src={heroImageDesktop} 
            alt="Build A Brand People Trust" 
            className="w-full h-auto block m-0 p-0 leading-none"
            style={{ verticalAlign: 'bottom', display: 'block' }}
          />
        </div>
        
        {/* Mobile Hero Image */}
        <div className="block md:hidden w-full m-0 p-0 leading-none" style={{ fontSize: 0 }}>
          <img 
            src={heroImageMobile} 
            alt="Build A Brand People Trust" 
            className="w-full h-auto block m-0 p-0 leading-none"
            style={{ verticalAlign: 'bottom', display: 'block' }}
          />
        </div>
        
        {/* Form Overlay - Desktop */}
        <div className="hidden md:flex absolute top-0 right-0 w-full h-full items-start justify-end pt-2 sm:pt-3 md:pt-4 lg:pt-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pointer-events-none">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] pointer-events-auto mr-1 sm:mr-2 md:mr-3 lg:mr-4">
            <UniversalForm 
              formHeading={formHeading}
              buttonText={buttonText}
              pageId="home"
            />
          </div>
        </div>
        
        {/* Form Overlay - Mobile */}
        <div className="flex md:hidden absolute top-0 right-0 w-full h-full items-start justify-end pt-4 px-4 pointer-events-none">
          <div className="w-full max-w-[280px] pointer-events-auto mr-2">
            <UniversalForm 
              formHeading={formHeading}
              buttonText={buttonText}
              pageId="home"
            />
          </div>
        </div>
      </section>
    </EditableSection>
  );
}
