import { useState, useEffect } from 'react';
import { EditableSection } from '@/components/EditableSection';
import { contentAPI } from '@/services/api';
import whyChooseImage from '@/assets/home/home-004-why-choose-new.png';

export function WhyChooseSection() {
  const [activeNumber, setActiveNumber] = useState(1);
  const [reason1, setReason1] = useState('Meta Partner Certified');
  const [reason2, setReason2] = useState('10+ Years Of Proven Experience');
  const [reason3, setReason3] = useState('Revenue-Focused Marketing');
  const [reason4, setReason4] = useState('Custom Strategies, No Templates');
  const [reason5, setReason5] = useState('Expert-Led Campaign Execution');
  const [reason6, setReason6] = useState('Results In Competitive Markets');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await contentAPI.getPageContent('home');
        const r1 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason1');
        const r2 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason2');
        const r3 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason3');
        const r4 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason4');
        const r5 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason5');
        const r6 = content.find((c: any) => c.section === 'why-choose' && c.key === 'reason6');
        
        if (r1) setReason1(r1.value);
        if (r2) setReason2(r2.value);
        if (r3) setReason3(r3.value);
        if (r4) setReason4(r4.value);
        if (r5) setReason5(r5.value);
        if (r6) setReason6(r6.value);
      } catch (error) {
        console.log('Using default content');
      } finally {
        setIsLoading(false);
      }
    };
    loadContent();
  }, []);

  const reasons = [
    { number: 1, text: reason1 },
    { number: 2, text: reason2 },
    { number: 3, text: reason3 },
    { number: 4, text: reason4 },
    { number: 5, text: reason5 },
    { number: 6, text: reason6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNumber((prev) => (prev === 6 ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <section className="relative bg-white h-96 flex items-center justify-center"><div className="text-gray-600">Loading...</div></section>;
  }

  return (
    <EditableSection
      sectionId="why-choose"
      sectionName="Why Choose Section"
      page="home"
      fields={[
        { key: 'reason1', label: 'Reason 1', type: 'text', value: reason1 },
        { key: 'reason2', label: 'Reason 2', type: 'text', value: reason2 },
        { key: 'reason3', label: 'Reason 3', type: 'text', value: reason3 },
        { key: 'reason4', label: 'Reason 4', type: 'text', value: reason4 },
        { key: 'reason5', label: 'Reason 5', type: 'text', value: reason5 },
        { key: 'reason6', label: 'Reason 6', type: 'text', value: reason6 }
      ]}
      onSave={(data) => {
        setReason1(data.reason1);
        setReason2(data.reason2);
        setReason3(data.reason3);
        setReason4(data.reason4);
        setReason5(data.reason5);
        setReason6(data.reason6);
      }}
    >
      <section className="relative bg-white">
        <div className="relative">
          <img src={whyChooseImage} alt="Why Businesses Choose Digital Advento" className="w-full block" />
          
          <div className="absolute top-[45%]" style={{ right: 'calc(20% - 30px)' }}>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {reasons.map((reason) => (
                <div key={reason.number} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-500 min-w-[25px] sm:min-w-[30px] text-center ${activeNumber === reason.number ? 'text-yellow-600 scale-125 animate-pulse-glow' : 'text-gray-500'}`}>
                    {reason.number}
                  </span>
                  
                  <div className={`w-0.5 h-6 sm:h-7 md:h-9 lg:h-10 transition-all duration-500 ${activeNumber === reason.number ? 'bg-yellow-600 shadow-glow' : 'bg-gray-600'}`} />
                  
                  <span className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-500 whitespace-nowrap ${activeNumber === reason.number ? 'text-yellow-600 animate-color-shift' : 'text-gray-300'}`}>
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes pulse-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.6), 0 0 30px rgba(234, 179, 8, 0.4); }
            50% { text-shadow: 0 0 20px rgba(234, 179, 8, 1), 0 0 30px rgba(234, 179, 8, 0.8), 0 0 40px rgba(234, 179, 8, 0.6); }
          }
          @keyframes color-shift {
            0%, 100% { color: #eab308; text-shadow: 0 0 10px rgba(234, 179, 8, 0.5); }
            25% { color: #f59e0b; text-shadow: 0 0 15px rgba(245, 158, 11, 0.6); }
            50% { color: #d97706; text-shadow: 0 0 20px rgba(217, 119, 6, 0.7); }
            75% { color: #f59e0b; text-shadow: 0 0 15px rgba(245, 158, 11, 0.6); }
          }
          .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
          .animate-color-shift { animation: color-shift 2s ease-in-out infinite; }
          .shadow-glow { box-shadow: 0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.6); }
        `}} />
      </section>
    </EditableSection>
  );
}
