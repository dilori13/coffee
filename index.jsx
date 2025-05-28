jsx
import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let id of sections) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items with active state
  const navItems = [
    { id: "home", label: "Главная" },
    { id: "menu", label: "Меню" },
    { id: "about", label: "О нас" },
    { id: "contact", label: "Контакты" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-800">Пряный мокко</h1>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`capitalize transition-colors ${
                    activeSection === item.id ? "text-amber-700 border-b-2 border-amber-700" : "hover:text-amber-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-amber-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 bg-gradient-to-r from-amber-50 via-amber-100 to-yellow-100 min-h-screen flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900 leading-tight">
              Пряный мокко — ваше уютное пространство для вдохновения
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Наслаждайтесь изысканным вкусом свежесваренного кофе и домашними десертами в атмосфере тепла и уюта.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Посмотреть меню
              </a>
              <a href="#contact" className="bg-white hover:bg-gray-100 text-amber-700 border border-amber-700 px-6 py-3 rounded-full font-medium transition-colors">
                Связаться с нами
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://placehold.co/600x400/2D1B0C/FFFFFF?text=Coffee+Time"
              alt="Fresh Coffee"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Наше меню</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coffee Items */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Эспрессо</h3>
              <ul className="space-y-3">
                <MenuItem name="Эспрессо" price="120 ₽" description="Классический эспрессо ручной работы." />
                <MenuItem name="Американо" price="140 ₽" description="Эспрессо с добавлением горячей воды." />
                <MenuItem name="Латте" price="180 ₽" description="Сливочное молоко и двойной эспрессо." />
                <MenuItem name="Капучино" price="180 ₽" description="Пышная молочная пена на основе эспрессо." />
                <MenuItem name="Мокка" price="200 ₽" description="Эспрессо с шоколадом и молоком." />
              </ul>
            </div>

            {/* Tea & Infusions */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Чаи и напитки</h3>
              <ul className="space-y-3">
                <MenuItem name="Черный чай" price="100 ₽" description="Фирменный черный чай с лимоном или медом." />
                <MenuItem name="Зеленый чай" price="100 ₽" description="Освежающий зеленый чай с ягодами." />
                <MenuItem name="Горячий шоколад" price="160 ₽" description="Разогревающий шоколадный напиток с пеной." />
                <MenuItem name="Какао" price="150 ₽" description="Традиционное какао с молоком." />
              </ul>
            </div>

            {/* Desserts */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Десерты</h3>
              <ul className="space-y-3">
                <MenuItem name="Чизкейк" price="180 ₽" description="Классический творожный чизкейк." />
                <MenuItem name="Шоколадный торт" price="200 ₽" description="Многослойный шоколадный торт." />
                <MenuItem name="Медовые булочки" price="130 ₽" description="Сдобные булочки с медовой начинкой." />
                <MenuItem name="Фруктовый салат" price="150 ₽" description="Свежие фрукты по сезону." />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">О нас</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/2D1B0C/FFFFFF?text=Our+Coffee+Shop"
                alt="Coffee Shop Interior"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6 text-gray-700">
                «Пряный мокко» — это не просто кофейня. Это место, где каждый может найти свой идеальный момент отдыха.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Мы открылись в 2020 году с одной целью — предложить нашим гостям не просто качественный кофе, но и атмосферу уюта, 
                комфорта и вдохновения. Каждый день мы готовим наши напитки с любовью, используя лучшие сорта арабики и натуральные ингредиенты.
              </p>
              <p className="text-lg text-gray-700">
                В нашем интерьере сочетаются элементы скандинавского минимализма и уютных деревенских мотивов, создавая уникальную атмосферу, 
                в которой хочется задержаться над книгой или встречей с друзьями.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-900">Связаться с нами</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Имя</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Сообщение</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Адрес</h3>
                <p className="text-gray-700">ул. Кофейная, д. 123, г. Москва</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Режим работы</h3>
                <p className="text-gray-700">Ежедневно с 8:00 до 22:00</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-800">Телефон</h3>
                <p className="text-gray-700">+7 (999) 123-45-67</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Пряный мокко</h3>
              <p className="text-amber-200">Создаем моменты, которые согревают душу</p>
            </div>
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-300 text-sm">
            © 2025 Пряный мокко. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

// MenuItem component
function MenuItem({ name, price, description }) {
  return (
    <li className="flex justify-between items-start border-b border-gray-200 pb-3">
      <div>
        <span className="font-medium text-gray-800">{name}</span>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <span className="text-amber-700 font-semibold whitespace-nowrap ml-4">{price}</span>
    </li>
  );
}
