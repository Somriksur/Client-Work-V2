export function DesktopSection03() {
  const steps = [
    "Understand Your Business & Goals",
    "Define Your Brand Message & Positioning",
    "Create Consistent Brand Assets",
    "Execute PR With Clear Purpose",
    "Track Impact And Refine"
  ];

  return (
    <section className="bg-[#E8F9FF] py-20">
      <div className="container mx-auto px-8 lg:px-20 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black inline-block relative pb-2">
            How We Work
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"></div>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-5 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Plus Icon */}
              <div className="text-black text-5xl font-light mb-6 leading-none">+</div>
              
              {/* Step Text */}
              <div className="text-center w-full">
                <p className="text-black font-normal text-base leading-snug mb-3 px-2">
                  {step}
                </p>
                
                {/* Underline */}
                <div className="w-full h-[2px] bg-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-black text-base font-normal">
            Simple. Transparent. Effective.
          </p>
        </div>
      </div>
    </section>
  );
}
