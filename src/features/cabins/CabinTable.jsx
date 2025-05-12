import Menus from '../../components/Menus';
import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 0.6fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={cabins}
          render={(cabin) => (
            <CabinRow
              cabin={cabin}
              key={cabin.id}
            />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
