import { loadCars, state } from '../../../index';
import { createButtonElement, createInputElement } from '../../../components/renderComponents';
import { generateCars } from '../../../utils/generateCars';
import { updateSelectedCar } from '../../../utils/updateSelectedCar';
import {
  updateCreateCarState,
  updateSelectedCarStateColor,
  updateSelectedCarStateName,
} from '../../../utils/selectCar';
import { createNewCar } from '../../../utils/createCar';
import { onRaceBtnClick, onResetBtnClick } from '../../../utils/raceReset';

export const createCarManagementFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const carManagementContainer: HTMLDivElement = document.createElement('div');
  carManagementContainer.className = 'car-management-container';

  // Create
  const createInput = createInputElement({ id: 'createInput', type: 'text', className: 'input' });
  createInput.addEventListener('change', () => updateCreateCarState());
  const createInputColor = createInputElement({
    id: 'createInputColor',
    type: 'color',
    className: 'input_type-color',
    attr: { name: 'value', value: '#ffffff' },
  });
  createInputColor.addEventListener('change', () => updateCreateCarState());
  if (state.creatingCar) {
    createInput.value = state.creatingCar?.name;
    createInputColor.setAttribute('value', state.creatingCar.color);
  }

  // Update
  const updateInput = createInputElement({ id: 'updateInput', type: 'text', className: 'input update__input' });
  updateInput.addEventListener('change', () => updateSelectedCarStateName());
  const updateInputColor = createInputElement({
    id: 'updateInputColor',
    type: 'color',
    className: 'input_type-color update__input',
    attr: { name: 'value', value: '#ffffff' },
  });
  updateInputColor.addEventListener('change', () => updateSelectedCarStateColor());
  if (state.selectedCar) {
    updateInput.value = state.selectedCar?.name;
    updateInputColor.setAttribute('value', state.selectedCar.color);
  }

  // Create/Update Btns
  const createBtn = createButtonElement({ id: 'createBtn', className: 'button', textContent: 'CREATE' });
  createBtn.addEventListener('click', () => createNewCar());
  const updateBtn = createButtonElement({ id: 'updateBtn', className: 'button', textContent: 'UPDATE' });
  updateBtn.addEventListener('click', () => updateSelectedCar());

  // Race, Reset, Generate Cars Btns
  const raceBtn = createButtonElement({
    id: 'raceBtn',
    className: 'button button_color-green',
    textContent: 'RACE',
    disabled: state.race || state.cars?.some((car) => car.position !== '0px'),
  });
  const resetBtn = createButtonElement({
    id: 'resetBtn',
    className: 'button button_color-green',
    textContent: 'RESET',
    disabled: !state.cars?.some((car) => car.position !== '0px'),
  });
  raceBtn.addEventListener('click', () => onRaceBtnClick());
  resetBtn.addEventListener('click', () => onResetBtnClick());

  // Generate cars
  const generateCarsBtn = createButtonElement({
    id: 'generateCarsBtn',
    className: 'button',
    textContent: 'GENERATE CARS',
  });
  generateCarsBtn.addEventListener('click', async () => {
    await Promise.all(generateCars());
    await loadCars();
  });

  carManagementContainer.append(
    createInput,
    createInputColor,
    createBtn,
    updateInput,
    updateInputColor,
    updateBtn,
    raceBtn,
    resetBtn,
    generateCarsBtn,
  );

  fragment.append(carManagementContainer);
  return fragment;
};
