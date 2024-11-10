import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GradeInput: React.FC = () => {
  // Lista de estudiantes con una nota inicial (solo una por estudiante en este ejemplo)
  const students = [
    { firstName: 'Juan', lastName: 'Pérez', rut: '12345678-9' },
    { firstName: 'Ana', lastName: 'Gómez', rut: '98765432-1' },
    { firstName: 'Luis', lastName: 'Martínez', rut: '19283746-5' },
    { firstName: 'Marta', lastName: 'Fernández', rut: '56748392-7' },
  ];

  // Estado para almacenar las notas de los estudiantes
  const [grades, setGrades] = useState<{ [key: string]: number[] }>({
    '12345678-9': [],
    '98765432-1': [],
    '19283746-5': [],
    '56748392-7': [],
  });

  // Estado para almacenar las asignaturas
  const [subjects, setSubjects] = useState<string[]>([]);

  // Función para manejar el cambio de nota en cada celda de la tabla
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>, studentRut: string, index: number) => {
    const newGrade = parseFloat(e.target.value);
    setGrades((prevGrades) => ({
      ...prevGrades,
      [studentRut]: prevGrades[studentRut].map((grade, idx) => (idx === index ? newGrade : grade)),
    }));
  };

  // Función para calcular el promedio de cada estudiante
  const calculateAverage = (studentRut: string): number => {
    const studentGrades = grades[studentRut];
    if (studentGrades.length === 0) return 0;
    const sum = studentGrades.reduce((acc, grade) => acc + grade, 0);
    return sum / studentGrades.length;
  };

  // Función para agregar una nueva columna de notas
  const handleAddGradeColumn = () => {
    setSubjects((prevSubjects) => [...prevSubjects, `Asignatura ${prevSubjects.length + 1}`]);
    // Agregar una nueva entrada en el estado de notas para cada estudiante
    setGrades((prevGrades) => {
      const newGrades = { ...prevGrades };
      for (const studentRut in prevGrades) {
        newGrades[studentRut] = [...prevGrades[studentRut], 0]; // Añadimos una nueva nota por defecto (0)
      }
      return newGrades;
    });
  };

  return (
    <div style={styles.container}>
      <Link to="/ListSubjects" style={styles.backButton}>Volver</Link>
      <h1>Ingreso de Notas</h1>

      {/* Botón para agregar una nueva columna de notas */}
      <button onClick={handleAddGradeColumn} style={styles.addButton}>Agregar Nota</button>

      {/* Tabla de estudiantes */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            {subjects.map((subject, index) => (
              <th key={index}>{subject}</th> // Mostrar las asignaturas como encabezados de columna
            ))}
            <th>Promedio</th> {/* Columna para el promedio */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rut}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              {grades[student.rut]?.map((grade, index) => (
                <td key={index}>
                  <input
                    type="number"
                    value={grade}
                    onChange={(e) => handleGradeChange(e, student.rut, index)}
                    style={styles.input}
                    min={0}
                    max={7}
                  />
                </td>
              ))}
              <td>{calculateAverage(student.rut).toFixed(2)}</td> {/* Mostrar el promedio */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para guardar los cambios */}
      <button style={styles.finishButton}>Guardar Cambios</button>
    </div>
  );
};

// Estilos con tipos correctos
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  table: {
    width: '80%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  input: {
    padding: '5px',
    width: '50px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  finishButton: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default GradeInput;
