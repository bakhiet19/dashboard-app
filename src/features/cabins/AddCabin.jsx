import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';
import CreateCabinForm from './CreateCabinForm';
import { useState } from 'react';

// function AddCabin() {

//   const [isOpenModal , setIsOpenModal] = useState(false)

//   function onClose(){
//     setIsOpenModal((open) => !open)
//   }
  
//   return (
//     <div>
//     <Button onClick={() => setIsOpenModal((modal) => !modal)}>Add New Cabin</Button>
//     {isOpenModal && <Modal onClose={onClose}>
//       <CreateCabinForm onClose={onClose} />
//       </Modal>}
//     </div>
//   )
// }

// export default AddCabin;


 export default function AddCAbin(){
    return <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>


        <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      
    </Modal>
  }
























