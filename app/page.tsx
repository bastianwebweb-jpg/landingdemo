import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      {/* Aquí podrías meter una sección de proyectos más adelante */}
      <ContactForm />
      
      <footer className="py-10 text-center text-slate-500 border-t">
        <p>© {new Date().getFullYear()} - Tu Nombre/Agencia. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}