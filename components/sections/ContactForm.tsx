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
      <div className="text-center p-10 bg-green-50 rounded-xl">
        <h3 className="text-2xl font-bold text-green-700">¡Mensaje enviado!</h3>
        <p className="text-green-600">Te contactaremos lo antes posible.</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Hablemos de tu proyecto</h2>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input name="name" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input name="phone" className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensaje</label>
            <textarea name="message" rows={4} required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>
          <button 
            disabled={isPending}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-slate-400 transition-colors"
          >
            {isPending ? 'Enviando...' : 'Enviar Propuesta'}
          </button>
        </form>
      </div>
    </section>
  );
}