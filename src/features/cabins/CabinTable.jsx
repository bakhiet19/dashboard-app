import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import CabinRow from "./CabinRow";


const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;


const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;


function CabinTable() {

  const { data , isLoading , error , status} = useQuery({
    queryKey : ["cabin"],
    queryFn : getCabins,     
  })

  
  console.log(status);
  
  
  return (
   <StyledTable role="table">
    <StyledHeader role="row">
      <div></div>
      <div>Cabin</div>
      <div>Capacity</div>
      <div>Price</div>
      <div>Discount</div>
      <div></div>
   
    </StyledHeader>
    {data && data.map((cabin) => {
        return <CabinRow key={cabin.id} cabin={cabin} />;
      })}
   </StyledTable>
  );
}


export default CabinTable;
