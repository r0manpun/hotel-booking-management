import Menus from '../../components/Menus';
import Table from '../../components/Table';

function BookingTable() {
  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2fr 1fr 1fr 0.6fr'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Date</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={[]}
          render={() => (
            <Table.Row>
              <img
                src={null}
                alt=''
              />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <Menus.Menu>
                <Menus.Toogle id={''} />
                <Menus.List id={''}>
                  <Menus.Button icon={<HiSquare2Stack />}>
                    Duplicate
                  </Menus.Button>
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Menus.List>
              </Menus.Menu>
            </Table.Row>
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
