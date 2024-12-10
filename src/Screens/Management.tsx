import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createSubject } from '../apiService'; // Ajusta la ruta según sea necesario

const Management: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleManagement = async () => {
    try {
      const subjectData = { nombre, descripcion };
      await createSubject(subjectData);
      console.log('Asignatura creada:', subjectData);
      navigate('/menu');
    } catch (error) {
      console.error('Error al crear la asignatura:', error);
    }
  };

  return (
    <div style={styles.container}>
      <Link to="/Menu" style={styles.backButton}>Volver</Link>
      <h1>Crear Asignatura</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Nombre de la Asignatura"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Descripción de la Asignatura"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleManagement} style={styles.button}>Crear Asignatura</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  backButton: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Management;