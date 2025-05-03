
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-jewelry-cream min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Заголовок */}
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-cormorant font-light tracking-wider mb-3">О НАС</h1>
          <p className="text-sm md:text-base text-jewelry-dark/70 max-w-2xl mx-auto">
            Создаем уникальные украшения с любовью и вниманием к деталям с 2010 года
          </p>
        </div>

        {/* История */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-cormorant mb-6">НАША ИСТОРИЯ</h2>
              <p className="text-jewelry-text mb-4 font-light">
                Ювелирный дом ЭЛЕГАНС начался с небольшой мастерской, основанной талантливым ювелиром Анной Соколовой в 2010 году. 
                Уже тогда наши украшения отличались особым стилем и изысканностью, привлекая внимание ценителей искусства.
              </p>
              <p className="text-jewelry-text mb-4 font-light">
                За 15 лет мы превратились в один из ведущих ювелирных брендов, известных своим неповторимым дизайном и высочайшим качеством. 
                Сегодня наша команда состоит из 30 мастеров-ювелиров, каждый из которых вносит уникальный вклад в создание коллекций.
              </p>
              <p className="text-jewelry-text font-light">
                Мы гордимся тем, что наши украшения носят не только в России, но и за рубежом, а некоторые изделия находятся в частных коллекциях и музеях.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1659936849162-7a3bcbfeb4f6?w=800&auto=format&fit=crop" 
                alt="История нашего бренда" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-jewelry-beige/30" />

        {/* Принципы */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl font-cormorant mb-12 text-center">НАШИ ПРИНЦИПЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white shadow-sm animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-beige mb-4">
                <span className="text-xl font-cormorant">01</span>
              </div>
              <h3 className="text-lg font-cormorant mb-3">Качество</h3>
              <p className="text-sm text-jewelry-text/80 font-light">
                Мы используем только лучшие материалы и драгоценные камни, проходящие тщательный отбор и сертификацию.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-beige mb-4">
                <span className="text-xl font-cormorant">02</span>
              </div>
              <h3 className="text-lg font-cormorant mb-3">Мастерство</h3>
              <p className="text-sm text-jewelry-text/80 font-light">
                Наши ювелиры — настоящие мастера своего дела, многие из которых имеют династический опыт в ювелирном искусстве.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-beige mb-4">
                <span className="text-xl font-cormorant">03</span>
              </div>
              <h3 className="text-lg font-cormorant mb-3">Уникальность</h3>
              <p className="text-sm text-jewelry-text/80 font-light">
                Каждое украшение имеет свою историю и характер. Мы создаем не просто аксессуары, а произведения искусства.
              </p>
            </div>
          </div>
        </section>

        {/* Команда */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-2xl font-cormorant mb-12 text-center">НАША КОМАНДА</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop" 
                  alt="Анна Соколова" 
                  className="w-full aspect-square object-cover hover-scale"
                />
              </div>
              <h3 className="font-cormorant font-medium">Анна Соколова</h3>
              <p className="text-sm text-jewelry-dark/70">Основатель, главный дизайнер</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&auto=format&fit=crop" 
                  alt="Михаил Волков" 
                  className="w-full aspect-square object-cover hover-scale"
                />
              </div>
              <h3 className="font-cormorant font-medium">Михаил Волков</h3>
              <p className="text-sm text-jewelry-dark/70">Главный ювелир</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop" 
                  alt="Елена Морозова" 
                  className="w-full aspect-square object-cover hover-scale"
                />
              </div>
              <h3 className="font-cormorant font-medium">Елена Морозова</h3>
              <p className="text-sm text-jewelry-dark/70">Креативный директор</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1548449112-96a38a643324?w=500&auto=format&fit=crop" 
                  alt="Дмитрий Соловьев" 
                  className="w-full aspect-square object-cover hover-scale"
                />
              </div>
              <h3 className="font-cormorant font-medium">Дмитрий Соловьев</h3>
              <p className="text-sm text-jewelry-dark/70">Главный геммолог</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
