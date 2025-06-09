import supabase from './supabase';

import { PAGE_SIZE } from '../utils/constants';
import { getToday } from '../utils/helper';

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from('bookings')
    .select(
      'id,created_at,startDate,endDate,numNights,numGuests,totalPrice,status,isPaid,guests(email,fullName),cabins(name)',
      { count: 'exact' }
    );

  // FILTER
  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  // SORT
  if (sortBy) {
    query.order(sortBy.field, { ascending: sortBy.direction === 'asc' });
  }

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
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
    throw new Error('Failed to fetch booking');
  }

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from('bookings')
    .update(obj)
    .eq('id', id)
    .select('*,guests(fullName),cabins(name)')
    .single();

  if (error) {
    throw new Error('Booking could not be uploaded');
  }

  return data;
}

export async function deleteBooking(id) {
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)
    .select('cabins(name),guests(fullName)')
    .single();

  if (error) {
    throw new Error('Booking could not be deleted!');
  }

  return data;
}

export async function getBookingAfterDate(date) {
  const { data, error } = await supabase
    .from('bookings')
    .select('created_at,totalPrice,extrasPrice')
    .gte('created_at', date)
    .lte('created_at', getToday({ end: true }));

  if (error) {
    throw new Error('Booking could not be loaded!');
  }

  return data;
}

export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*,guests(fullName)')
    .gte('startDate', date)
    .lte('startDate', getToday());

  if (error) {
    throw new Error('Stays could not be loaded!');
  }

  return data;
}

export async function getStaysTodayActivity() {
  const today = getToday();

  // First query: unconfirmed bookings starting today
  const { data: unconfirmedBooking, error: error1 } = await supabase
    .from('bookings')
    .select('*,guests(fullName,nationality,countryFlag)')
    .eq('status', 'unconfirmed')
    .eq('startDate', today);

  if (error1) {
    throw new Error('Unconfirmed bookings could not get loaded');
  }

  // Second query: checked-in bookings ending today
  const { data: checkingOutBookings, error: error2 } = await supabase
    .from('bookings')
    .select('*,guests(fullName,nationality,countryFlag)')
    .eq('status', 'checked-in')
    .eq('endDate', today);

  if (error2) {
    throw new Error('Checking-out bookings could not get loaded');
  }

  // Combine results and sort by created_at
  const allBookings = [...unconfirmedBooking, ...checkingOutBookings].sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  return allBookings;
}
