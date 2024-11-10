import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Menú Principal</h1>
      <p>Bienvenido al menú principal.</p>
      <div style={styles.buttonContainer}>
        <Link to="/register" style={styles.button}>Registrar Nuevo Estudiante</Link>
        <Link to="/registerTeacher" style={styles.button}>Registrar Nuevo Profesor</Link>
        <Link to="/management" style={styles.button}>Registrar Asignatura</Link>
        <Link to="/checkAttendance" style={styles.button}>Control de Asistencia</Link>
      </div>
      <Link to="/" style={styles.link}>Volver al Home</Link>
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
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px', // Espacio entre botones
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  link: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Menu;
