
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api', // Reemplaza con la URL de tu backend
});

export const getAttendances = () => {
  return api.get('/attendances');
};

export const createAttendance = (attendanceData: any) => {
  return api.post('/attendances', attendanceData);
};

export const createSubject = (subjectData: any) => {
  return api.post('/subjects', subjectData);
};

export const createStudent = (studentData: any) => {
  return api.post('/estudiante', studentData);
};

export const getStudents = () => {
  return api.get('/students');
};

export const createNota = (notaData: any) => {
  return api.post('/notas', notaData);
};

export const login = (loginData: any) => {
  return api.post('/login', loginData);
};

// Asegúrate de que esta función esté definida y exportada
export const getSubjects = () => {
  return api.get('/subjects');
};