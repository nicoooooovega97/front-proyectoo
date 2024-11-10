import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Management: React.FC = () => {
  const [name, setName] = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [professor, setProfessor] = useState('');
  const [classCount, setClassCount] = useState('');
  const [schedule, setSchedule] = useState('');
  const navigate = useNavigate();

  const handleManagement = () => {
    // Aquí puedes agregar la lógica para manejar la creación de la asignatura
    console.log('Crear asignatura con:', { name, studentCount, professor, classCount, schedule });
    // Redirigir al usuario después de crear la asignatura
    navigate('/menu');
  };

  return (
    <div style={styles.container}>
      <Link to="/Menu" style={styles.backButton}>Volver</Link>
      <h1>Crear Asignatura</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Nombre de la Asignatura"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Cantidad de Estudiantes"
          value={studentCount}
          onChange={(e) => setStudentCount(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Profesor a Cargo"
          value={professor}
          onChange={(e) => setProfessor(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Horarios"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Horarios"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleManagement} style={styles.button}>
          Crear Asignatura
        </button>
      </div>
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    position: 'relative',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
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
};

export default Management;
