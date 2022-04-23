import NotesTable from '../components/NotesTable/NotesTable';
import SummaryTable from '../components/SummaryTable/SummaryTable';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainPage() {
  return (
    <div className="content">
      <NotesTable />
      <SummaryTable />
    </div>
  );
}
