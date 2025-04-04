import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabinForm(){

    const queryClient = useQueryClient()
    const {mutate : createCabin , isLoading :  isCreating} = useMutation({
        mutationFn : createEditCabin,
        onSuccess : () => {
          toast.success("Success Editing");
          queryClient.invalidateQueries({
            queryKey : ["cabin"]
          });
        //   reset();
        },
        onError : () => {
          toast.error("Error")
        }
      })

      return {createCabin , isCreating}
}