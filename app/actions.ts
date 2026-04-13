'use server'

import { supabase } from '@/lib/supabase';

export async function saveLead(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    message: formData.get('message') as string,
  };

  const { error } = await supabase
    .from('contact_leads')
    .insert([data]);

  if (error) {
    console.error('Error guardando lead:', error);
    return { success: false };
  }

  return { success: true };
}