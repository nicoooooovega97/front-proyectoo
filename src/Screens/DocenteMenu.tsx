import React from 'react';
import { Link } from 'react-router-dom';

const DocenteMenu: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Menú del Docente</h1>
      <p>Bienvenido al menú del docente.</p>
      <div style={styles.buttonContainer}>
        <Link to="/profile" style={styles.button}>Ver Perfil</Link>
        <Link to="/ListSubjects" style={styles.button}>Ver Asignaturas</Link>
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
    gap: '10px',
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
  link: {
    marginTop: '20px',
    textDecoration: 'none',
    color: 'blue',
  },
};

export default DocenteMenu;