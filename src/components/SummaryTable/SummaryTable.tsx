import { useSelector } from 'react-redux';
import { StateType } from '../../Interfaces';

export default function SummaryTable() {
  const categories = useSelector((state: StateType) => {
    const summary = state.categories.map((category) => {
      const notes = state.notes.filter(
        (note) => note.categoryId === category.id
      );
      const data = notes.reduce(
        (acc, note) => {
          acc.active += note.isActive ? 1 : 0;
          acc.archived += note.isActive ? 0 : 1;
          return acc;
        },
        { active: 0, archived: 0 }
      );
      return {
        id: category.id,
        icon: category.icon,
        name: category.name,
        active: data.active,
        archived: data.archived,
      };
    });
    return summary;
  });
  return (
    <div className="categories">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Note Category</th>
            <th>Active</th>
            <th>Archived</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>
                <i className={`fa-solid ${category.icon}`}></i>
              </td>
              <td>{category.name}</td>
              <td>{category.active}</td>
              <td>{category.archived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
