import supabase from './supabase';

/**
 * 
 * @returns {Promise<Settings>} settings
 */
export async function getSettings() {
  const { data: settings, error } = await supabase
    .from('settings')
    .select('*')
    .single();

  if (error) {
    console.error(error.message);
    throw new Error('Setting could not be loaded');
  }
  
  return settings;
}
