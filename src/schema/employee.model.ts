import { Schema, model } from 'mongoose';

import CustomSchema from './custom.model';

const EmployeeSchema = new Schema({
    ...CustomSchema.obj,
    holiday: {
        required: true,
        type: Number
    }
})

const Employee = model('Employee', EmployeeSchema);

export default Employee;
