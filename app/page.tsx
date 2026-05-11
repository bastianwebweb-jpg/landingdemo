'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#c4a484]">
              <Image 
                src="/images/logo-su-taller.png" 
                alt="Su Taller de Artesanía" 
                width={48} 
                height={48} 
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#3a2f1f]">Su Taller</h1>
              <p className="text-xs text-[#8c6f4e] -mt-1">Artesanía Maule</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[#3a2f1f] font-medium">
            <Link href="#inicio" className="hover:text-[#c4a484] transition-colors">Inicio</Link>
            <Link href="#productos" className="hover:text-[#c4a484] transition-colors">Productos</Link>
            <Link href="#talleres" className="hover:text-[#c4a484] transition-colors">Talleres</Link>
            <Link href="#nosotros" className="hover:text-[#c4a484] transition-colors">Nosotros</Link>
          </div>

          <a 
            href="https://www.instagram.com/su_tallerdeartesania" 
            target="_blank"
            className="flex items-center gap-2 bg-[#E4405F] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#d62e4f] transition-colors"
          >
            <span>Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* HERO MEJORADO PARA MÓVIL */}
      <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center bg-[#3a2f1f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/logo-su-taller.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10 pt-10 pb-16">
          {/* Logo */}
          <div className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-8 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
            <Image 
              src="/images/logo-su-taller.png" 
              alt="Su Taller de Artesanía Maule" 
              width={160} 
              height={160} 
              className="object-cover"
            />
          </div>
          
          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
            Su Taller de<br />Artesanía Maule
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#e8d9c0] mb-10 max-w-md mx-auto">
            Cerámica, mosaico y pintura de aros con alma
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
            <a href="#productos" className="bg-[#c4a484] hover:bg-[#b08f5f] text-[#3a2f1f] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300">
              Ver Colección
            </a>
            <a href="#talleres" className="border-2 border-white text-white hover:bg-white hover:text-[#3a2f1f] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300">
              Talleres
            </a>
          </div>
        </div>

        {/* Scroll indicator - solo visible en desktop */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm flex-col items-center">
          <span>Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mt-2 flex items-center justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3a2f1f] mb-4">Nuestras Creaciones</h2>
            <p className="text-xl text-[#6b5c47] max-w-2xl mx-auto">
              Piezas únicas hechas a mano con amor en el Maule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="group bg-[#f8f5f0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[380px] overflow-hidden">
                <Image 
                  src="/images/2.jpg" 
                  alt="Aros de pizza" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3a2f1f]">Aros Triángulo de Pizza</h3>
                <p className="text-[#8c6f4e] mt-2">Cerámica esmaltada • Edición divertida</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#c4a484]">$12.000</span>
                  <button className="bg-[#3a2f1f] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c4a484] hover:text-[#3a2f1f] transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="group bg-[#f8f5f0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[380px] overflow-hidden">
                <Image 
                  src="/images/3.jpg" 
                  alt="Collar de perro salchicha" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3a2f1f]">Collar Salchicha</h3>
                <p className="text-[#8c6f4e] mt-2">Cerámica • Cadena de cuero</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#c4a484]">$18.500</span>
                  <button className="bg-[#3a2f1f] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c4a484] hover:text-[#3a2f1f] transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="group bg-[#f8f5f0] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[380px] overflow-hidden">
                <Image 
                  src="/images/4.jpg" 
                  alt="Aros estrella azul" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#3a2f1f]">Aros Estrella Azul</h3>
                <p className="text-[#8c6f4e] mt-2">Cerámica esmaltada • Acero</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#c4a484]">$14.900</span>
                  <button className="bg-[#3a2f1f] text-white px-6 py-2 rounded-full text-sm hover:bg-[#c4a484] hover:text-[#3a2f1f] transition-colors">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://www.instagram.com/su_tallerdeartesania" target="_blank" className="inline-flex items-center gap-3 text-[#c4a484] hover:text-[#9c7c5a] text-lg font-medium">
              Ver todos los productos en Instagram 
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section id="talleres" className="py-20 bg-[#3a2f1f] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#c4a484] text-[#3a2f1f] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Experiencias creativas
              </div>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                Talleres para niños<br />y adultos
              </h2>
              <p className="text-xl text-[#e8d9c0] mb-10">
                Aprende a crear con cerámica, mosaico y pintura. 
                Momentos de conexión, creatividad y mucha diversión.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl">🎨</div>
                  <div>
                    <h4 className="text-xl font-semibold">Talleres infantiles</h4>
                    <p className="text-[#c4c0b5]">De 6 a 14 años</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl">🪔</div>
                  <div>
                    <h4 className="text-xl font-semibold">Cerámica y Esmaltado</h4>
                    <p className="text-[#c4c0b5]">Nivel principiante e intermedio</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl">🧩</div>
                  <div>
                    <h4 className="text-xl font-semibold">Mosaico Creativo</h4>
                    <p className="text-[#c4c0b5]">Para todas las edades</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <p className="italic text-2xl leading-relaxed">
                "Crea, disfruta, regala o luce tu propio arte"
              </p>
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="font-medium">¿Quieres organizar un taller?</p>
                <a href="#" className="mt-4 inline-block bg-white text-[#3a2f1f] px-8 py-4 rounded-full font-semibold hover:bg-[#c4a484] transition-colors">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a241a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/logo-su-taller.png" 
                alt="Logo" 
                width={60} 
                height={60} 
                className="rounded-full"
              />
              <div>
                <p className="font-bold text-2xl">Su Taller</p>
                <p className="text-[#c4a484]">Artesanía Maule</p>
              </div>
            </div>
            <p className="text-[#b8a78f]">Emprendimiento familiar dedicado a la creación artesanal con alma y pasión.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3 text-[#b8a78f]">
              <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
              <li><a href="#talleres" className="hover:text-white transition-colors">Talleres</a></li>
              <li><a href="https://www.instagram.com/su_tallerdeartesania" target="_blank" className="hover:text-white transition-colors">@su_tallerdeartesania</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contáctanos</h4>
            <p className="text-[#b8a78f]">Talca, Región del Maule</p>
            <p className="text-[#b8a78f] mt-2">📍 Chile</p>
            
            <div className="mt-8">
              <a href="https://www.instagram.com/su_tallerdeartesania" target="_blank" className="text-[#c4a484] hover:text-white flex items-center gap-3">
                <span className="text-2xl">📷</span>
                <span>Síguenos en Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#8c6f4e] mt-16 border-t border-white/10 pt-8">
          © 2026 Su Taller de Artesanía Maule • Hecho con ❤️ y arcilla
        </div>
      </footer>
    </div>
  );
}