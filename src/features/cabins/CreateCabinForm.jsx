import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { Textarea } from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useEditCabinForm } from './useEditCabinForm';
import { useCreateCabinForm } from './useCreateCabinForm';


function CreateCabinForm({cabinToEdit = {}}) {

  const {editCabin , isEditing} = useEditCabinForm()
  const {createCabin , isCreating} = useCreateCabinForm()
  
  const {id : editId , ...editValues} = cabinToEdit
  const IsEDitSession = Boolean(editId)
  const {register , handleSubmit , reset , getValues , formState } = useForm({
    defaultValues : IsEDitSession ? editValues : {}
  })
  const {errors} = formState
  
  const isWorking = isCreating || isEditing

  function onSubmit(data){ 
    const imageName = data.image?.[0]?.name || "";

    const image = typeof data.image === "string" ? data.image : data.image[0]

    if(IsEDitSession)
      editCabin({newCabin : {...data , image} , id : editId})
    else{
      createCabin({...data, image: image});
    }
    
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
          {...register("image", {
            required : IsEDitSession ? false : "This Field is Required"
           })}
          />
         
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'>
          Cancel
        </Button>
        <Button disabled={isEditing}>
         {IsEDitSession ? "Edit Session" : "Create"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
