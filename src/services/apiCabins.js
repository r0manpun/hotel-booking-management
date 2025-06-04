import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = hasImagePath
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '');

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imageName}`;

  // 1. CREATE/EDIT CABIN
  // A. CREATE
  let query = supabase.from('cabins');
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B. EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Could not create cabin');
  }

  // 2. UPLOAD IMAGE
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. DELETE the cabin if there was error uploading images
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'Cabin image could not be uploaded and the cabin was not created!'
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted!!');
  }

  return data;
}
