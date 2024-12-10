import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSubjects } from '../apiService'; // Asegúrate de tener esta función en tu servicio API

const ListSubjects: React.FC = () => {
  const [subjects, setSubjects] = useState<{ name: string; code: string }[]>([]);

  useEffect(() => {
    // Obtener la lista de asignaturas desde el backend
    const fetchSubjects = async () => {
      try {
        const response = await getSubjects();
        setSubjects(response.data);
      } catch (error) {
        console.error('Error al obtener las asignaturas:', error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backButton}>Salir</Link>
      <h1>Asignaturas del Profesor</h1>

      {/* Tabla de asignaturas */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Acción</th> {/* Columna para registrar asistencia */}
            <th>Registrar Nota</th> {/* Nueva columna para registrar la nota por asignatura */}
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} style={styles.tableRow}>
              <td>{subject.code}</td>
              <td>{subject.name}</td>
              <td style={styles.actionColumn}>
                <Link to="/StudentRegistration" style={styles.addButton}>Registrar Asistencia</Link>
              </td>
              <td style={styles.actionColumn}>
                <Link to="/GradeInput" style={styles.addButton}>Registrar Nota</Link> {/* Botón para registrar nota */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Estilos con tipos correctos
const styles = {
  container: {
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    height: '100vh' as '100vh',
    textAlign: 'center' as 'center',
    position: 'relative' as 'relative',
    padding: '20px' as '20px',
  },
  backButton: {
    position: 'absolute' as 'absolute',
    top: '20px' as '20px',
    left: '20px' as '20px',
    textDecoration: 'none' as 'none',
    backgroundColor: 'blue' as 'blue',
    padding: '10px' as '10px',
    borderRadius: '5px' as '5px',
    color: 'white' as 'white',
  },
  table: {
    width: '80%' as '80%',
    marginTop: '20px' as '20px',
    borderCollapse: 'collapse' as 'collapse',
    textAlign: 'center' as 'center',
  },
  tableRow: {
    padding: '5px' as '5px', // Aumentamos el padding entre las filas
  },
  actionColumn: {
    padding: '10px' as '10px', // Añadimos más espacio en la columna de acción
  },
  addButton: {
    padding: '8px 15px' as '8px 15px',
    backgroundColor: '#28a745' as '#28a745',
    color: 'white' as 'white',
    border: 'none' as 'none',
    borderRadius: '5px' as '5px',
    cursor: 'pointer' as 'pointer',
    textDecoration: 'none' as 'none',
    display: 'inline-block' as 'inline-block', // Asegura que el botón se vea correctamente
    margin: '0 10px' as '0 10px', // Asegura que haya espacio entre botones si fueran varios
  },
};

export default ListSubjects;