import { Modal, Button } from 'react-bootstrap';

type modalProps = {
  showModal: boolean;
  title: string;
  handleConfirm: () => void;
  handleCloseModal: () => void;
};

export default function ModalDialog({
  showModal,
  title,
  handleConfirm,
  handleCloseModal,
}: modalProps) {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="primary" onClick={handleConfirm}>
          Yes
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
