import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-jewelry-cream/95 backdrop-blur-sm py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="text-jewelry-dark hover:text-jewelry-gold transition-colors">
              <Search size={20} />
            </button>
          </div>

          <Link
            to="/"
            className="text-2xl md:text-3xl font-cormorant font-light tracking-wider text-center"
          >
            ÉLÉGANCE
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/account"
              className="hidden md:block text-jewelry-dark hover:text-jewelry-gold transition-colors"
            >
              <User size={20} />
            </Link>
            <Link
              to="/cart"
              className="text-jewelry-dark hover:text-jewelry-gold transition-colors"
            >
              <ShoppingBag size={20} />
            </Link>
            <button
              className="md:hidden text-jewelry-dark hover:text-jewelry-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex justify-center space-x-8 text-sm font-light tracking-wider">
            <li>
              <Link
                to="/jewelry"
                className="py-2 relative group transition-colors hover:text-jewelry-gold"
              >
                УКРАШЕНИЯ
                <span className="absolute bottom-0 left-0 w-0 h-px bg-jewelry-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                className="py-2 relative group transition-colors hover:text-jewelry-gold"
              >
                КОЛЛЕКЦИИ
                <span className="absolute bottom-0 left-0 w-0 h-px bg-jewelry-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="py-2 relative group transition-colors hover:text-jewelry-gold"
              >
                О НАС
                <span className="absolute bottom-0 left-0 w-0 h-px bg-jewelry-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="py-2 relative group transition-colors hover:text-jewelry-gold"
              >
                БЛОГ
                <span className="absolute bottom-0 left-0 w-0 h-px bg-jewelry-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 relative group transition-colors hover:text-jewelry-gold"
              >
                КОНТАКТЫ
                <span className="absolute bottom-0 left-0 w-0 h-px bg-jewelry-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-jewelry-cream/95 backdrop-blur-sm shadow-md animate-fade-in px-4 py-6">
            <ul className="flex flex-col space-y-4 font-light tracking-wider">
              <li>
                <Link
                  to="/jewelry"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  УКРАШЕНИЯ
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  КОЛЛЕКЦИИ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О НАС
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  БЛОГ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  КОНТАКТЫ
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="block py-2 border-b border-jewelry-beige/50 hover:text-jewelry-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  АККАУНТ
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
