import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../Interfaces';
import { archiveNote } from '../../redux/reducers/notesReducer';

type modalProps = {
  showModal: boolean;
  handleCloseModal: () => void;
};

export default function ModalTable({
  showModal,
  handleCloseModal,
}: modalProps) {
  const notes = useSelector((state: StateType) => {
    const archivedNotes = state.notes.filter((note) => !note.isActive);
    const dataForTemplate = archivedNotes.map(
      ({ id, name, created, categoryId, content }) => {
        const category = state.categories.find(
          (category) => category.id === categoryId
        );
        return {
          id,
          name,
          created,
          content,
          categoryName: category?.name,
          icon: category?.icon,
        };
      }
    );
    return dataForTemplate;
  });
  const dispatch = useDispatch();
  const handleUnarchive = (id: number) => {
    dispatch(archiveNote(id));
  };

  return (
    <Modal className="modalTable" show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Archived notes</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {notes.length === 0 ? (
          <h3>There's no archived notes.</h3>
        ) : (
          <div className="archivedNotes">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Created</th>
                  <th>Category</th>
                  <th>Content</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {notes.map((note) => (
                  <tr key={note.id}>
                    <td>
                      <i className={`fa-solid ${note.icon}`}></i>
                    </td>
                    <td>{note.name}</td>
                    <td>{note.created}</td>
                    <td>{note.categoryName}</td>
                    <td>{note.content}</td>
                    <td onClick={() => handleUnarchive(note.id)}>
                      <i className="fa-solid fa-trash-can-arrow-up"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
