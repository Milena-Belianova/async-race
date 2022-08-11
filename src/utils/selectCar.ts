import { CarView } from '../components/state';
import { state, updateState } from '../index';

export const selectCar = (car: CarView): void => {
  const updateInput = document.getElementById('updateInput') as HTMLInputElement;
  const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
  updateInput.value = car.name;
  updateInputColor.setAttribute('value', `${car.color}`);
  updateState({ selectedCar: car });
};

export const updateSelectedCarStateName = (): void => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInput = document.getElementById('updateInput') as HTMLInputElement;
    const newName = updateInput.value;
    updateState({ selectedCar: { ...selectedCar, name: newName } });
  }
};

export const updateSelectedCarStateColor = (): void => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
    const newColor = updateInputColor.value;
    updateState({ selectedCar: { ...selectedCar, color: newColor } });
  }
};

export const updateCreateCarState = (): void => {
  const createInput = document.getElementById('createInput') as HTMLInputElement;
  const createInputColor = document.getElementById('createInputColor') as HTMLInputElement;
  const newName = createInput.value;
  const newColor = createInputColor.value;
  updateState({ creatingCar: { name: newName, color: newColor } });
};
