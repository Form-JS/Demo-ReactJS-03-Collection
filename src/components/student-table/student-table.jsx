const StudentTable = ({ students }) => {
    const studentsJSX = students.map(
        s => <StudentTableRow key={s.id} {...s} />
    );

    return (
        <>
            <h2>Liste des étudiants</h2>
            <table>
                <StudentTableHead />
                <tbody>
                    {studentsJSX}
                </tbody>
            </table>
        </>
    );
};

const StudentTableHead = () => (
    <thead>
        <tr>
            <th>Nom</th>
            <th>Resultat</th>
        </tr>
    </thead>
);

const StudentTableRow = ({ firstname, lastname, result }) => (
    <tr>
        <td>{firstname} {lastname}</td>
        <td>{result !== null ? result : '/'}</td>
    </tr>
);

export default StudentTable;