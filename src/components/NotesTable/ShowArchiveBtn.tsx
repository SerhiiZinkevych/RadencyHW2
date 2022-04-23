import React, { useState } from 'react';
import ModalTable from '../Modal/ModalTable';

export default function ShowArchiveBtn() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <th onClick={handleShowModal}>
        <i className="fa-solid fa-box-archive"></i>
      </th>
      <ModalTable showModal={showModal} handleCloseModal={handleCloseModal} />
    </>
  );
}
