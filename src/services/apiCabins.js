import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath);
  console.log(newCabin.image instanceof File); 

  const {data:insertData, error: insertError } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();

  if (insertError) {
    console.error(insertError);
    throw new Error("Cabin could not be created");
  }

  const { data, error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", insertData.id);
    console.log(storageError);

    throw new Error("Image upload failed and cabin was rolled back");
  }
  return data;
}

export async function updateCabin(id, updatedCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .update(updatedCabin)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be updated");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
