import supabase from './supabase';

export async function getBookings() {
  const { data, error, count } = await supabase
    .from('bookings')
    .select(
      'id,created_at,startDate,endDate,numNights,numGuests,totalPrice,status,isPaid,guests(email,fullName),cabins(name)',
      { count: 'exact' }
    );

  if (error) {
    console.error(error.message);
    throw new Error('Failed to fetch bookings');
  }

  return { data, count };
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

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from('bookings')
    .update(obj)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be uploaded');
  }

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted!');
  }

  return data;
}
