import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  useEffect(function () {
    async function fetchCabins() {
      const cabins = await getCabins();
      console.log(cabins);
    }
    fetchCabins();
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>FILTER/SORT</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button onClick={()=>setShowForm((show)=>!show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
