import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function() {
    async function fetchCabins() {
      const cabins = await getCabins();
      console.log(cabins);
    }
    fetchCabins();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
