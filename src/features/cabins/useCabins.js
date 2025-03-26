import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

export default function useCabins(){
    const { data , isLoading , error , status} = useQuery({
        queryKey : ["cabin"],
        queryFn : getCabins,     
      })  
  return { data , isLoading , error , status} 
}