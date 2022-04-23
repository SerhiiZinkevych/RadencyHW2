import React, { useState } from 'react';
import ModalForm from '../Modal/ModalForm';

export default function CreateBtn() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <ModalForm
        title="Create new note"
        handleCloseModal={handleCloseModal}
        note={undefined}
        showModal={showModal}
      />
      <button className="btn-create" onClick={handleShowModal}>
        Create note
      </button>
    </>
  );
}
