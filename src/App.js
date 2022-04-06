import './App.css';
import StudentTable from './components/student-table/student-table';

// Donnée statique => Import du fichier json
import students from './data/students.json';

function App() {
  return (
    <div className="App">
      <h1>Demo 03 - Collection</h1>

      <StudentTable students={students} />
    </div>
  );
}

export default App;
