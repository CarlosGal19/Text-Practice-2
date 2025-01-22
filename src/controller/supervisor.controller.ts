import Supervisor from "../schema/supervisor.model";

async function addSupervisor() {
    try {
        await Supervisor.create({
            name: 'Carlos',
            lastName: 'Galindo',
            salary: 20000,
            position: 'Boss',
            department: 'HH RR'
        });
        console.log('Supervisor added successfully');
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export {
    addSupervisor
}
