
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 bg-jewelry-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-cormorant font-light tracking-wider mb-6">О НАС</h2>
            <p className="text-jewelry-text mb-6 font-light">
              Ювелирный дом ЭЛЕГАНС был основан в 2010 году с единственной целью — создавать уникальные украшения, 
              которые подчеркивают индивидуальность и красоту их обладателей. Мы работаем только с самыми 
              качественными материалами и драгоценными камнями, уделяя особое внимание деталям и ручной работе.
            </p>
            <p className="text-jewelry-text mb-8 font-light">
              Наши ювелиры совмещают многовековые традиции мастерства с современными технологиями, 
              создавая изделия, которые становятся семейными реликвиями и передаются из поколения в поколение.
            </p>
            
            <Separator className="my-8 bg-jewelry-beige/50" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-cormorant text-jewelry-gold mb-2">15+</p>
                <p className="text-sm text-jewelry-dark/70">лет опыта</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-cormorant text-jewelry-gold mb-2">1200+</p>
                <p className="text-sm text-jewelry-dark/70">счастливых клиентов</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-cormorant text-jewelry-gold mb-2">30+</p>
                <p className="text-sm text-jewelry-dark/70">мастеров-ювелиров</p>
              </div>
            </div>
            
            <Link to="/about">
              <Button variant="outline" className="border-jewelry-dark hover:bg-jewelry-gold hover:text-white hover:border-jewelry-gold flex items-center gap-2">
                Узнать больше <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1611955167811-4711fc3a8b95?w=800&auto=format&fit=crop" 
                alt="Ювелирный мастер за работой" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-12 -right-6 bottom-0 left-12 border-2 border-jewelry-gold -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
