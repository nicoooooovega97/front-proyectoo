import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createStudent } from '../apiService'; // Asegúrate de tener esta función en tu servicio API

const Register: React.FC = () => {
  // Definimos el estado para cada uno de los campos del formulario
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para el mensaje de éxito

  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Datos del formulario
    const studentData = { nombre, rut, correo };
    console.log("aqui llego")
    try {
      // Enviar los datos al backend
      await createStudent(studentData);
      console.log('Estudiante registrado:', studentData);

      // Mostrar mensaje de éxito
      setIsSuccess(true);

      // Redirigir al menú después de 2 segundos
      setTimeout(() => {
        navigate('/Menu'); // Redirige al menú usando navigate
      }, 2000); // Redirige después de 2 segundos
    } catch (error) {
      console.error('Error al registrar el estudiante:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/Menu" style={styles.backButton}>Volver</Link>
      <h1>Registrar Estudiante</h1>

      {/* Si el registro fue exitoso, mostramos el mensaje */}
      {isSuccess && <p style={styles.successMessage}>¡Estudiante registrado con éxito!</p>}

      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>RUT:</label>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Correo (opcional):</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Botón de enviar */}
        <button type="submit" style={styles.submitButton}>Registrar</button>
      </form>
    </div>
  );
};

// Estilos
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '500px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '5px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default Register;