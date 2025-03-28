import { updateSetting } from '../../services/apiSettings';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useEditSettings } from './useEditSettings';
import { useSettings } from './useSettings';

function UpdateSettingsForm() {

  const {isLoading , error , settings : {
    minBookingLength , maxBookingLength , maxNumberQuests , breakfastPrice
  } = {}} = useSettings()


  const {editSettings , isEditing} = useEditSettings()

  function handleUpdate(e , field){
    const {value} = e.target

    if(! value) return
    editSettings({
      [field] : value
    })

  }



  if(isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e) => handleUpdate(e , "minBookingLength")} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={ maxBookingLength} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
