import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAttendances, createAttendance } from '../apiService'; // Asegúrate de tener estas funciones en tu servicio API

interface Student {
  id: number;
  name: string;
  attendance: number;
}

const CheckAttendance: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState<Student[]>([]);
  const studentsPerPage = 5; // Número de estudiantes por página

  useEffect(() => {
    // Obtener datos de asistencia desde el backend
    const fetchAttendances = async () => {
      try {
        const response = await getAttendances();
        setStudents(response.data);
      } catch (error) {
        console.error('Error al obtener las asistencias:', error);
      }
    };

    fetchAttendances();
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.id.toString().includes(searchTerm)
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

  const handleAttendanceChange = async (studentId: number, presente: boolean) => {
    const attendanceData = {
      fecha: new Date().toISOString(),
      presente,
      estudianteId: studentId,
    };

    try {
      await createAttendance(attendanceData);
      console.log('Asistencia registrada:', attendanceData);
    } catch (error) {
      console.error('Error al registrar la asistencia:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/Menu" style={styles.backButton}>Volver</Link>
      
      <h1>Asistencia</h1>

      {/* Filtros debajo del título */}
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Buscar por nombre o ID"
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
              <p>ID: {student.id}</p>
              
              {/* Barra de progreso de asistencia */}
              <div style={styles.progressContainer}>
                <div style={{ ...styles.progressBar, width: `${student.attendance}%` }}></div>
              </div>
              <p>{student.attendance}% asistencia</p>
              <button onClick={() => handleAttendanceChange(student.id, true)}>Presente</button>
              <button onClick={() => handleAttendanceChange(student.id, false)}>Ausente</button>
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