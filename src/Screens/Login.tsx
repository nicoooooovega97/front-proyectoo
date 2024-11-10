import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = () => {
    // Lógica para verificar el usuario y contraseña
    console.log('Iniciar sesión con RUT:', rut, 'y contraseña:', password);

    // Si el usuario es "admin", redirigimos al menú principal
    if (rut === 'admin' && password === 'admin') {
      navigate('/menu');  // Redirige al menú principal
    } else {
      navigate('/ListSubjects');  // Redirige al menú del profesor
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backButton}>Volver</Link>
      <h1>Iniciar Sesión</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="RUT"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Ingresar
        </button>
        <Link to="/forgot-password" style={styles.button}>
          Olvidé mi contraseña
        </Link>
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
    textDecoration: 'none', // Asegurarte que sea un enlace visualmente
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

export default Login;
