import Supervisor from "../schema/supervisor.model";

async function addSupervisor() {
    await Supervisor.create({
        name: 'Carlos',
        lastName: 'Galindo',
        salary: 20000,
        position: 'Boss',
        department: 'HH RR'
    });
    console.log('Supervisor added successfully');
}

export {
    addSupervisor
}
