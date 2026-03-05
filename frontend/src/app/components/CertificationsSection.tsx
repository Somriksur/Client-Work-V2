import certificationsImageDesktop from '@/assets/home/certifications-desktop.webp';
import certificationsImageMobile from '@/assets/home/certifications-mobile.webp';

export function CertificationsSection() {
  return (
    <section className="bg-white">
      <div className="hidden md:block">
        <img src={certificationsImageDesktop} alt="Our Certifications" className="w-full block" />
      </div>
      <div className="block md:hidden">
        <img src={certificationsImageMobile} alt="Our Certifications" className="w-full block" />
      </div>
    </section>
  );
}