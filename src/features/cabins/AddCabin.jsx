import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';
import { useState } from 'react';

function AddCabin() {

  const [isOpenModal , setIsOpenModal] = useState(false)

  function onClose(){
    setIsOpenModal((open) => !open)
  }
  
  return (
    <div>
    <Button onClick={() => setIsOpenModal((modal) => !modal)}>Add New Cabin</Button>
    {isOpenModal && <Modal onClose={onClose}>
      <CreateCabinForm onClose={onClose} />
      </Modal>}
    </div>
  )
}

export default AddCabin;
