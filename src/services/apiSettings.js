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
    throw new Error('Setting could not be loaded');
  }

  return settings;
}

/**
 *
 * @param {Object} newSettings
 * @returns {Settings} settings
 */
export async function updateSetting(newSettings) {
  const { data: settings, error } = await supabase
    .from('settings')
    .update(newSettings)
    .eq('id', 1)
    .select()
    .single();

  if (error) {
    throw new Error('Setting could not be updated');
  }

  return settings;
}
