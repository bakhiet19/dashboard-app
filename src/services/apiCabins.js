import { data } from "react-router-dom"

export async function getCabins(){
    
    let { data: cabins, error } = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.log("Error in Cabins");
        throw new Error("Error")
    }
    return data
}