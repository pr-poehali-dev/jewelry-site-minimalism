import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-jewelry-dark/10"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div
          className={`max-w-xl transition-all duration-1000 ease-out transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-light text-jewelry-light mb-6 leading-tight">
            Вневременная <br /> элегантность <br />{" "}
            <span className="text-jewelry-gold italic">драгоценностей</span>
          </h1>
          <p className="text-jewelry-light text-lg mb-8 max-w-md">
            Откройте мир изысканных украшений, созданных с любовью к деталям и 
            страстью к совершенству.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/collections"
              className="px-8 py-3 bg-jewelry-gold text-jewelry-light font-light tracking-wider hover:bg-jewelry-gold/90 transition-colors inline-block text-center relative overflow-hidden group"
            >
              <span className="relative z-10">КОЛЛЕКЦИИ</span>
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-jewelry-light text-jewelry-light font-light tracking-wider hover:bg-jewelry-light/10 transition-colors inline-block text-center"
            >
              О БРЕНДЕ
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
