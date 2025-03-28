import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditSettings(){
    const queryClient = useQueryClient()
    const {mutate : editSettings , isLoading :  isEditing} = useMutation({
        mutationFn : updateSetting,
        onSuccess : () => {
          toast.success("Success Editing");
          queryClient.invalidateQueries({
            queryKey : ["settings"]
          });
        //   reset();
        },
        onError : () => {
          toast.error("Error")
        }
      })

      return {editSettings , isEditing}
}