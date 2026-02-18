import readyToGrowImage from '@/assets/shared/shared-003-ready-to-grow.png';

export function ReadyToGrowSection() {
  const handleButtonClick = () => {
    // Add your button click handler here
    console.log('Book a Free Branding & PR Consultation clicked');
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
          Book a Free Branding & PR Consultation
        </button>
      </div>
    </section>
  );
}