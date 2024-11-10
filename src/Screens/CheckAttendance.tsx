import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckAttendance: React.FC = () => {
  const [course, setCourse] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5; // Número de estudiantes por página
  
  const students = [
    { name: 'Juan Pérez', rut: '12345678-9', course: '1° medio', attendance: 75 },
    { name: 'Ana González', rut: '98765432-1', course: '3° basico', attendance: 85 },
    { name: 'Pedro Veliz', rut: '32430543-3', course: '3° basico', attendance: 90 },
    { name: 'Estaban Vega', rut: '65321453-4', course: '3° basico', attendance: 99 },
    { name: 'Maria Araya', rut: '2254754-5', course: '2° basico', attendance: 100 },
    { name: 'Jose Lopez', rut: '3454653-6', course: '1° medio', attendance: 88 },
    { name: 'Francisca González', rut: '23653452-1', course: '1° basico', attendance: 77 },
    { name: 'Diego Barraza', rut: '65493123-5', course: '1° basico', attendance: 89 },
    { name: 'Fernando Rojas', rut: '19324352-1', course: '5° basico', attendance: 100 },
    { name: 'Juan Araya', rut: '20435345-2', course: '5° basico', attendance: 80 },
    // Agrega más estudiantes aquí
  ];

  const filteredStudents = students.filter((student) =>
    (course === '' || student.course === course) &&
    (student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.rut.includes(searchTerm))
  );

  // Lógica de paginación
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={styles.container}>
      <Link to="/Menu" style={styles.backButton}>Volver</Link>
      
      <h1>Asistencia</h1>

      {/* Filtros debajo del título */}
      <div style={styles.filters}>
        <select value={course} onChange={(e) => setCourse(e.target.value)} style={styles.select}>
          <option value="">Todos los cursos</option>
          <option value="1° basico">1° basico</option>
          <option value="2° basico">2° basico</option>
          <option value="3° basico">3° basico</option>
          <option value="4° basico">4° basico</option>
          <option value="5° basico">5° basico</option>
          <option value="6° basico">6° basico</option>
          <option value="7° basico">7° basico</option>
          <option value="8° basico">8° basico</option>
          <option value="1° medio">1° medio</option>
          <option value="2° medio">2° medio</option>
          <option value="3° medio">3° medio</option>
          <option value="4° medio">4° medio</option>
        </select>

        <input
          type="text"
          placeholder="Buscar por nombre o RUT"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Lista de estudiantes paginada */}
      <div style={styles.studentList}>
        {currentStudents.length > 0 ? (
          currentStudents.map((student, index) => (
            <div key={index} style={styles.studentCard}>
              <p><strong>{student.name}</strong></p>
              <p>RUT: {student.rut}</p>
              <p>Curso: {student.course}</p>
              
              {/* Barra de progreso de asistencia */}
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: `${student.attendance}%` }}></div>
              </div>
              <p>{student.attendance}% asistencia</p>
            </div>
          ))
        ) : (
          <p>No se encontraron estudiantes</p>
        )}
      </div>

      {/* Paginación */}
      <div style={styles.pagination}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1} style={styles.pageButton}>Anterior</button>
        <span>{currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} style={styles.pageButton}>Siguiente</button>
      </div>
    </div>
  );
};

// Estilos
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    position: 'relative',
    padding: '20px',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    textDecoration: 'none',
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
  },
  filters: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    backgroundColor: '#f1f1f1',
    padding: '10px',
    borderRadius: '5px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  studentList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '600px',
    marginTop: '20px', 
  },
  studentCard: {
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    fontSize: '14px',
  },
  progressContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '5px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'green',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  pageButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CheckAttendance;
