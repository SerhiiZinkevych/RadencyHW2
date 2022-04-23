import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalDialog from '../Modal/ModalDialog';
import { deleteAllNotes } from '../../redux/reducers/notesReducer';

export default function DeleteBtn() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteAllNotes());
    handleCloseModal();
  };

  return (
    <>
      <th onClick={handleShowModal}>
        <i className="fa-solid fa-trash-can"></i>
      </th>
      <ModalDialog
        title={`Do you really want to delete all active notes?`}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
