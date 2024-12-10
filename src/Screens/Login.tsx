import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../apiService'; // Asegúrate de tener esta función en tu servicio API

const Login: React.FC = () => {
  const [useRut, setUseRut] = useState(false); // Estado para alternar entre RUT y correo
  const [correo, setCorreo] = useState('');
  const [rut, setRut] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async () => {
    try {
      const loginData = useRut ? { rut } : { correo, contrasena };
      const response = await login(loginData);
      const { tipo } = response.data;

      // Redirigir según el tipo de usuario
      if (tipo === 'admin') {
        navigate('/menu');  // Redirige al menú principal
      } else if (tipo === 'docente') {
        navigate('/DocenteMenu');  // Redirige al menú del docente
      } else if (tipo === 'nodocente') {
        navigate('/NoDocenteMenu');  // Redirige al menú de no docente
      } else if (tipo === 'estudiante') {
        navigate('/StudentMenu');  // Redirige al menú del estudiante
      } else {
        console.error('Tipo de usuario desconocido');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backButton}>Volver</Link>
      <h1>Iniciar Sesión</h1>
      <div style={styles.form}>
        <div style={styles.toggleContainer}>
          <label>
            <input
              type="radio"
              checked={!useRut}
              onChange={() => setUseRut(false)}
            />
            Ingresar con Correo
          </label>
          <label>
            <input
              type="radio"
              checked={useRut}
              onChange={() => setUseRut(true)}
            />
            Ingresar con RUT
          </label>
        </div>
        {useRut ? (
          <input
            type="text"
            placeholder="RUT"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            style={styles.input}
          />
        ) : (
          <>
            <input
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              style={styles.input}
            />
          </>
        )}
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
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '10px',
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
    textDecoration: 'none', // Asegúrate de que sea un enlace visualmente
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