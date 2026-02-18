import performanceImage from '@/assets/home/home-003-performance.png';

export function PerformanceSection() {
  return (
    <section className="bg-white">
      <div>
        <img src={performanceImage} alt="Our Performance-Driven Process" className="w-full block" />
      </div>
    </section>
  );
}