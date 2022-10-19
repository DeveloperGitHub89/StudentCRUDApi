import express from 'express';
import 'dotenv/config';
import { configureDb } from './src/configs/DbConfig.js';
import studentRouter from './src/routers/StudentRouter.js';

const app=express();

configureDb();
app.use(express.json())
app.use(studentRouter);
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server is running at ${process.env.SERVER_PORT}`);
});
