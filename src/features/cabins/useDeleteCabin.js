import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { DeleteCabin } from "../../services/apiCabins"


export function useDeleteCabin(){
    const queryClient = useQueryClient()

const {mutate : deleteCabin , isLoading} = useMutation({
  mutationFn : (id) => DeleteCabin(id),
  onSuccess : () =>{
  queryClient.invalidateQueries({
  queryKey : ["cabin"],
  }),
  toast.success("success deleted")
  },
  onError : () =>{
    toast.error("Error !")
  }
  });
  return {isLoading , deleteCabin}
}

