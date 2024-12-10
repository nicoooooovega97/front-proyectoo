import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login'; 
import Menu from './Screens/Menu'; 
import CheckAttendance from './Screens/CheckAttendance';
import Management from './Screens/Management';
import StudentRegistration from './Screens/StudentRegistration';
import ForgotPassword from './Screens/ForgotPassword'; 
import Register from './Screens/Register';
import StudentList from './Screens/StudentList';
import ListSubjects from './Screens/ListSubjects';
import GradeInput from './Screens/GradeInput';
import RegisterTeacher from './Screens/RegisterTeacher';
import Profile from './Screens/Profile'; // Importa el nuevo componente de perfil
import StudentMenu from './Screens/StudentMenu'; // Importa el nuevo componente de menú de estudiante
import DocenteMenu from './Screens/DocenteMenu'; // Importa el nuevo componente de menú de docente
import NoDocenteMenu from './Screens/NoDocenteMenu'; // Importa el nuevo componente de menú de no docente
import { fetchItems, createItem } from './api';


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/menu" element={<Menu />} />
      <Route path="/checkAttendance" element={<CheckAttendance />} />
      <Route path="/management" element={<Management />} />
      <Route path="/studentRegistration" element={<StudentRegistration />} />
      <Route path="/register" element={<Register />} />
      <Route path='/studentList' element ={<StudentList/>} />
      <Route path='/listSubjects' element ={<ListSubjects/>} />
      <Route path='/gradeInput' element ={<GradeInput/>} />
      <Route path='/registerTeacher' element ={<RegisterTeacher/>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/StudentMenu" element={<StudentMenu />} /> {/* Nueva ruta para el menú del estudiante */}
      <Route path="/DocenteMenu" element={<DocenteMenu />} /> {/* Nueva ruta para el menú del docente */}
      <Route path="/NoDocenteMenu" element={<NoDocenteMenu />} /> {/* Nueva ruta para el menú de no docente */}
    </Routes>)
  
}

export default App;