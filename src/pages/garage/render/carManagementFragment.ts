import { render, state } from '../../..';
import { createButtonElement, createInputElement } from '../../../components/renderComponents';
import { generateCars } from '../../../utils/generateCars';

export const createCarManagementFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const carManagementContainer: HTMLDivElement = document.createElement('div');
  carManagementContainer.className = 'car-management-container';

  const createInput = createInputElement({ id: 'createInput', type: 'text', className: 'input' });
  const createInputColor = createInputElement({
    id: 'createInputColor', type: 'color', className: 'input_type-color', attr: { name: 'value', value: '#ffffff' },
  });
  const updateInput = createInputElement({ id: 'updateInput', type: 'text', className: 'input update__input' });
  const updateInputColor = createInputElement({
    id: 'createInputColor', type: 'color', className: 'input_type-color update__input', attr: { name: 'value', value: '#ffffff' },
  });

  const createBtn = createButtonElement({ id: 'createBtn', className: 'button', textContent: 'CREATE' });
  const updateBtn = createButtonElement({ id: 'updateBtn', className: 'button', textContent: 'UPDATE' });

  const raceBtn = createButtonElement({ id: 'raceBtn', className: 'button button_color-green', textContent: 'RACE' });
  const resetBtn = createButtonElement({ id: 'resetBtn', className: 'button button_color-green', textContent: 'RESET' });
  const generateCarsBtn = createButtonElement({ id: 'generateCarsBtn', className: 'button', textContent: 'GENERATE CARS' });
  generateCarsBtn.addEventListener('click', async () => {
    generateCars();
    await state.loadCars();
    render();
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
