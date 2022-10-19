import express from 'express';
import { deleteStudentById, getAllStudents, getStudentById, getStudentByRoll, saveStudent, updateStudent } from '../controllers/StudentController.js';

const studentRouter=express.Router();

studentRouter.post('/students',saveStudent);
studentRouter.get('/students',getAllStudents);
studentRouter.get('/students/:id',getStudentById);
studentRouter.get('/students/roll/:roll',getStudentByRoll);
studentRouter.delete('/students/:id',deleteStudentById);
studentRouter.put('/students/:id',updateStudent);

export default studentRouter;