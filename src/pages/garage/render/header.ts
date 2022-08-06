import { createButtonElement } from '../../../components/renderComponents';

export const createHeaderFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const header: HTMLElement = document.createElement('header');
  header.className = 'header';

  const toGarageBtn = createButtonElement({ id: 'toGarage', className: 'button button_color-green', textContent: 'TO GARAGE' });
  const toWinnersBtn = createButtonElement({ id: 'toWinners', className: 'button button_color-green', textContent: 'TO WINNERS' });

  header.append(toGarageBtn, toWinnersBtn);
  fragment.append(header);
  return fragment;
};
