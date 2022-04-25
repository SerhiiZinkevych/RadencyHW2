import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalDialog from '../Modal/ModalDialog';
import { archiveNote } from '../../redux/reducers/notesReducer';
import { INote } from '../../Interfaces';

export default function ArchiveBtn({ note }: { note: INote }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(archiveNote(Number(note.id)));
    handleCloseModal();
  };

  return (
    <>
      <td data-type="archive" onClick={handleShowModal}>
        <i className="fa-solid fa-box-archive"></i>
      </td>
      <ModalDialog
        title={`Do you really want to archive the "${note.name}"?`}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
