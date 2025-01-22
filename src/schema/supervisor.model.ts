import { Schema, model } from 'mongoose'

import CustomSchema from './custom.model'

const SupervisorSchema = new Schema({
    ...CustomSchema.obj,
    department: {
        type: String,
        required: true
    }
})

const Supervisor = model('Supervisor', SupervisorSchema);

export default Supervisor;
