import industriesImageDesktop from '@/assets/home/home-007-partners-industries.png';
import industriesImageMobile from '@/assets/home/home-007-partners-mobile.png';

export function PartnersSection() {
  return (
    <section className="bg-[#E5E5E5]">
      <div className="hidden md:block">
        <img src={industriesImageDesktop} alt="Industries We Serve" className="w-full block" />
      </div>
      <div className="block md:hidden">
        <img src={industriesImageMobile} alt="Industries We Serve" className="w-full block" />
      </div>
    </section>
  );
}