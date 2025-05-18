import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import styled from 'styled-components';

import Table from '../../components/Table';
import Menus from '../../components/Menus';
import Modal from '../../components/Modal';

import { formatCurrency } from '../../utils/helper';
import CreateCabinForm from './CreateCabinForm';

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;

  &:hover {
    transform: scale(1.5) translateX(-7px);
  }
`;

const Cabin = styled.div`
  font-family: 'sono';
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-slate-600);
`;

const Price = styled.div`
  font-family: 'sono';
  font-size: 1.6rem;
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'sono';
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <Table.Row>
      <Img
        src={image ? image : null}
        alt={name}
      />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}

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
            <CreateCabinForm />
          </Modal.Window>

          <Modal.Window name='confirm-delete'>
            <div>Are you sure you want to delete?</div>
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default CabinRow;
