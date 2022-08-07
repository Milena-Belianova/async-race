import { createButtonElement } from '../../../components/renderComponents';
import { renderWinnersPage } from '../../winners/render/renderWinnersPage';
import { renderGaragePage } from './renderGaragePage';

export const createHeaderFragment = (): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  const header: HTMLElement = document.createElement('header');
  header.className = 'header';

  const toGarageBtn = createButtonElement({ id: 'toGarage', className: 'button button_color-green', textContent: 'TO GARAGE' });
  toGarageBtn.addEventListener('click', () => renderGaragePage());
  const toWinnersBtn = createButtonElement({ id: 'toWinners', className: 'button button_color-green', textContent: 'TO WINNERS' });
  toWinnersBtn.addEventListener('click', () => renderWinnersPage());

  header.append(toGarageBtn, toWinnersBtn);
  fragment.append(header);
  return fragment;
};
