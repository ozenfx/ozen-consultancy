
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Vision />
      <Mission />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
