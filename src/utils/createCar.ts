import { createCar } from '../components/api';
import { state } from '../index';
import { renderGaragePage } from '../pages/garage/render/renderGaragePage';

export const createNewCar = async (): Promise<void> => {
  const createInput = document.getElementById('createInput') as HTMLInputElement;
  const createInputColor = document.getElementById('createInputColor') as HTMLInputElement;
  const newName = createInput.value;
  const newColor = createInputColor.value;
  createCar({ name: newName, color: newColor });
  state.creatingCar = undefined;
  await state.loadCars();
  renderGaragePage();
};
