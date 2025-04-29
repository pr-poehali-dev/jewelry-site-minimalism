import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    name: "Classique",
    description: "Классические украшения вне времени",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Élément",
    description: "Вдохновлено силой природы",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];

const Collections = () => {
  return (
    <section className="py-16 md:py-24 bg-jewelry-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-cormorant mb-4 font-light">
            Наши коллекции
          </h2>
          <p className="text-jewelry-dark/70">
            Каждая коллекция рассказывает свою неповторимую историю через
            изысканные украшения, созданные с любовью и вниманием к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative overflow-hidden h-96 md:h-[500px]"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jewelry-dark/70 to-transparent transition-opacity duration-300"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl md:text-3xl font-cormorant text-jewelry-light mb-3">
                  {collection.name}
                </h3>
                <p className="text-jewelry-light/90 mb-4 max-w-xs">
                  {collection.description}
                </p>
                <span className="inline-block py-2 border-b border-jewelry-gold text-jewelry-light tracking-wider text-sm group-hover:border-jewelry-light transition-colors">
                  ИССЛЕДОВАТЬ
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
