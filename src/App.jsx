import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Publicidad",
    subtitle: "Meta Ads · Google Ads · LinkedIn Ads · TikTok Ads",
    text: "Campañas pensadas para llegar a las personas correctas, ordenar la inversión y transformar la pauta en oportunidades concretas.",
    icon: "↗",
  },
  {
    title: "Social Media",
    subtitle: "Contenido · calendario · copies · comunidad",
    text: "Creamos una presencia digital con criterio: ideas, formatos y mensajes que construyen marca sin depender de publicar por publicar.",
    icon: "✎",
  },
  {
    title: "Branding",
    subtitle: "Identidad visual · tono · universo de marca",
    text: "Diseñamos o refinamos la identidad para que tu marca se vea consistente, reconocible y alineada a lo que quiere comunicar.",
    icon: "✶",
  },
  {
    title: "Estrategia de marca",
    subtitle: "Posicionamiento · propuesta · comunicación",
    text: "Ordenamos qué decir, cómo decirlo y dónde ponerlo a trabajar para que cada acción tenga una dirección clara.",
    icon: "⌁",
  },
];

const projects = [
  "estrategia",
  "branding",
  "contenido",
  "publicidad",
  "identidad",
  "posicionamiento",
  "campañas",
  "comunidad",
  "claridad",
  "dirección",
  "crecimiento",
];

const principles = [
  {
    label: "Enfoque",
    title: "Pensamos antes de ejecutar",
    text: "No hacemos contenido porque sí ni campañas sin dirección. Primero entendemos qué necesita tu marca y dónde vale la pena poner energía.",
  },
  {
    label: "Consistencia",
    title: "Construimos coherencia",
    text: "Mensaje, estética, tono y acciones tienen que sentirse parte del mismo universo. Ahí empieza una marca reconocible.",
  },
  {
    label: "Intención",
    title: "Priorizamos lo que sirve",
    text: "Nos importa que la comunicación se vea bien, pero sobre todo que tenga sentido para tu negocio y tus objetivos.",
  },
];

