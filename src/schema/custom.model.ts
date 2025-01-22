import { Schema } from "mongoose";

const CustomSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    },
    position: {
        required: true,
        type: String
    },
})

export default CustomSchema;
