import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './src/db/db';

import { addSupervisor } from './src/controller/supervisor.controller';
import { addEmployee } from './src/controller/employee.controller';

const app = express();

app.use(cors())

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5001

addSupervisor();
addEmployee();

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})