export default function ChispaLanding() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E8] pt-[76px] text-[#090A0F] selection:bg-[#D7FF3F] selection:text-[#090A0F]">
      <section className="relative overflow-hidden border-b border-black/10 bg-[#F5F0E8]">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #090A0F 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="fixed inset-x-0 top-0 z-50 bg-[#5C63E6] px-5 py-3 shadow-sm md:px-10 lg:px-16">
          <nav className="mx-auto flex max-w-7xl items-center justify-between">
            <a href="#" className="flex items-center gap-3" aria-label="Chispa home">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#D7FF3F] shadow-sm">
                <span className="text-[28px] font-black leading-none text-[#5C63E6]">✶</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black tracking-[-0.03em] text-white">chispa</span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/55">marketing studio</span>
              </div>
            </a>
            <a href="#contacto" className="group inline-flex items-center gap-2 rounded-full bg-[#D7FF3F] px-5 py-2.5 text-sm font-black text-[#5C63E6] shadow-sm transition hover:scale-[1.03]">
              <span className="text-lg leading-none transition group-hover:rotate-12">✶</span>
              Hablemos
            </a>
          </nav>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="flex flex-col gap-12 py-12 lg:py-20">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl">
              <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-sm text-black/65 shadow-sm">
                <span className="text-[#5C63E6]">✦</span> Agencia de marketing y comunicación
              </p>
              <h1 className="max-w-3xl text-[clamp(3.2rem,8vw,6.4rem)] font-black leading-[0.9] tracking-[-0.045em]">
                Tu marca puede tener mucha más chispa.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-black/62">
                Pensamos estrategia, contenido y campañas digitales para marcas que quieren verse bien, sonar distinto y crecer con intención.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D7FF3F] px-6 py-3 font-black text-[#090A0F] shadow-sm transition hover:scale-[1.02]">
                  Quiero trabajar mi marca <span className="transition group-hover:translate-x-1">→</span>
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/50 px-6 py-3 font-bold text-black/70 transition hover:bg-white">Ver servicios</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className={`min-h-[280px] rounded-[2rem] border p-7 shadow-sm md:p-8 ${
                    index === 0
                      ? "border-black/10 bg-white text-[#090A0F]"
                      : index === 1
                      ? "border-[#5C63E6] bg-[#5C63E6] text-white"
                      : "border-black/10 bg-[#D7FF3F] text-[#090A0F]"
                  }`}
                >
                  <p className={`text-sm font-black uppercase tracking-[0.14em] ${index === 1 ? "text-[#D7FF3F]" : "text-[#5C63E6]"}`}>
                    {principle.label}
                  </p>
                  <h3 className="mt-7 max-w-[12ch] text-[clamp(1.75rem,2.7vw,3rem)] font-black leading-[0.98] tracking-[-0.02em]">
                    {principle.title}
                  </h3>
                  <p className={`mt-5 max-w-sm text-base leading-7 ${index === 1 ? "text-white/72" : "text-black/62"}`}>
                    {principle.text}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative overflow-hidden bg-[#D7FF3F] px-5 py-24 text-[#090A0F] md:px-10 lg:px-16">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #090A0F 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex w-fit rounded-full bg-[#090A0F] px-4 py-2 text-sm font-black uppercase tracking-[0.26em] text-[#D7FF3F]">Servicios</p>
              <h2 className="max-w-6xl text-[clamp(3rem,7vw,6.6rem)] font-black leading-[0.9] tracking-[-0.045em]">
                Lo que hacemos para que tu marca prenda.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-black/65 lg:justify-self-end">
              Acá está el corazón de Chispa: estrategia, creatividad y performance trabajando juntas para que tu marca no solo se vea bien, sino que también avance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group min-h-[330px] rounded-[2rem] border border-black/10 p-7 shadow-sm transition hover:-translate-y-1 md:p-8 ${
                  index === 0
                    ? "bg-[#090A0F] text-white"
                    : index === 1
                    ? "bg-white text-[#090A0F]"
                    : index === 2
                    ? "bg-[#5C63E6] text-white"
                    : "bg-[#F5F0E8] text-[#090A0F]"
                }`}
              >
                <div className="mb-10 flex items-start justify-between gap-4">
                  <p className={`text-xs font-black uppercase tracking-[0.28em] ${index === 0 || index === 2 ? "text-white/50" : "text-black/45"}`}>
                    0{index + 1}
                  </p>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black ${index === 0 || index === 2 ? "bg-[#D7FF3F] text-[#090A0F]" : "bg-[#090A0F] text-[#D7FF3F]"}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-[clamp(2.2rem,4.2vw,4.4rem)] font-black leading-[0.92] tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className={`mt-5 text-sm font-black uppercase tracking-[0.16em] ${index === 0 || index === 2 ? "text-white/60" : "text-black/45"}`}>
                  {service.subtitle}
                </p>
                <p className={`mt-7 max-w-xl text-base leading-7 ${index === 0 || index === 2 ? "text-white/68" : "text-black/62"}`}>
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F5F0E8] px-5 py-20 text-[#090A0F] md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#5C63E6]">Cómo trabajamos</p>
            <h2 className="text-4xl font-black tracking-[-0.035em] md:text-6xl">Primero entendemos. Después creamos.</h2>
            <p className="mt-6 text-base leading-7 text-black/60">Nos gusta pensar la comunicación como una mezcla entre estrategia, sensibilidad y ejecución. No se trata de hacer ruido: se trata de encontrar qué tiene sentido decir, cómo decirlo y dónde ponerlo a trabajar.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Diagnóstico", "Estrategia", "Ejecución"].map((step, index) => (
              <div key={step} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-5xl font-black tracking-[-0.03em] text-[#5C63E6]">0{index + 1}</p>
                <h3 className="mt-10 text-2xl font-black tracking-tight">{step}</h3>
                <p className="mt-4 text-sm leading-6 text-black/55">
                  {index === 0 && "Leemos tu marca, tu audiencia, tus canales y tus oportunidades."}
                  {index === 1 && "Definimos mensajes, formatos, campañas y prioridades."}
                  {index === 2 && "Creamos, publicamos, medimos y optimizamos con continuidad."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-[#D7FF3F] py-8 text-[#090A0F]">
        <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-4 text-6xl font-black tracking-[-0.035em] text-black/25">
          {[...projects, ...projects, ...projects].map((project, i) => (
            <span key={`${project}-${i}`}>{project} ·</span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </section>

      <section id="contacto" className="bg-[#F5F0E8] px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#5C63E6] p-8 text-white md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D7FF3F] px-4 py-2 text-sm font-bold text-[#090A0F]"><span>✓</span> Agenda abierta</p>
              <h2 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.035em] md:text-7xl">¿Le damos una chispa a tu marca?</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Contanos qué necesitás y armamos una propuesta pensada para tu etapa: desde ordenar la comunicación hasta activar campañas para crecer.</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#090A0F] p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/45">Contacto</p>
              <a href="mailto:hola@chispa.com" className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-semibold transition hover:bg-white/15"><span>✉</span> hola@chispa.com</a>
              <a href="https://www.instagram.com/chispamarketing_" target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-semibold transition hover:bg-white/15"><span>◎</span> @chispamarketing_</a>
              <button className="mt-5 w-full rounded-full bg-[#D7FF3F] px-5 py-3 font-black text-[#090A0F] transition hover:scale-[1.02]">Enviar consulta</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#F5F0E8] px-5 py-16 text-[#090A0F] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D7FF3F] shadow-sm">
                  <span className="text-[30px] font-black leading-none text-[#5C63E6]">✶</span>
                </div>
                <div className="leading-none">
                  <p className="text-2xl font-black tracking-[-0.04em]">chispa</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.38em] text-black/42">marketing studio</p>
                </div>
              </div>

              <a href="mailto:hola@chispa.com" className="block text-2xl leading-tight tracking-[-0.03em] transition hover:text-[#5C63E6]">
                hola@chispa.com
              </a>
              <p className="mt-3 text-2xl leading-tight tracking-[-0.03em] text-black/80">
                Buenos Aires, Argentina
              </p>

              <form className="mt-12 max-w-xl">
                <label className="mb-3 block text-sm font-semibold text-black/65">Contactate con Chispa</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Ingresá tu correo de contacto"
                    className="min-h-12 flex-1 rounded-full border border-black/20 bg-white px-5 text-base outline-none transition placeholder:text-black/35 focus:border-[#5C63E6]"
                  />
                  <button type="button" className="rounded-full bg-[#090A0F] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#5C63E6]">
                    Contacto
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-2 lg:justify-self-end">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-black/35">Plataformas</p>
                <div className="space-y-3 text-lg font-black uppercase tracking-[0.08em]">
                  <a href="https://www.instagram.com/chispamarketing_" target="_blank" rel="noreferrer" className="block transition hover:text-[#5C63E6]">Instagram</a>
                  <a href="https://www.facebook.com/chispamarketing" target="_blank" rel="noreferrer" className="block transition hover:text-[#5C63E6]">Facebook</a>
                  <a href="https://www.linkedin.com/chispa-mktdigital" target="_blank" rel="noreferrer" className="block transition hover:text-[#5C63E6]">LinkedIn</a>
                </div>
              </div>

              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-black/35">Navegación</p>
                <div className="space-y-3 text-lg font-black uppercase tracking-[0.08em]">
                  <a href="#" className="block transition hover:text-[#5C63E6]">Inicio</a>
                  <a href="#servicios" className="block transition hover:text-[#5C63E6]">Servicios</a>
                  <a href="#contacto" className="block transition hover:text-[#5C63E6]">Contacto</a>
                  <a href="#" className="block transition hover:text-[#5C63E6]">Política de privacidad</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-6 border-t border-black/10 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.85] tracking-[-0.06em]">
              CHISPA
            </p>
            <div className="max-w-sm text-left text-sm leading-6 text-black/40 md:text-right">
              <p className="font-black uppercase tracking-[0.16em] text-black/45">Chispa Marketing Studio</p>
              <p>Agencia de marketing, 2026</p>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
