import Filter from '../../components/Filter';
import SortBy from '../../components/SortBy';
import TableOperations from '../../ui/TableOperations';

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'checked-out', label: 'Checked out' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          {
            value: 'startDate-desc',
            label: 'Sort by date (recent first)',
          },
          {
            value: 'startDate-asc',
            label: 'Sort by date (earlier first)',
          },
          {
            value: 'totalPrice-desc',
            label: 'Sort by price (high first)',
          },
          {
            value: 'totalPrice-asc',
            label: 'Sort by price (low first)',
          },
        ]}
      />
    </TableOperations>
  );
}
export default BookingTableOperations;
