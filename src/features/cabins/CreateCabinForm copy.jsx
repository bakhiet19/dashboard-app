import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { Textarea } from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

// Receives closeModal directly from Modal
function CreateCabinForm({cabinToEdit}) {

  const {register , handleSubmit , reset , getValues , formState } = useForm()
  const {errors} = formState
  
  const queryClient = useQueryClient()

  const {mutate , isLoading} = useMutation({
    mutationFn : createCabin,
    onSuccess : () => {
      toast.success("New CAbin Successfully created");
      queryClient.invalidateQueries({
        queryKey : ["cabin"]
      });
      reset();
    },
    onError : () => {
      toast.error("Error")
    }
  })
 
  

  function onSubmit(data){ 
     mutate({...data , image : data.image[0].name});
    // (data)
    
  }

  function onError(err){
    console.log(err);
    
  }

  return (
    <Form type='modal' onSubmit={handleSubmit(onSubmit , onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
        defaultValue=""
          type='text'
          id='name'
          {...register("name" , {
            required : "This Field Is Required", 
          })}
        />
        {/* {errors?.name?.message && <p>hello</p>} */}
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          {...register("maxCapacity" , {
            required : "This Field Is Required",
           
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.reqularPrice?.message}>
        <Input
          type='number'
          id='reqularPrice'
          {...register("reqularPrice" , {
            required : "This Field Is Required"
          })}
         />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          {...register("discount", {
            required : "This Field Is Required",
            validate : (value) => value <= getValues().reqularPrice || "Discount should be less than reqular price"
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
      >
        <Textarea
          type='number'
          id='description'
          {...register("description")}
        />
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput
          id='image'
          type='file'
          {...register("image")}
          />
         
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'>
          Cancel
        </Button>
        <Button disabled={isLoading}>
         Create
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
