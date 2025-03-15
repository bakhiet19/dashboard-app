import supabase from "./supabase";

export async function getCabins(){
    
    let { data, error } = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.log("Error in Cabins");
        throw new Error("Error")
    }
    console.log(data);
    
    return data
}