jsx
import { useState, useEffect } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Обработчик скролла для активного раздела
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Header / Navigation */}
      <header className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold text-amber-800">
                Пряный мокко
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["home", "menu", "about", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize hover:text-amber-700 transition-colors duration-300 ${
                    activeSection === item ? "text-amber-700 font-semibold" : ""
                  }`}
                >
                  {item === "home"
                    ? "Главная"
                    : item === "menu"
                    ? "Меню"
                    : item === "about"
                    ? "О нас"
                    : "Контакты"}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-amber-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "menu", "about", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 rounded-md capitalize transition-colors duration-300 ${
                    activeSection === item
                      ? "bg-amber-100 text-amber-800 font-medium"
                      : "hover:bg-amber-50 text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item === "home"
                    ? "Главная"
                    : item === "menu"
                    ? "Меню"
                    : item === "about"
                    ? "О нас"
                    : "Контакты"}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/id/317/1920/1080"
              alt="Cafe interior"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Добро пожаловать в <br />{" "}
                <span className="text-amber-400">Пряный мокко</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Ваше любимое место для утреннего кофе и вечерних встреч.
              </p>
              <a
                href="#menu"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
              >
                Посмотреть меню
              </a>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Наше Меню
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Вкуснейшие напитки и десерты, приготовленные с любовью.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Эспрессо",
                  description: "Классический итальянский эспрессо",
                  price: "200 ₽",
                  image: "https://picsum.photos/id/1013/300/200",
                },
                {
                  title: "Капучино",
                  description: "Свежевзбитая пенка на основе эспрессо",
                  price: "250 ₽",
                  image: "https://picsum.photos/id/1012/300/200",
                },
                {
                  title: "Латте",
                  description: "Нежное сочетание эспрессо и молока",
                  price: "270 ₽",
                  image: "https://picsum.photos/id/1011/300/200",
                },
                {
                  title: "Чизкейк",
                  description: "Домашний чизкейк с ягодами",
                  price: "180 ₽",
                  image: "https://picsum.photos/id/1010/300/200",
                },
                {
                  title: "Торт шоколадный",
                  description: "Интенсивный шоколадный вкус",
                  price: "200 ₽",
                  image: "https://picsum.photos/id/1009/300/200",
                },
                {
                  title: "Фруктовый салат",
                  description: "Свежие сезонные фрукты",
                  price: "150 ₽",
                  image: "https://picsum.photos/id/1008/300/200",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <span className="text-amber-700 font-bold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://picsum.photos/id/320/800/600"
                  alt="About our cafe"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  О нас
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Кофейня «Пряный мокко» — это уютное место, где каждый найдет
                  себе занятие по душе. Мы создаем атмосферу тепла, уюта и
                  домашнего комфорта, чтобы вы могли отдохнуть от суеты города и
                  наслаждаться каждым глотком ароматного кофе.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Наши бариста — профессионалы своего дела, которые знают толк в
                  хорошем кофе. Мы используем только свежеобжаренные зерна,
                  выбранные с любовью и заботой о каждом клиенте.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Свежая выпечка ежедневно
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Уютная атмосфера и комфортные места
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Бесплатный Wi-Fi и удобные розетки
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Хотите узнать больше или сделать заказ? Мы всегда рады помочь!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Ваш email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="Ваше сообщение"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-amber-600 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Адрес
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Москва, ул. Ленинская, д. 15
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-amber-600 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Телефон
                      </h3>
                      <p className="mt-1 text-gray-600">+7 (900) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-amber-600 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Email
                      </h3>
                      <p className="mt-1 text-gray-600">
                        info@pryanymokko.ru
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-amber-600 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Часы работы
                      </h3>
                      <p className="mt-1 text-gray-600">
                        Пн-Пт: 8:00 - 22:00
                        <br />
                        Сб-Вс: 9:00 - 23:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Пряный мокко</h3>
              <p className="text-amber-200">
                Ваше любимое место для утреннего кофе и вечерних встреч.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                {["home", "menu", "about", "contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-amber-200 hover:text-white transition-colors duration-300"
                    >
                      {item === "home"
                        ? "Главная"
                        : item === "menu"
                        ? "Меню"
                        : item === "about"
                        ? "О нас"
                        : "Контакты"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Подписаться</h3>
              <p className="text-amber-200 mb-4">
                Получайте новости и специальные предложения.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-md transition-colors duration-300">
                  Подписаться
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>© 2025 Пряный мокко. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
