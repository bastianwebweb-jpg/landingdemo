"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ReciclArt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1.12, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden antialiased selection:bg-amber-500/20">
      
      {/* NAVEGACIÓN */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-serif tracking-tighter"
        >
          R<span className="text-amber-500">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.5em] font-medium">
          {["Colecciones", "Nuestro Proceso", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="hover:text-amber-500 transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-amber-500 after:w-0 hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block text-xs uppercase tracking-widest px-6 py-3 border border-white/10 rounded-full backdrop-blur-md">
          Chile • VI Región
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-4xl active:scale-90 transition-transform"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU - Mejorado */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/98 z-[60] flex items-center justify-center md:hidden backdrop-blur-xl">
          <div className="flex flex-col items-center gap-12 text-3xl font-light tracking-wide">
            {["Colecciones", "Nuestro Proceso", "Contacto"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-500 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      )}

      {/* HERO - Optimizado para móvil */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-10" />
          <Image
            src="/images/1.jpg"
            alt="Mobiliario ReciclArt"
            fill
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }} 
          className="relative z-20 text-center px-6 max-w-4xl"
        >
          <p className="uppercase tracking-[0.6em] text-xs md:text-sm mb-4 md:mb-6 opacity-75">
            Mobiliario de Culto
          </p>
          
          <h1 className="text-6xl sm:text-7xl md:text-[13rem] leading-[0.85] font-serif tracking-[-0.04em] mb-4">
            Recicl<span className="text-amber-500/90 italic font-light">Art</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light tracking-wide opacity-70 max-w-md mx-auto">
            Piezas únicas con alma de madera nativa
          </p>
        </motion.div>

        {/* Scroll indicator - solo desktop */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-amber-500 to-transparent hidden md:block"
        />
      </section>

      {/* SECCIÓN ISLA DE COCINA - Versión móvil corregida */}
      <section className="py-20 md:py-48 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-auto overflow-hidden rounded-3xl">
                <Image
                  src="/images/2.jpg"
                  alt="Isla de cocina ReciclArt"
                  fill
                  className="object-cover grayscale-[0.35] hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority={false}
                  quality={90}
                />
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-5 space-y-8 md:space-y-10">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              El corazón <span className="italic text-amber-500">del hogar.</span>
            </h2>
            <p className="text-[17px] md:text-lg text-stone-400 leading-relaxed">
              Nuestras islas de cocina no son solo muebles; son estaciones de vida diseñadas para resistir el paso del tiempo y las historias de cada familia.
            </p>
            <div className="pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="h-px w-12 bg-amber-500" />
              <span className="uppercase text-xs tracking-[0.4em]">Sostenibilidad Nativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* HERRAJES */}
      <section className="bg-[#f8f7f4] text-[#111] py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/images/4.jpg"
                    alt="Consola con herrajes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 65vw"
                  />
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-5 space-y-10">
              <div>
                <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-6 md:mb-8">
                  Herrajes con Historia
                </h3>
                <p className="text-[17px] text-stone-600 leading-relaxed">
                  Utilizamos acero forjado y técnicas de pátina manual para lograr ese look industrial auténtico que define nuestra línea premium.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                <div className="text-center">
                  <span className="uppercase text-amber-700 text-xs tracking-widest block mb-4">Ediciones Limitadas</span>
                  <p className="text-2xl italic font-serif leading-tight">
                    "Cada veta de la madera dicta el diseño final."
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-10 w-full md:w-auto px-12 py-5 bg-black text-white text-sm tracking-[0.4em] hover:bg-amber-500 transition-all duration-300 rounded-2xl"
                  >
                    SOLICITAR COTIZACIÓN
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 md:py-60 bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
        <div className="text-center px-6 relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-none mb-10 md:mb-12">
            ¿Comenzamos<br />
            <span className="text-amber-500">tu proyecto?</span>
          </h2>

          <a
            href="https://wa.me/56974768123"
            target="_blank"
            className="group inline-block"
          >
            <div className="relative px-14 py-6 bg-amber-500 text-black font-medium text-sm tracking-widest hover:bg-white transition-all duration-500 rounded-2xl active:scale-95">
              CONTACTAR POR WHATSAPP
              <div className="absolute -inset-2 bg-amber-500/30 blur-2xl scale-95 group-hover:scale-100 transition-transform" />
            </div>
          </a>
        </div>

        <div className="absolute bottom-6 text-[10px] opacity-30 tracking-widest flex justify-between w-full px-6 md:px-12">
          <div>RECICLART CHILE © 2026</div>
          <div className="text-right">DISEÑO DE AUTOR • MADERA RECUPERADA</div>
        </div>
      </section>
    </main>
  );
}