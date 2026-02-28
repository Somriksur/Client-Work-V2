import performanceImageDesktop from '@/assets/home/home-003-performance.png';
import performanceImageMobile from '@/assets/home/home-004-performance-mobile.png';

export function PerformanceSection() {
  return (
    <section className="bg-white">
      {/* Desktop */}
      <div className="hidden md:block">
        <img src={performanceImageDesktop} alt="Our Performance-Driven Process" className="w-full block" />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <img src={performanceImageMobile} alt="Our Performance-Driven Process" className="w-full block" />
      </div>
    </section>
  );
}