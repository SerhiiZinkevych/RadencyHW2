import { ChangeEvent, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { INote, StateType } from '../../Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { editNote, addNote } from '../../redux/reducers/notesReducer';

type modalProps = {
  showModal: boolean;
  title: string;
  note: INote | undefined;
  handleCloseModal: () => void;
};

export default function ModalWindow({
  showModal,
  title,
  note,
  handleCloseModal,
}: modalProps) {
  const categories = useSelector((state: StateType) => {
    return state.categories;
  });
  const notes = useSelector((state: StateType) => {
    return state.notes;
  });
  const [name, setName] = useState(note?.name || '');
  const [categoryId, setCategoryId] = useState(note?.categoryId || 1);
  const [content, setContent] = useState(note?.content || '');
  const dispatch = useDispatch();

  const handleNameChanged = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setName(value);

  const handleCategoryChanged = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => setCategoryId(Number(value));

  const handleContentChanged = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setContent(value);

  const handleSaveChanges = () => {
    if (note) {
      dispatch(editNote({ ...note, name, categoryId, content }));
    } else {
      const allIDs = notes.map((note) => Number(note.id));
      const maxId = Math.max(...allIDs) + 1;
      const created = new Date().toLocaleDateString();
      const newNote = {
        id: maxId,
        created,
        name,
        categoryId: Number(categoryId),
        content,
        isActive: true,
      };

      dispatch(addNote(newNote));
    }

    handleCloseModal();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleNameChanged}
                value={name}
                placeholder="Name the note..."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>

              <Form.Select
                aria-label="Default select example"
                onChange={handleCategoryChanged}
                value={categoryId}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleContentChanged}
                value={content}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
