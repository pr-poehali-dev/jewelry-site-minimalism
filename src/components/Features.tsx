import { Award, Diamond, Clock, Gift } from "lucide-react";

const features = [
  {
    icon: <Diamond size={24} className="text-jewelry-gold" />,
    title: "Высочайшее качество",
    description: "Только драгоценные металлы и камни высшего качества",
  },
  {
    icon: <Award size={24} className="text-jewelry-gold" />,
    title: "Авторский дизайн",
    description: "Уникальные украшения, созданные талантливыми дизайнерами",
  },
  {
    icon: <Clock size={24} className="text-jewelry-gold" />,
    title: "Долговечность",
    description: "Создаем украшения, которые становятся семейными реликвиями",
  },
  {
    icon: <Gift size={24} className="text-jewelry-gold" />,
    title: "Подарочная упаковка",
    description: "Элегантная упаковка для особого впечатления",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-cormorant mb-4 font-light">
            Почему выбирают нас
          </h2>
          <p className="text-jewelry-dark/70">
            Наша миссия — создавать украшения, которые становятся частью ваших
            самых драгоценных моментов и подчеркивают вашу индивидуальность.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-jewelry-beige/30 hover:bg-jewelry-beige/50 transition-colors"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-cormorant mb-3">{feature.title}</h3>
              <p className="text-jewelry-dark/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
