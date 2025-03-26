import styled from 'styled-components';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';


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

  const [showForm , setShowForm] = useState(false)
  const {isLoading , deleteCabin} = useDeleteCabin()  


  const {
    id: cabinId,
    name,
    maxCapacity,
    reqularPrice,
    discount,
    image,
    description,
  } = cabin;


 
  return (
    <>
    <StyledTableRow>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity}</div>
      <Price>{reqularPrice}</Price> 
      <Discount>{discount}</Discount>
      <div style={{display : "flex" , justifyContent : "space-around"}}>
      <StyledButton disabled={isLoading} onClick={() => deleteCabin(cabinId)}>Delete</StyledButton>
      <StyledButton onClick={() => setShowForm((form) => ! form)}>Edit</StyledButton>
      </div>
    </StyledTableRow>
    {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
