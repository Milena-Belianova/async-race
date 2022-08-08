import { updateCar } from '../components/api';
import { loadCars, state, updateState } from '../index';

export const updateSelectedCar = async (): Promise<void> => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInput = document.getElementById('updateInput') as HTMLInputElement;
    const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
    const newName = updateInput.value;
    const newColor = updateInputColor.value;
    updateCar(selectedCar?.id, { name: newName, color: newColor });
  }
  updateState({ selectedCar: undefined });
  loadCars();
};
