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
    throw new Error(error.message);
  }
  console.log(data);

  return data;
}
