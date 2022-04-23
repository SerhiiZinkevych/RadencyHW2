import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalDialog from '../Modal/ModalDialog';
import { deleteNote } from '../../redux/reducers/notesReducer';
import { INote } from '../../Interfaces';

export default function DeleteBtn({ note }: { note: INote }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteNote(Number(note.id)));
    handleCloseModal();
  };

  return (
    <>
      <td onClick={handleShowModal}>
        <i className="fa-solid fa-trash-can"></i>
      </td>
      <ModalDialog
        title={`Do you really want to delete the "${note.name}"?`}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
