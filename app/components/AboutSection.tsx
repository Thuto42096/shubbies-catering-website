import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* About Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Shubbies
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Welcome to Shubbies Catering and Decor, where elegance meets excellence. 
              Based in South Africa, we specialize in creating unforgettable experiences 
              for your most cherished events.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With years of expertise in both culinary arts and event decoration, we bring 
              your vision to life with meticulous attention to detail and a passion for 
              perfection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From intimate gatherings to grand celebrations, we pride ourselves on 
              delivering premium service that exceeds expectations every time.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/about.jpg"
              alt="Shubbies Catering and Decor"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive catering and decor solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Premium Catering</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Exquisite menus crafted with the finest ingredients, tailored to your 
              taste and dietary requirements. From traditional South African cuisine 
              to international flavors.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Event Decor</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Transform your venue into a stunning masterpiece with our elegant decor 
              services. We create beautiful, cohesive designs that reflect your style 
              and theme.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Full Event Planning</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Let us handle every detail of your event. From concept to execution, 
              we provide comprehensive planning services to ensure a seamless, 
              stress-free experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

