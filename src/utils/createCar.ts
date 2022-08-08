import { createCar } from '../components/api';
import { updateState } from '../index';

export const createNewCar = async (): Promise<void> => {
  const createInput = document.getElementById('createInput') as HTMLInputElement;
  const createInputColor = document.getElementById('createInputColor') as HTMLInputElement;
  const newName = createInput.value;
  const newColor = createInputColor.value;
  createCar({ name: newName, color: newColor });
  updateState({ creatingCar: undefined });
};
