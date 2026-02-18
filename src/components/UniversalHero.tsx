import { useState, useEffect } from 'react';
import { EditableSection } from './EditableSection';
import { contentAPI } from '../services/api';

interface UniversalHeroProps {
  page: string;
  imageSrc: string;
  imageAlt: string;
  defaultHeading?: string;
  defaultButtonText?: string;
}

export function UniversalHero({ 
  page, 
  imageSrc, 
  imageAlt,
  defaultHeading = 'Get A Marketing Audit',
  defaultButtonText = 'GET STARTED NOW'
}: UniversalHeroProps) {
  const [formHeading, setFormHeading] = useState(defaultHeading);
  const [buttonText, setButtonText] = useState(defaultButtonText);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentAPI.getPageContent(page);
        const heroHeading = content.find((c: any) => c.section === 'hero' && c.key === 'formHeading');
        const heroButton = content.find((c: any) => c.section === 'hero' && c.key === 'buttonText');
        
        if (heroHeading) setFormHeading(heroHeading.value);
        if (heroButton) setButtonText(heroButton.value);
      } catch (error) {
        console.log('Using default content');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, [page]);

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
      page={page}
      fields={[
        { key: 'formHeading', label: 'Form Heading', type: 'text', value: formHeading },
        { key: 'buttonText', label: 'Button Text', type: 'text', value: buttonText }
      ]}
      onSave={(data) => {
        setFormHeading(data.formHeading);
        setButtonText(data.buttonText);
      }}
    >
      <section className="relative w-full block m-0 p-0 leading-none">
        <div className="w-full block m-0 p-0 leading-none" style={{ fontSize: 0 }}>
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto block m-0 p-0 leading-none"
            style={{ verticalAlign: 'bottom', display: 'block' }}
          />
        </div>
        
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pointer-events-none">
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] pointer-events-auto mr-8 sm:mr-12 md:mr-16 lg:mr-20">
            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-5">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {formHeading}
              </h2>
              
              <form className="space-y-2.5 sm:space-y-3">
                <div>
                  <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="w-full px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded text-[11px] sm:text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Business Email"
                    className="w-full px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded text-[11px] sm:text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-[11px] sm:text-xs text-gray-700 font-semibold mb-1">
                    Phone Number
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-2 py-1.5 sm:py-2 border-2 border-r-0 border-gray-300 rounded-l bg-gray-50 text-gray-700 font-medium text-[11px] sm:text-xs">
                      +91
                    </div>
                    <input
                      type="tel"
                      placeholder="0000 000 000"
                      className="flex-1 px-2.5 py-1.5 sm:py-2 border-2 border-gray-300 rounded-r text-[11px] sm:text-xs text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    />
                  </div>
                </div>
                
                <div className="flex items-start pt-1">
                  <input
                    type="checkbox"
                    id={`privacy-${page}`}
                    className="mt-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-gray-300 rounded focus:ring-0 focus:ring-offset-0 flex-shrink-0"
                  />
                  <label htmlFor={`privacy-${page}`} className="ml-1.5 text-[9px] sm:text-[10px] text-gray-700 leading-tight">
                    I agree to the Privacy Policy and consent to being contacted.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-bold py-2 sm:py-2.5 rounded transition-all text-[11px] sm:text-xs uppercase tracking-wide mt-2"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </EditableSection>
  );
}
