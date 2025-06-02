import Row from '../components/Row';
import CabinTable from '../features/cabins/CabinTable';
import Heading from '../components/Heading';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import AddCabin from '../features/cabins/AddCabin';

const fakeCabin = [
  {
    id: '001',
    name: 'Small Cabin',
    maxCapacity: 2,
    regularPrice: 400,
    discount: 0,
    image: null,
    description: 'clean and good',
  },
  {
    id: '002',
    name: 'big Cabin',
    maxCapacity: 4,
    regularPrice: 1000,
    discount: 150,
    image: null,
    description: 'clean and good',
  },
];

function Cabins() {
  return (
    <>
      <Row>
        <Heading>All Cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row type='vertical'>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
