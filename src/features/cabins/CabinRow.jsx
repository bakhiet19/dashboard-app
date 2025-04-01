import styled from 'styled-components';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabinForm } from './useCreateCabinForm';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';


const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

const StyledTableRow = styled.div`
  display: grid;
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  padding: 1.2rem 2.4rem;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`

const StyledButton = styled.button`
  padding: 6px 12px;
`

function CabinRow({ cabin }) {

  const {isLoading , deleteCabin} = useDeleteCabin()  
  const {createCabin , isCreating} = useCreateCabinForm()


  function handleDuplicate(params) {
    createCabin({
      name : `Copy of ${ name}`,
      maxCapacity , reqularPrice , discount , image , description
    })
  }



  const {
    id: cabinId,
    name,
    maxCapacity,
    reqularPrice,
    discount,
    image,
    description,
    isDeleting
  } = cabin;


 
  return (
    <>
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{reqularPrice}</Price> 
      <Discount>{discount}</Discount>
      <div style={{display : "flex" , justifyContent : "space-around"}}>
      <StyledButton onClick={handleDuplicate}> <HiSquare2Stack /> </StyledButton>
      <Modal>
        
      <Modal.Open opens="delete">
         <StyledButton> <HiTrash /> </StyledButton>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete resource="cabins" disabled={isDeleting} onConfirm={() => deleteCabin(cabinId)} closeModal />

      </Modal.Window>
      <Modal.Open opens="edit">
        <StyledButton> <HiPencil /> </StyledButton>
      </Modal.Open>
       <Modal.Window name="edit">
       <CreateCabinForm cabinToEdit={cabin} />
       </Modal.Window>
      </Modal>
   
      </div>
    </Table.Row>
    </>
  );
}

export default CabinRow;
