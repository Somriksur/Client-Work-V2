import aboutImageDesktop from "@/assets/home/about-desktop.webp";
import aboutImageMobile from "@/assets/home/about-mobile.webp";

export function AboutSection() {
  return (
    <section className="relative bg-[#FFFFFF]">
      {/* Desktop View */}
      <div className="hidden md:block min-h-[500px] md:min-h-[600px] flex items-start pt-8 md:pt-12 relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutImageDesktop}
            alt="About Us - Digital Marketing Success"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-8 md:pt-12">
          <div className="max-w-xl">
            
            {/* Text Content */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#060815] mb-4">
                About Us
              </h2>
              
              <div className="space-y-2 text-[#060815]">
                <p className="text-xs md:text-sm leading-relaxed">
                  We are a digital marketing agency known for setting high standards in strategy, execution, and client satisfaction. Our focus is on delivering measurable results.
                </p>
                
                <p className="text-xs md:text-sm leading-relaxed">
                  Deliver exceptional results through creativity, innovation, and data-driven decisions.
                </p>
                
                <p className="text-xs md:text-sm leading-relaxed">
                  As a leading digital marketing agency, we deeply analyze your goals, online presence, and competitors to craft strategies that drive sustainable business growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile View with Text Overlay */}
      <div className="block md:hidden relative bg-[#FFFFFF]">
        {/* Background Image */}
        <img
          src={aboutImageMobile}
          alt="About Us"
          className="w-full h-auto"
        />

        {/* Text Overlay - Positioned on the image */}
        <div className="absolute top-0 left-0 right-0 bottom-0 px-4 pt-[150%] pb-20">
          <div className="space-y-3">
            <h2 className="text-[32px] font-bold text-black">
              About Us
            </h2>
            
            <div className="space-y-2 text-black text-[28px] leading-relaxed">
              <p>
                We are a trusted, performance-oriented digital marketing agency known for setting high standards in strategy, execution, and client satisfaction. Our focus is simple: Deliver exceptional results through creativity, innovation, and data-driven decisions.
              </p>
              
              <p>
                As a leading digital marketing agency, we deeply analyze your goals, online presence, and competitors to craft data-driven strategies focused on sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
