import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    
    let { data, error } = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.log("Error in Cabins");
        throw new Error("Error")
    }    
    return data
}


export async function DeleteCabin(id) {
    
    const { error , data } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    if(error){
        console.log("Error in Cabins");
        throw new Error("Error")
    }
    return data
}

export async function createEditCabin(newCabin = {} , id) {
    console.log(newCabin);
    

    //https://hhplidssvsbijgjqkitb.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

    const hasImagePath = typeof newCabin.image === "string" && newCabin.image?.startsWith(supabaseUrl);

    console.log(hasImagePath);
    
    // const supabaseUrl = 'https://hhplidssvsbijgjqkitb.supabase.co'
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/" , "")
    const imagePath = hasImagePath ? newCabin.image :  `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    console.log(imagePath);
    
    // `${https://hhplidssvsbijgjqkitb.supabase.co/}`

    let query = supabase.from("cabins")

     if(!id)
     {
       query = query
        .insert([{... newCabin , image : imagePath}])
     }
    
     if(id){
       query = query.update({ ...newCabin , image : imagePath })
        .eq('id', id)
      
     }

     const {data , error } = await query
     .select().single()
     if(error){
     console.log(error);
     throw new Error(error)

    }

    // https://hhplidssvsbijgjqkitb.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg


   const { error : errorImage } = await supabase.storage.from("cabin-images").upload(imageName , newCabin.image)
    console.log(newCabin.image);
    

    return data
}