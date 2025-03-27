import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabinForm(){

    const queryClient = useQueryClient()
    const {mutate : editCabin , isLoading :  isEditing} = useMutation({
        mutationFn : ({newCabin , id}) => createEditCabin(newCabin , id),
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

      return {editCabin , isEditing}
}