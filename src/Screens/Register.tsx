import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  // Definimos el estado para cada uno de los campos del formulario
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [motherLastName, setMotherLastName] = useState('');
  const [rut, setRut] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [medicalRecord, setMedicalRecord] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para el mensaje de éxito

  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Guardar los datos del formulario (puedes agregar lógica para enviar los datos a una API)
    console.log({
      firstName, lastName, motherLastName, rut, age, course, medicalRecord
    });

    // Mostrar mensaje de éxito
    setIsSuccess(true);

    // Redirigir al menú después de 2 segundos
    setTimeout(() => {
      navigate('/Menu'); // Redirige al menú usando navigate
    }, 2000); // Redirige después de 2 segundos
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
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            style={styles.input} 
          />
        </div>
        
        <div style={styles.inputGroup}>
          <label>Apellido Paterno:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            style={styles.input} 
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Apellido Materno:</label>
          <input 
            type="text" 
            value={motherLastName} 
            onChange={(e) => setMotherLastName(e.target.value)} 
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
          <label>Edad:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            style={styles.input} 
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Curso:</label>
          <input 
            type="text" 
            value={course} 
            onChange={(e) => setCourse(e.target.value)} 
            style={styles.input} 
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Registro Médico:</label>
          <input 
            type="text" 
            value={medicalRecord} 
            onChange={(e) => setMedicalRecord(e.target.value)} 
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
