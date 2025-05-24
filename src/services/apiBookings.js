import supabase from './supabase';

export async function getBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select(
      'id,created_at,startDate,endDate,numNights,numGuests,totalPrice,status,guests(email,fullName),cabins(name)',
      { count: 'exact' }
    );

  if (error) {
    console.error(error.message);
    throw new Error('Failed to fetch bookings');
  }

  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*,cabins(*),guests(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error.message);
    throw new Error('Failed to fetch booking');
  }

  return data;
}
