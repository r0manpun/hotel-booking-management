import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import styled from 'styled-components';

import Table from '../../components/Table';
import Menus from '../../components/Menus';
import Modal from '../../components/Modal';
import CabinEditForm from './CabinEditForm';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-slate-100);
  }
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  return (
    <Table.Row>
      <img
        src={image ? image : null}
        alt={name}
      />
      <div>{name}</div>
      <div>Fits up to {maxCapacity}</div>
      <div>{regularPrice}</div>
      {discount ? <div>{discount}</div> : <span>&mdash;</span>}

      <Modal>
        <Menus.Menu>
          <Menus.Toogle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button icon={<HiSquare2Stack />}>Duplicate</Menus.Button>
            <Modal.Open opens='edit-form'>
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>
            <Modal.Open opens='confirm-delete'>
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name='edit-form'>
            <CabinEditForm />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default CabinRow;
