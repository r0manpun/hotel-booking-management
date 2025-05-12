import supabase from './supabase';

export async function getBookings() {
  const { data, error } = await supabase.from('bookings').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  console.log(data);

  return data;
}
