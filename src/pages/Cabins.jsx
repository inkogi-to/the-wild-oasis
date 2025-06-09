import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

import CabinTable from "../features/cabins/CabinTable";
import  AddCabin  from "../features/cabins/AddCabin";

function Cabins() {
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
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
