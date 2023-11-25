import createMachineService from  './createMachineService.js';
import getAllMesin from './getAllMachines.js';

const formHandler = async (e, machineName, setMachines, handleCloseModal) => {
  e.preventDefault();

  const result = await createMachineService(machineName);
  if(result === 'success') {
    const updatedData = await getAllMesin();
    setMachines(updatedData);
    handleCloseModal();
    return 'success';
  }
}

export default formHandler;