export default function Hero() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
            Webs de Alto Rendimiento
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Tu negocio merece una <span className="text-blue-600">presencia digital</span> a otro nivel.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Desarrollamos experiencias veloces, optimizadas para Google y diseñadas para convertir visitantes en clientes reales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              Ver Catálogo
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-all">
              Hablemos por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}