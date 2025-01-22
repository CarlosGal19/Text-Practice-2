import Employee from "../schema/employee.model";

async function addEmployee() {
    await Employee.create({
        name: 'Carlos',
        lastName: 'Galindo',
        salary: 20000,
        position: 'Boss',
        holiday: 12
    });
    console.log('Employee added successfully');
}

export {
    addEmployee
}
