import { useState, useEffect } from 'react';
import { EditableSection } from '@/components/EditableSection';
import { contentAPI } from '@/services/api';
import readyToGrowImage from '@/assets/shared/shared-003-ready-to-grow.png';

export function ReadyToGrowSection() {
  const [buttonText, setButtonText] = useState('Contact Us');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentAPI.getPageContent('home');
        const btn = content.find((c: any) => c.section === 'ready-to-grow' && c.key === 'buttonText');
        if (btn) setButtonText(btn.value);
      } catch (error) {
        console.log('Using default content');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full">
      <img 
        src={readyToGrowImage} 
        alt="Ready To Grow? Talk To Our Experts" 
        className="w-full h-auto block" 
      />
      
      {/* Button Overlay - Centered at bottom */}
      <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16 lg:pb-20">
        <button 
          onClick={handleButtonClick}
          className="bg-[#4A5FD9] hover:bg-[#3A4FC9] text-white font-semibold px-8 py-3 rounded-lg text-base md:text-lg transition-colors shadow-lg"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}