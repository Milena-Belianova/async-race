import { updateCar } from '../components/api';
import { state } from '../index';
import { renderGaragePage } from '../pages/garage/render/renderGaragePage';

export const updateSelectedCar = async (): Promise<void> => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInput = document.getElementById('updateInput') as HTMLInputElement;
    const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
    const newName = updateInput.value;
    const newColor = updateInputColor.value;
    updateCar(selectedCar?.id, { name: newName, color: newColor });
  }
  state.selectedCar = undefined;
  await state.loadCars();
  renderGaragePage();
};
