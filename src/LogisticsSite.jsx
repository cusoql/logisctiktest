import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

function BackButton() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // если страницы в истории нет — просто скроллим к началу
      window.location.hash = "#home";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleBack}
      className="fixed left-4 top-4 z-50 rounded-xl bg-white/90 shadow-lg backdrop-blur px-4 py-2 text-sm font-semibold hover:bg-white"
      aria-label="Назад"
    >
      ← Назад
    </button>
  );
}

const partners = [
  { name: "Partner A", logo: "/images/partner_1.jpg" },
  { name: "Partner B", logo: "/images/partner_2.jpg" },
  { name: "Partner C", logo: "/images/partner_3.jpg" },
  { name: "Partner D", logo: "/images/partner_4.jpg" },
  { name: "Partner E", logo: "/images/partner_5.jpg" },
  { name: "Partner F", logo: "/images/partner_6.jpg" },
];

const projects = [
  { title: "Европейский коридор", img: "/images/project_1.jpg", desc: "Регулярные рейсы из Варшавы в Роттердам для e‑commerce." },
  { title: "Морской мультимодал", img: "/images/project_2.jpg", desc: "40-футовые контейнеры из Шанхая в Гамбург с догрузом авто." },
  { title: "Авиа срочная доставка", img: "/images/project_3.jpg", desc: "Запчасти для производственной линии — за 48 часов." },
];

const routeSets = [
  { vehicle: "Грузовик", img: "/images/map_truck.jpg", note: "Маршрут: Берлин → Варшава → Вильнюс" },
  { vehicle: "Судно", img: "/images/map_ship.jpg", note: "Маршрут: Шанхай → Сингапур → Роттердам" },
  { vehicle: "Самолёт", img: "/images/map_plane.jpg", note: "Маршрут: Доха → Франкфурт → Амстердам" },
  { vehicle: "Поезд", img: "/images/map_train.jpg", note: "Маршрут: Чунцин → Дуйсбург → Антверпен" },
];

export default function LogisticsSite() {
  const [active, setActive] = useState(0);

  return (
    <div id="home">
      <BackButton />

      {/* Hero */}
      <header className="bg-gradient-to-b from-brand.dark to-slate-900 text-white">
        <div className="container-wide section">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Umala Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg max-w-2xl text-white/90"
          >
            Международные грузоперевозки: авто, море, авиа, ж/д. Полный цикл — от забора до таможни и последней мили.
          </motion.p>
          <div className="mt-8 flex gap-3">
            <a href="#order" className="inline-flex items-center rounded-xl bg-white text-brand.dark font-semibold px-5 py-3 shadow hover:shadow-lg">
              Рассчитать доставку
            </a>
            <a href="#about" className="inline-flex items-center rounded-xl border border-white/30 text-white font-semibold px-5 py-3 hover:bg-white/10">
              О компании
            </a>
          </div>
        </div>
      </header>

      {/* Partners */}
      <section id="partners" className="section bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">Наши партнёры</h2>
          <p className="mt-2 text-gray-600">Работаем с лидерами рынка и локальными перевозчиками.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-gray-50 p-4 shadow hover:shadow-md"
              >
                <img src={p.logo} alt={p.name} className="h-14 w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">Наши проекты</h2>
          <p className="mt-2 text-gray-600">Кейсы, которыми мы гордимся.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((pr, i) => (
              <motion.article
                key={pr.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg flex flex-col"
              >
                <img src={pr.img} alt={pr.title} className="h-48 w-full object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold">{pr.title}</h3>
                  <p className="mt-2 text-gray-600">{pr.desc}</p>
                  <div className="mt-auto pt-4">
                    <a href="#order" className="text-brand.blue font-semibold hover:underline">Похожую доставку →</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Routes slider */}
      <section id="routes" className="section bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">Маршруты по видам транспорта</h2>
          <p className="mt-2 text-gray-600">Листайте карты и выбирайте нужный тип доставки.</p>

          <div className="mt-6">
            <div className="mb-3 text-sm text-gray-600">Карта для ТС: <span className="font-semibold">{routeSets[active]?.vehicle}</span></div>
            <Swiper
              onSlideChange={(s) => setActive(s.activeIndex)}
              spaceBetween={16}
              slidesPerView={1}
            >
              {routeSets.map((r) => (
                <SwiperSlide key={r.vehicle}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={r.img} alt={r.vehicle} className="w-full h-[380px] object-cover" />
                    <div className="p-4 bg-gray-50 border-t">
                      <div className="text-sm text-gray-700">{r.note}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Order form (hash navigation keeps Browser Back working) */}
      <section id="order" className="section bg-gray-50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">Рассчитать доставку</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); }}
            className="mt-6 grid md:grid-cols-2 gap-4"
          >
            <input className="rounded-xl border p-3" placeholder="Имя" required/>
            <input className="rounded-xl border p-3" placeholder="Телефон/Email" required/>
            <input className="rounded-xl border p-3 md:col-span-2" placeholder="Откуда → Куда" required/>
            <textarea className="rounded-xl border p-3 md:col-span-2" rows="4" placeholder="Комментарий"></textarea>
            <button className="md:col-span-2 rounded-xl bg-brand.blue text-white font-semibold px-5 py-3 hover:opacity-90">
              Отправить
            </button>
          </form>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold">О компании</h2>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Более 10 лет на рынке. Свой автопарк, партнёрские линии, страхование грузов, собственный контроль качества. ISO 9001.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-gray-50 p-5 shadow">
              <div className="text-3xl font-extrabold">1000+</div>
              <div className="text-gray-600">доставок в месяц</div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5 shadow">
              <div className="text-3xl font-extrabold">24/7</div>
              <div className="text-gray-600">поддержка клиентов</div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-5 shadow">
              <div className="text-3xl font-extrabold">98%</div>
              <div className="text-gray-600">сроков вовремя</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container-wide py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/80">© {new Date().getFullYear()} Umala Logistics</div>
          <div className="flex gap-4 text-white/80">
            <a href="#home" className="hover:text-white">Главная</a>
            <a href="#projects" className="hover:text-white">Проекты</a>
            <a href="#partners" className="hover:text-white">Партнёры</a>
            <a href="#order" className="hover:text-white">Заявка</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
