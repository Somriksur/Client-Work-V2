import servicesImageDesktop from '@/assets/home/home-003-services.png';
import servicesImageMobile from '@/assets/home/home-003-services-mobile-new.png';

interface ServicesSectionProps {
  onNavigate?: (page: 'home' | 'services' | 'content-marketing' | 'google-ads' | 'meta-ads' | 'shopify' | 'social-media') => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const services = [
    {
      id: 'seo',
      title: 'SEO',
      page: null, // No dedicated page yet
    },
    {
      id: 'google-ads',
      title: 'Google Ads',
      page: 'google-ads' as const,
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      page: 'meta-ads' as const,
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      page: 'social-media' as const,
    },
    {
      id: 'website',
      title: 'Website Design & Development',
      page: null, // No dedicated page yet
    },
    {
      id: 'shopify',
      title: 'Shopify Development',
      page: 'shopify' as const,
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      page: 'content-marketing' as const,
    },
    {
      id: 'branding',
      title: 'Branding & Digital PR',
      page: 'services' as const,
    },
  ];

  const handleLearnMore = (service: typeof services[0]) => {
    if (service.page && onNavigate) {
      onNavigate(service.page);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white">
      {/* Desktop Background Image */}
      <div className="hidden md:block relative">
        <img src={servicesImageDesktop} alt="Our Services" className="w-full block" />
        
        {/* Service Cards Overlay */}
        <div className="absolute inset-0">
          {/* Row 1 - Top 4 cards */}
          <div className="absolute top-[15%] left-[7.5%] right-[7.5%] h-[38%] grid grid-cols-4 gap-[2%]">
            {/* SEO */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[0])}
                className="absolute bottom-[3%] left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Google Ads */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[1])}
                className="absolute bottom-[3%] left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Meta Ads */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[2])}
                className="absolute bottom-[3%] left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Social Media Marketing */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[3])}
                className="absolute bottom-[3%] left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
              >
                LEARN MORE →
              </button>
            </div>
          </div>
          
          {/* Row 2 - Bottom 4 cards */}
          <div className="absolute bottom-[10%] left-[7.5%] right-[7.5%] h-[35%] grid grid-cols-4 gap-[2%]">
            {/* Website Design & Development */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[4])}
                className="absolute left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
                style={{ bottom: 'calc(3% - 2px)' }}
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Shopify Development */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[5])}
                className="absolute left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
                style={{ bottom: 'calc(3% - 2px)' }}
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Content Marketing */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[6])}
                className="absolute left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
                style={{ bottom: 'calc(3% - 2px)' }}
              >
                LEARN MORE →
              </button>
            </div>
            
            {/* Branding & Digital PR */}
            <div className="relative">
              <button
                onClick={() => handleLearnMore(services[7])}
                className="absolute left-[6%] bg-white text-gray-900 px-3 py-1.5 rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 transition-colors"
                style={{ bottom: 'calc(3% - 2px)' }}
              >
                LEARN MORE →
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Services Image */}
      <div className="block md:hidden relative">
        <img src={servicesImageMobile} alt="Our Services" className="w-full block" />
        
        {/* Service Cards Overlay for Mobile */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Social Media Marketing - Card 1 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '8.5%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('social-media');
              }
            }}
          >
            <span className="sr-only">Social Media Marketing</span>
          </div>
          
          {/* SEO - Card 2 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '21%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="sr-only">SEO</span>
          </div>
          
          {/* Google Ads - Card 3 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '33.5%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('google-ads');
              }
            }}
          >
            <span className="sr-only">Google Ads</span>
          </div>
          
          {/* Meta Ads - Card 4 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '46%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('meta-ads');
              }
            }}
          >
            <span className="sr-only">Meta Ads</span>
          </div>
          
          {/* Website Design - Card 5 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '58.5%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="sr-only">Website Design & Development</span>
          </div>
          
          {/* Shopify - Card 6 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '71%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('shopify');
              }
            }}
          >
            <span className="sr-only">Shopify Development</span>
          </div>
          
          {/* Content Marketing - Card 7 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '83.5%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('content-marketing');
              }
            }}
          >
            <span className="sr-only">Content Marketing</span>
          </div>
          
          {/* Branding - Card 8 */}
          <div 
            className="absolute cursor-pointer"
            style={{ 
              top: '96%', 
              left: '6%', 
              width: '88%', 
              height: '11.5%'
            }}
            onClick={() => {
              if (onNavigate) {
                onNavigate('services');
              }
            }}
          >
            <span className="sr-only">Branding & Digital PR</span>
          </div>
        </div>
      </div>
    </section>
  );
}



