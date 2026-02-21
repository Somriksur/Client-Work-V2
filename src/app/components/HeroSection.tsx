import { useState, useEffect } from 'react';
import { EditableSection } from '@/components/EditableSection';
import { contentAPI } from '@/services/api';
import { UniversalForm } from '@/components/UniversalForm';
import heroImage from '@/assets/home/home-001-hero-new.png';

export function HeroSection() {
  const [formHeading, setFormHeading] = useState('Get A Marketing Audit');
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
        console.log('Using default content (not logged in or no content yet)');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadContent();
  }, []);

  if (isLoading) {
    return (
      <section className="relative w-full h-96 flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </section>
    );
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
        <div className="w-full block m-0 p-0 leading-none" style={{ fontSize: 0 }}>
          <img 
            src={heroImage} 
            alt="Build A Brand People Trust" 
            className="w-full h-auto block m-0 p-0 leading-none"
            style={{ verticalAlign: 'bottom', display: 'block' }}
          />
        </div>
        
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pointer-events-none">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] pointer-events-auto mr-8 sm:mr-12 md:mr-16 lg:mr-20">
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
