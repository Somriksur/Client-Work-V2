import industriesImage from '@/assets/home/home-007-partners-industries.png';

export function PartnersSection() {
  return (
    <section className="bg-[#E5E5E5]">
      <div>
        <img src={industriesImage} alt="Industries We Serve" className="w-full block" />
      </div>
    </section>
  );
}