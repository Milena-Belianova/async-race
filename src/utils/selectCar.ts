import { state } from '..';

export const selectCar = (id: number, name: string, color: string): void => {
  const updateInput = document.getElementById('updateInput') as HTMLInputElement;
  const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
  updateInput.value = name;
  updateInputColor.setAttribute('value', `${color}`);
  state.selectedCar = { id, name, color };
};

export const updateSelectedCarStateName = (): void => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInput = document.getElementById('updateInput') as HTMLInputElement;
    const newName = updateInput.value;
    selectedCar.name = newName;
  }
};

export const updateSelectedCarStateColor = (): void => {
  const { selectedCar } = state;
  if (selectedCar) {
    const updateInputColor = document.getElementById('updateInputColor') as HTMLInputElement;
    const newColor = updateInputColor.value;
    selectedCar.color = newColor;
  }
};

export const updateCreateCarState = (): void => {
  const createInput = document.getElementById('createInput') as HTMLInputElement;
  const createInputColor = document.getElementById('createInputColor') as HTMLInputElement;
  const newName = createInput.value;
  const newColor = createInputColor.value;
  state.creatingCar = { name: newName, color: newColor };
};
