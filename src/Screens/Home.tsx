import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../Assets/imagen.png'; // Asegúrate de ajustar la ruta

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <h1 style={styles.title}>Bienvenidos</h1>
        <Link to="/login" style={styles.button}>
          iniciar sesion
        </Link>
      </div>
      <img src={imagen} alt="Descripción de la imagen" style={styles.image} />
    </div>
  );
};

// Estilos en un objeto con tipos
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftSide: {
    flex: '1', // Ocupa 1/3 del ancho
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Alinea el contenido al inicio
    alignItems: 'flex-start', // Alinea el contenido a la izquierda
    padding: '20px', // Espacio alrededor del contenido
  },
  title: {
    textAlign: 'left', // Alinea el texto a la izquierda
  },
  image: {
    flex: '2', // Ocupa 2/3 del ancho
    width: '100%', // Asegura que la imagen use todo el ancho disponible
    height: 'auto', // Mantiene la relación de aspecto
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'blue', // Color de fondo azul
    color: 'white', // Color del texto
    textDecoration: 'none', // Sin subrayado
    borderRadius: '5px', // Bordes redondeados
    border: 'none', // Sin borde
    cursor: 'pointer', // Cursor de mano al pasar el ratón
    alignSelf: 'flex-start', // Alinea el botón al inicio del contenedor
  },
};

export default Home;
