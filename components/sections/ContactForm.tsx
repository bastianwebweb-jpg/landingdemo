'use client'
import { useState } from 'react';
import { saveLead } from '@/app/actions';

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await saveLead(formData);
    setIsPending(false);
    
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Hubo un error. Inténtalo de nuevo.");
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-20 text-center p-10 bg-green-50 rounded-2xl border border-green-100">
        <h3 className="text-2xl font-bold text-green-700">¡Mensaje enviado!</h3>
        <p className="text-green-600 mt-2">Te contactaremos lo antes posible para revisar tu presupuesto.</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        {/* Título corregido y con mejor contraste */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10">
          Hablemos de tu presupuesto
        </h2>
        
        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
            <input 
              name="name" 
              placeholder="Tu nombre completo"
              required 
              className="w-full p-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input 
                name="email" 
                type="email" 
                placeholder="correo@ejemplo.com"
                required 
                className="w-full p-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Teléfono</label>
              <input 
                name="phone" 
                placeholder="+56 9..."
                className="w-full p-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje o detalles del proyecto</label>
            <textarea 
              name="message" 
              rows={4} 
              placeholder="Cuéntame brevemente qué necesitas..."
              required 
              className="w-full p-4 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            ></textarea>
          </div>

          <button 
            disabled={isPending}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:bg-slate-400 transition-all active:scale-[0.98]"
          >
            {isPending ? 'Enviando...' : 'Enviar Propuesta'}
          </button>
        </form>
      </div>
    </section>
  );
}