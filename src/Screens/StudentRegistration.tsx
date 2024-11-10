import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentRegistration: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para registrar los datos en tu base de datos o estado global
    console.log('Asignatura:', subject, 'Fecha:', date, 'Horario:', time);

    // Una vez registrado, redirige a la lista de estudiantes
    navigate('/studentList');
  };

  return (
    <div style={styles.container}>
      <Link to="/ListSubjects" style={styles.backButton}>Volver</Link>
      <h1>Registrar Asistencia</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Asignatura:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Fecha:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Hora:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.submitButton}>Registrar</button>
      </form>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column', // Asegúrate de usar 'column' como tipo explícito
    alignItems: 'center' as 'center', // Ajustar a tipo adecuado
    padding: '20px',
  },
  backButton: {
    position: 'absolute' as 'absolute', // Asegúrate de usar 'absolute' como tipo adecuado
    top: '20px',
    left: '20px',
    textDecoration: 'none',
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '5px',
    color: 'white',
  },
  form: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column' as 'column', // Asegúrate de usar 'column' como tipo adecuado
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentRegistration;
