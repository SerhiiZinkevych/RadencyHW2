import { useState } from 'react';
import { INote } from '../../Interfaces';
import ModalForm from '../Modal/ModalForm';

export default function EditBtn({ note }: { note: INote }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <td onClick={handleShowModal}>
        <i className="fa-solid fa-pencil"></i>
      </td>
      {showModal && (
        <ModalForm
          title="Edit note"
          handleCloseModal={handleCloseModal}
          note={note}
          showModal={showModal}
        />
      )}
    </>
  );
}
