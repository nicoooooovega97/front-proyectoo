import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  // Aquí puedes obtener la información del usuario desde el estado global o una API
  const user = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@example.com',
    tipo: 'docente', // Puede ser 'admin', 'docente', 'nodocente', etc.
  };

  return (
    <div style={styles.container}>
      <Link to="/menu" style={styles.backButton}>Volver</Link>
      <h1>Perfil de Usuario</h1>
      <div style={styles.profileInfo}>
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Correo:</strong> {user.correo}</p>
        <p><strong>Tipo de Usuario:</strong> {user.tipo}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Editar Perfil</button>
        <button style={styles.button}>Agregar Información</button>
        <button style={styles.button}>Eliminar Cuenta</button>
      </div>
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
  profileInfo: {
    marginBottom: '20px',
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
  },
};

export default Profile;