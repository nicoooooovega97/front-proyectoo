import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentList: React.FC = () => {
  // Lista de estudiantes de ejemplo
  const students = [
    { firstName: 'Juan', lastName: 'Pérez', rut: '12345678-9', course: 'Matemáticas' },
    { firstName: 'Ana', lastName: 'Gómez', rut: '98765432-1', course: 'Lenguaje' },
    { firstName: 'Luis', lastName: 'Martínez', rut: '19283746-5', course: 'Historia' },
    { firstName: 'Marta', lastName: 'Fernández', rut: '56748392-7', course: 'Ciencias' },
  ];

  // Datos de asistencia inicial (todos no han asistido por defecto)
  const [attendanceData, setAttendanceData] = useState(
    students.map(() => Array(3).fill(false)) // Suponemos 3 días de clase
  );

  const [days, setDays] = useState(['Día 1', 'Día 2', 'Día 3']); // Días o bloques de clase
  const [isRecording, setIsRecording] = useState(false); // Estado para saber si estamos en el modo de registro

  const navigate = useNavigate(); // Usamos useNavigate para navegar entre rutas

  // Función para agregar un nuevo día de asistencia
  const addNewDay = () => {
    const newDay = `Día ${days.length + 1}`; // Crear nombre para el nuevo día
    setDays([...days, newDay]);

    // Actualizar los datos de asistencia con una nueva columna para todos los estudiantes
    const updatedAttendance = attendanceData.map(studentAttendance => [
      ...studentAttendance,
      false, // Inicialmente nadie ha asistido (se puede modificar al hacer clic)
    ]);
    setAttendanceData(updatedAttendance);
  };

  // Función para manejar el clic en los cuadros de asistencia
  const toggleAttendance = (studentIndex: number, dayIndex: number) => {
    const updatedAttendance = [...attendanceData];
    updatedAttendance[studentIndex][dayIndex] = !updatedAttendance[studentIndex][dayIndex];
    setAttendanceData(updatedAttendance);
  };

  // Función para calcular el porcentaje de asistencia de un estudiante
  const calculateAttendancePercentage = (attendance: boolean[]) => {
    const totalClasses = attendance.length;
    const attendedClasses = attendance.filter(attended => attended).length;
    return (attendedClasses / totalClasses) * 100;
  };

  // Función para finalizar el registro de asistencia
  const finishRecording = () => {
    setIsRecording(false);
    alert('Asistencia registrada exitosamente.');
  };

  // Función para manejar tanto el registro de asistencia como la adición de un nuevo día
  const handleRegisterAttendanceAndAddDay = () => {
    // Agregar un nuevo día
    addNewDay();

    // Activar el modo de registro de asistencia
    setIsRecording(true);
    alert("Nuevo día agregado y el registro de asistencia está activado.");
  };

  // Función para navegar a la pantalla de registro de asistencia
  const goToRegisterAttendance = () => {
    navigate('/studentRegistration'); // Redirige a la pantalla de registro de asistencia
  };

  return (
    <div style={styles.container}>
      <Link to="/ListSubjects" style={styles.backButton}>Volver</Link>
      <h1>Lista de Estudiantes</h1>

      {/* Botón para registrar asistencia y agregar un nuevo día */}
      <button onClick={handleRegisterAttendanceAndAddDay} style={styles.addButton}>
        Registrar Asistencia y Agregar Día
      </button>

      {/* Si estamos en modo de registro, mostramos los cuadros de asistencia */}
      {isRecording && (
        <div>
          <h2>Seleccione la asistencia</h2>
          <button onClick={finishRecording} style={styles.finishButton}>
            Finalizar Registro
          </button>
        </div>
      )}

      {/* Tabla de asistencia */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Estudiante</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
            <th>Porcentaje de Asistencia</th> {/* Nueva columna de porcentaje */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{student.firstName} {student.lastName}</td>
              {attendanceData[studentIndex].map((attended, dayIndex) => (
                <td
                  key={dayIndex}
                  style={{
                    ...styles.attendanceCell,
                    backgroundColor: attended ? 'green' : 'red',
                    cursor: isRecording ? 'pointer' : 'default', // Cambia el cursor si estamos en modo de registro
                  }}
                  onClick={() => isRecording && toggleAttendance(studentIndex, dayIndex)}
                >
                  {attended ? 'Asistió' : 'Faltó'}
                </td>
              ))}
              {/* Nueva celda para el porcentaje */}
              <td>{calculateAttendancePercentage(attendanceData[studentIndex]).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para empezar el registro */}
      {!isRecording && (
        <button onClick={() => setIsRecording(true)} style={styles.startRecordingButton}>
          Comenzar Registro
        </button>
      )}
    </div>
  );
};

// Estilos en un objeto con tipos
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
  addButton: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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
  startRecordingButton: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  table: {
    width: '80%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  attendanceCell: {
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
  },
};

export default StudentList;
