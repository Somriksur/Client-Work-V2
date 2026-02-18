import businessGrowthImage from '@/assets/home/home-002-business-growth.png';

export function BusinessGrowthSection() {
  return (
    <section className="bg-white">
      <div>
        <img src={businessGrowthImage} alt="How Can We Help Your Business Grow" className="w-full block" />
      </div>
    </section>
  );
}