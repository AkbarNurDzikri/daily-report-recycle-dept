import getAllMesin from './getAllMachines.js';
import createMachine from  './createMachine.js';
import updateMachine from './updateMachine.js';

const formHandler = async (e, machineName, setMachines, handleCloseModal, machineId, buttonTextForm) => {
  e.preventDefault();

  switch(buttonTextForm) {
    case 'Simpan':
      await createMachine(machineName);
      const refreshData = await getAllMesin();
      setMachines(refreshData);
      handleCloseModal();
      break;
    case 'Update':
      await updateMachine(machineId, machineName);
      const updatedData = await getAllMesin();
      setMachines(updatedData);
      handleCloseModal();
      break;
  }
}

export default formHandler;