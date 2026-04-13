import { Zap, ShieldCheck, BarChart3, Globe } from 'lucide-react'; // Instala lucide-react si no lo tienes

const services = [
  {
    title: "Velocidad Extrema",
    description: "Webs construidas con Next.js para una carga instantánea. Google ama la velocidad y tus clientes también.",
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Panel de Control",
    description: "Gestiona tus datos fácilmente con Supabase. Control total sobre tus contenidos sin depender de terceros.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Optimización SEO",
    description: "Estructura técnica diseñada para aparecer en los primeros resultados de búsqueda desde el primer día.",
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Diseño Adaptable",
    description: "Tu página se verá impecable en celulares, tablets y computadores. Sin excepciones.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluciones digitales que impulsan resultados
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            No solo hacemos sitios web; creamos herramientas de venta optimizadas con la última tecnología del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group"
            >
              <div className="mb-4 inline-block p-3 bg-white rounded-lg shadow-sm group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}