import { useSelector } from 'react-redux';
import { StateType } from '../../Interfaces';
import ArchiveBtn from './ArchiveBtn';
import CreateBtn from './CreateBtn';
import DeleteBtn from './DeleteBtn';
import DeleteAllBtn from './DeleteAllBtn';
import EditBtn from './EditBtn';
import ShowArchiveBtn from './ShowArchiveBtn';

export default function NotesTable() {
  const notes = useSelector((state: StateType) => {
    const activeNotes = state.notes.filter((note) => note.isActive);
    const dataForTemplate = activeNotes.map(
      ({ id, name, created, categoryId, content, isActive }) => {
        const category = state.categories.find(
          (category) => category.id === categoryId
        );
        const datesArr = content.match(
          /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g
        );
        const dates = datesArr ? datesArr.toString() : '';
        return {
          id,
          name,
          created,
          content,
          dates,
          categoryId: Number(category?.id),
          isActive,
          categoryName: category?.name,
          icon: category?.icon,
        };
      }
    );
    return dataForTemplate;
  });

  return (
    <>
      <div className="notes">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Created</th>
              <th>Category</th>
              <th>Content</th>
              <th>Dates</th>
              <th></th>
              <ShowArchiveBtn />
              <DeleteAllBtn />
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>
                  <i className={['fa-solid', note.icon].join(' ')}></i>
                </td>
                <td>{note.name}</td>
                <td>{note.created}</td>
                <td>{note.categoryName}</td>
                <td>{note.content}</td>
                <td>{note.dates}</td>
                <EditBtn note={note} />
                <ArchiveBtn note={note} />
                <DeleteBtn note={note} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateBtn />
    </>
  );
}
