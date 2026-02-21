import { useState, useEffect } from 'react';
import { EditableSection } from '@/components/EditableSection';
import { contentAPI } from '@/services/api';
import aboutImage from '@/assets/home/home-002-about-new.png';

export function AboutSection() {
  const [heading, setHeading] = useState('About Us');
  const [paragraph1, setParagraph1] = useState('We are a digital marketing agency known for setting high standards in strategy, execution, and client satisfaction. Our focus is simple: Deliver exceptional results through creativity, innovation, and data-driven decisions.');
  const [paragraph2, setParagraph2] = useState('As a leading digital marketing agency, we deeply analyze your goals, online presence, and competitors to craft data-driven strategies focused on sustainable business growth.');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentAPI.getPageContent('home');
        const aboutHeading = content.find((c: any) => c.section === 'about' && c.key === 'heading');
        const aboutP1 = content.find((c: any) => c.section === 'about' && c.key === 'paragraph1');
        const aboutP2 = content.find((c: any) => c.section === 'about' && c.key === 'paragraph2');
        
        if (aboutHeading) setHeading(aboutHeading.value);
        if (aboutP1) setParagraph1(aboutP1.value);
        if (aboutP2) setParagraph2(aboutP2.value);
      } catch (error) {
        console.log('Using default content');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  if (isLoading) {
    return <section className="relative bg-white h-96 flex items-center justify-center"><div className="text-gray-600">Loading...</div></section>;
  }

  return (
    <EditableSection
      sectionId="about"
      sectionName="About Section"
      page="home"
      fields={[
        { key: 'heading', label: 'Heading', type: 'text', value: heading },
        { key: 'paragraph1', label: 'First Paragraph', type: 'textarea', value: paragraph1 },
        { key: 'paragraph2', label: 'Second Paragraph', type: 'textarea', value: paragraph2 }
      ]}
      onSave={(data) => {
        setHeading(data.heading);
        setParagraph1(data.paragraph1);
        setParagraph2(data.paragraph2);
      }}
    >
      <section className="relative bg-white">
        <div className="relative">
          <img src={aboutImage} alt="About Us" className="w-full block" />
          
          <div className="absolute left-[5%] max-w-3xl" style={{ top: '50px' }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4 sm:mb-6">
              {heading}
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed mb-3">
              {paragraph1}
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
              {paragraph2}
            </p>
          </div>
        </div>
      </section>
    </EditableSection>
  );
}
