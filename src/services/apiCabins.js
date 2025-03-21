import supabase from "./supabase";

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

export async function createCabin(newCabin) {
    
    const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()
    if(error){
        console.log(error);
        throw new Error(error)
    }
    return data
}