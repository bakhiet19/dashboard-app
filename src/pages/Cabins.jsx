import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";



function Cabins() {

  return (
    <div>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>

    <Row>
    <CabinTable />
     <AddCabin />
    </Row>
    </div>

  );
}

export default Cabins;
