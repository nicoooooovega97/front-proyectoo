import React from 'react';
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


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/checkAttendance" element={<CheckAttendance />} />
      <Route path="/management" element={<Management />} />
      <Route path="/studentRegistration" element={<StudentRegistration />} />
      <Route path="/register" element={<Register />} />
      <Route path='/studentList' element ={<StudentList/>} />
      <Route path='/listSubjects' element ={<ListSubjects/>} />
      <Route path='/gradeInput' element ={<GradeInput/>} />
      <Route path='/registerTeacher' element ={<RegisterTeacher/>} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Ruta para ForgotPassword */}
    </Routes>
  );
};

export default App;



