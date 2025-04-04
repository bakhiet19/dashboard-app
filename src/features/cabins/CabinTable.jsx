import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";


const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  padding: 10px;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;


function CabinTable() {

  const { data , isLoading , error , status} = useCabins()



  return (
    <Menus>
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabins</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
  
      {data && (
        <Table.Body 
          data={data} 
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      )}
    </Table>
    </Menus>
  );
  
}

export default CabinTable;
