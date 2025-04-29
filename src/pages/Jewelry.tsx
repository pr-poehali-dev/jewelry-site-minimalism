
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Filter, Heart } from "lucide-react";

const Jewelry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jewelryCategories = [
    { name: "Кольца", count: 42 },
    { name: "Серьги", count: 38 },
    { name: "Колье", count: 24 },
    { name: "Браслеты", count: 19 },
    { name: "Подвески", count: 15 },
  ];

  const jewelryItems = [
    {
      id: 1,
      name: "Золотое кольцо с бриллиантом",
      price: "85 000 ₽",
      image: "https://images.unsplash.com/photo-1611955167811-4711fc3a8b95?w=500&auto=format&fit=crop",
      category: "Кольца",
    },
    {
      id: 2,
      name: "Серебряные серьги с жемчугом",
      price: "28 500 ₽",
      image: "https://images.unsplash.com/photo-1620830880926-a438202c0e9b?w=500&auto=format&fit=crop",
      category: "Серьги",
    },
    {
      id: 3,
      name: "Платиновое колье",
      price: "120 000 ₽",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop",
      category: "Колье",
    },
    {
      id: 4,
      name: "Браслет из розового золота",
      price: "56 400 ₽",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop",
      category: "Браслеты",
    },
    {
      id: 5,
      name: "Кольцо с изумрудом",
      price: "145 000 ₽",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop",
      category: "Кольца",
    },
    {
      id: 6,
      name: "Золотые серьги-кольца",
      price: "32 800 ₽",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=500&auto=format&fit=crop",
      category: "Серьги",
    },
  ];

  return (
    <div className="bg-jewelry-cream min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-cormorant font-light tracking-wider mb-3">УКРАШЕНИЯ</h1>
          <p className="text-sm md:text-base text-jewelry-dark/70 max-w-2xl mx-auto">
            Изысканные украшения ручной работы, созданные с вниманием к деталям. 
            Каждое изделие – произведение искусства, которое подчеркнет вашу индивидуальность.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 bg-white p-6 rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Фильтры</h2>
                <Filter size={18} />
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Категории</h3>
                <ul className="space-y-2">
                  {jewelryCategories.map((category) => (
                    <li key={category.name} className="flex justify-between items-center">
                      <button className="text-sm hover:text-jewelry-gold transition-colors">
                        {category.name}
                      </button>
                      <span className="text-xs text-jewelry-dark/50">({category.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Separator className="my-6" />
              
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Материал</h3>
                <ul className="space-y-2">
                  <li><button className="text-sm hover:text-jewelry-gold transition-colors">Золото</button></li>
                  <li><button className="text-sm hover:text-jewelry-gold transition-colors">Серебро</button></li>
                  <li><button className="text-sm hover:text-jewelry-gold transition-colors">Платина</button></li>
                  <li><button className="text-sm hover:text-jewelry-gold transition-colors">Розовое золото</button></li>
                </ul>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Цена</h3>
                <div className="flex space-x-2">
                  <input type="text" placeholder="От" className="w-1/2 p-2 text-sm border border-jewelry-beige rounded-sm" />
                  <input type="text" placeholder="До" className="w-1/2 p-2 text-sm border border-jewelry-beige rounded-sm" />
                </div>
                <Button className="w-full mt-4 bg-jewelry-dark hover:bg-jewelry-gold text-white">
                  Применить
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jewelryItems.map((item) => (
                <div key={item.id} className="group relative bg-white p-4 rounded-sm shadow-sm hover-scale">
                  <div className="relative overflow-hidden mb-4 aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-jewelry-gold hover:text-white transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-jewelry-dark/60">{item.category}</span>
                    <h3 className="font-cormorant text-base font-medium mb-1">{item.name}</h3>
                    <p className="text-sm font-light">{item.price}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" className="bg-white hover:bg-jewelry-gold hover:text-white border-jewelry-gold transition-colors">
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-jewelry-dark hover:bg-jewelry-gold hover:text-white hover:border-jewelry-gold flex items-center gap-2">
                Показать больше <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jewelry;
