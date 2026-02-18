import certificationsImage from '@/assets/home/home-004-certifications.png';

export function CertificationsSection() {
  return (
    <section className="bg-white">
      <div>
        <img src={certificationsImage} alt="Our Certifications" className="w-full block" />
      </div>
    </section>
  );
}