import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Золотое кольцо с бриллиантом",
    category: "Кольца",
    price: 68500,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    name: "Серебряные серьги с сапфиром",
    category: "Серьги",
    price: 42300,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    name: "Жемчужное ожерелье",
    category: "Ожерелья",
    price: 35900,
    image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const FeaturedProducts = () => {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  return (
    <section className="py-16 md:py-24 bg-jewelry-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-cormorant mb-3 font-light">
              Избранные изделия
            </h2>
            <p className="text-jewelry-dark/70 max-w-xl">
              Изысканные украшения, созданные с использованием драгоценных металлов и камней исключительного качества.
            </p>
          </div>
          <Link
            to="/jewelry"
            className="hidden md:flex items-center mt-4 md:mt-0 text-jewelry-dark group hover:text-jewelry-gold transition-colors"
          >
            <span className="mr-2">Все украшения</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/jewelry/${product.id}`}
              className="product-hover group"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-jewelry-beige/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProductId === product.id ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <div className="text-center">
                <h3 className="font-cormorant text-xl mb-1 group-hover:text-jewelry-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-jewelry-dark/70 text-sm mb-2">
                  {product.category}
                </p>
                <p className="font-medium">{formatPrice(product.price)} ₽</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/jewelry"
            className="inline-flex items-center text-jewelry-dark hover:text-jewelry-gold transition-colors"
          >
            <span className="mr-2">Все украшения</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
