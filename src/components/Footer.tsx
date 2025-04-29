import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jewelry-cream pt-16 pb-8 border-t border-jewelry-beige/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-cormorant text-xl mb-4 text-jewelry-dark">ЭЛЕГАНС</h3>
            <p className="text-sm text-jewelry-text/80 mb-6 font-light">
              Утонченные украшения, созданные с любовью к деталям и вниманием к изысканности.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-jewelry-dark hover:text-jewelry-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-jewelry-dark hover:text-jewelry-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-jewelry-dark hover:text-jewelry-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-jewelry-dark hover:text-jewelry-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase mb-4 text-jewelry-dark">Навигация</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link to="/jewelry" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Украшения
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase mb-4 text-jewelry-dark">Помощь</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link to="/shipping" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Возврат
                </Link>
              </li>
              <li>
                <Link to="/sizing" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Подбор размера
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  Уход за изделиями
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-jewelry-text/80 hover:text-jewelry-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase mb-4 text-jewelry-dark">Контакты</h4>
            <address className="not-italic text-sm font-light text-jewelry-text/80 space-y-2">
              <p>ул. Ювелирная, 123</p>
              <p>Москва, 123456</p>
              <p className="pt-2">+7 (123) 456-78-90</p>
              <p>
                <a href="mailto:info@elegance.com" className="hover:text-jewelry-gold transition-colors">
                  info@elegance.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-jewelry-beige/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-jewelry-text/70">
          <div className="mb-4 md:mb-0">
            © {currentYear} ЭЛЕГАНС. Все права защищены.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-jewelry-gold transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-jewelry-gold transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
