import { updateCar } from '../components/api';
import { state, updateState } from '../index';
import { updateCarInState } from './startStopEngine';

export const updateSelectedCar = async (): Promise<void> => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInput = document.getElementById('updateInput') as HTMLInputElement;
    const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
    const newName = updateInput.value;
    const newColor = updateInputColor.value;
    await updateCar(selectedCar?.id, { name: newName, color: newColor });
    updateCarInState(selectedCar, { name: newName, color: newColor });
  }

  updateState({ selectedCar: undefined });
};
